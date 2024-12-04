require('dotenv').config(); // Make sure to load the environment variables
const express = require('express');
const app = express();
const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY);
const cors = require('cors');

// Middleware
app.use(express.static('public'));
app.use(express.json());
app.use(cors({
  origin: process.env.CLIENT_URL,
}));

// // Root GET endpoint (this prevents the "Cannot GET /" error)
// app.get('/', (req, res) => {
//   res.send('Welcome to the payment backend server.');
// });

// Endpoint for retrieving checkout session details
app.get('/retrieve-checkout-session/:sessionId', async (req, res) => {
  try {
    const session = await stripe.checkout.sessions.retrieve(req.params.sessionId);
    res.json({
      courseName: session.metadata.courseName || 'Unknown Course', // Retrieve the course name from metadata
    });
  } catch (e) {
    res.status(500).json({ error: e.message });
  }
});

// POST endpoint for creating checkout session
app.post('/create-checkout-session', async (req, res) => {
  try {
    const { courseName, price, originPage } = req.body;

    // Determine the appropriate cancel URL based on the origin page
    let cancelUrl;
    if (originPage === 'group') {
      cancelUrl = `${process.env.CLIENT_URL}/Group`;
    } else if (originPage === 'oneonone') {
      cancelUrl = `${process.env.CLIENT_URL}/OneonOne`;
    } else {
      cancelUrl = `${process.env.CLIENT_URL}/`; // fallback to general courses page
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
      success_url: `${process.env.CLIENT_URL}/success?session_id={CHECKOUT_SESSION_ID}`, // Send the session ID to success page
      cancel_url: cancelUrl, // Redirect back to the appropriate course page
      metadata: {
        courseName: courseName, // Store course name in metadata
      },
    });

    res.json({ url: session.url });
  } catch (e) {
    res.status(500).json({ error: e.message });
  }
});


// Port and Listen
const PORT = process.env.PORT || 4242;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
 