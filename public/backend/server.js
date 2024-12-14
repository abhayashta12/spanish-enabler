require('dotenv').config(); // Load environment variables
const express = require('express');
const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY);
const cors = require('cors');
const rateLimit = require('express-rate-limit');
const helmet = require('helmet');
const axios = require('axios'); // To make HTTP requests
const app = express();

// Middleware
app.use(express.static('public'));
app.use(express.json());

// CORS: Restrict origins to the client URL
app.use(cors({
  origin: process.env.CLIENT_URL,
  methods: ['GET', 'POST'],
  allowedHeaders: ['Content-Type'],
}));

// Mailchimp Newsletter Endpoint
app.post('/subscribe', async (req, res) => {
  const { email } = req.body;

  if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    return res.status(400).json({ error: 'Invalid email address.' });
  }

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
    res.status(500).json({ error: 'Failed to subscribe. Please try again.' });
  }
});

// Rate Limiting: Prevent abuse
const limiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: 100, // Limit each IP to 100 requests per windowMs
  message: "Too many requests from this IP, please try again later.",
});
app.use(limiter);

// Security Headers
app.use(helmet());

// Ensure Environment Variables Are Set
if (!process.env.STRIPE_SECRET_KEY || !process.env.CLIENT_URL) {
  console.error("Environment variables STRIPE_SECRET_KEY and CLIENT_URL must be set.");
  process.exit(1); // Exit if required environment variables are missing
}

// Endpoint for retrieving checkout session details
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

// POST endpoint for creating a checkout session
app.post('/create-checkout-session', async (req, res) => {
  try {
    const { courseName, price, originPage } = req.body;

    // Validate inputs
    if (!courseName || !price || isNaN(price)) {
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
            unit_amount: price, 
          },
          quantity: 1,
        },
      ],
      success_url: `${process.env.CLIENT_URL}/success?session_id={CHECKOUT_SESSION_ID}`, // Send the session ID to success page
      cancel_url: cancelUrl,
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

// Port and Listen
const PORT = process.env.PORT || 4242;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
