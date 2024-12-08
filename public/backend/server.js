require('dotenv').config(); // Load environment variables
const express = require('express');
const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY);
const cors = require('cors');
const rateLimit = require('express-rate-limit');
const helmet = require('helmet');
const axios = require('axios'); // To make HTTP requests
const app = express();

// Middleware
app.use(express.static('public')); // Serve static files
app.use(express.json()); // Parse JSON requests

// CORS Configuration
app.use(cors({
  origin: process.env.CLIENT_URL || 'http://localhost:3000',
  methods: ['GET', 'POST'],
  allowedHeaders: ['Content-Type'],
}));

// Security Headers
app.use(helmet({
  contentSecurityPolicy: false, // Adjust if inline styles/scripts are used
}));

// Rate Limiting
const limiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: 100, // Limit each IP to 100 requests per windowMs
  message: "Too many requests from this IP, please try again later.",
});
app.use(limiter);

// Environment Variable Validation
if (!process.env.STRIPE_SECRET_KEY || !process.env.CLIENT_URL || !process.env.MAILCHIMP_API_KEY || !process.env.MAILCHIMP_LIST_ID) {
  console.error("Required environment variables are missing.");
  process.exit(1);
}

// Health Check Endpoint
app.get('/', (req, res) => {
  res.status(200).json({ message: 'Server is running.' });
});

// Mailchimp Newsletter Endpoint
app.post('/subscribe', async (req, res) => {
  const { email } = req.body;

  // Validate email format
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!email || !emailRegex.test(email)) {
    return res.status(400).json({ error: 'Invalid email address.' });
  }

  // Mailchimp API Configuration
  const apiKey = process.env.MAILCHIMP_API_KEY;
  const dataCenter = apiKey.split('-')[1]; // Extract data center from API key
  const mailchimpUrl = `https://${dataCenter}.api.mailchimp.com/3.0/lists/${process.env.MAILCHIMP_LIST_ID}/members`;

  try {
    const response = await axios.post(
      mailchimpUrl,
      {
        email_address: email,
        status: 'subscribed',
      },
      {
        headers: {
          Authorization: `Basic ${Buffer.from(`anystring:${apiKey}`).toString('base64')}`,
        },
      }
    );
    res.status(200).json({ message: 'Subscription successful!' });
  } catch (error) {
    console.error(`Mailchimp error: ${error.response?.data || error.message}`);
    res.status(500).json({ error: error.response?.data?.detail || 'Failed to subscribe. Please try again.' });
  }
});

// Stripe: Retrieve Checkout Session
app.get('/retrieve-checkout-session/:sessionId', async (req, res) => {
  try {
    const sessionId = req.params.sessionId;
    if (!sessionId) {
      return res.status(400).json({ error: 'Session ID is required.' });
    }

    const session = await stripe.checkout.sessions.retrieve(sessionId);
    res.json({
      courseName: session.metadata.courseName || 'Unknown Course',
    });
  } catch (e) {
    console.error(`Error retrieving checkout session: ${e.message}`);
    res.status(500).json({ error: 'Failed to retrieve session details.' });
  }
});

// Stripe: Create Checkout Session
app.post('/create-checkout-session', async (req, res) => {
  try {
    const { courseName, price, originPage } = req.body;

    // Validate inputs
    if (!courseName || typeof courseName !== 'string' || !price || isNaN(price) || price <= 0) {
      return res.status(400).json({ error: 'Invalid course name or price.' });
    }

    // Determine the appropriate cancel URL based on the origin page
    let cancelUrl;
    if (originPage === 'Group') {
      cancelUrl = `${process.env.CLIENT_URL}/courses/Group`;
    } else if (originPage === 'oneonone') {
      cancelUrl = `${process.env.CLIENT_URL}/courses/OneonOne`;
    } else {
      cancelUrl = `${process.env.CLIENT_URL}#courses`; // fallback to general courses page
    }

    const session = await stripe.checkout.sessions.create({
      payment_method_types: ['card'],
      mode: 'payment',
      line_items: [
        {
          price_data: {
            currency: 'usd',
            product_data: {
              name: courseName,
            },
            unit_amount: price, // price in cents
          },
          quantity: 1,
        },
      ],
      success_url: `${process.env.CLIENT_URL}/success?session_id={CHECKOUT_SESSION_ID}`, // Redirect to success page
      cancel_url: cancelUrl, // Redirect to the appropriate cancel page
      metadata: {
        courseName: courseName, // Store course name in metadata
      },
    });

    res.json({ url: session.url });
  } catch (e) {
    console.error(`Error creating checkout session: ${e.message}`);
    res.status(500).json({ error: 'Failed to create checkout session.' });
  }
});

// Handle 404 for undefined routes
app.use((req, res) => {
  res.status(404).json({ error: 'Endpoint not found.' });
});

// Start Server
const PORT = process.env.PORT || 4242;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
