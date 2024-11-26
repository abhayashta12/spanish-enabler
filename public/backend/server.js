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

// Root GET endpoint (this prevents the "Cannot GET /" error)
app.get('/', (req, res) => {
  res.send('Welcome to the payment backend server.');
});

// POST endpoint for creating checkout session
app.post('/create-checkout-session', async (req, res) => {
    try {
      const session = await stripe.checkout.sessions.create({
        payment_method_types: ['card'],
        mode: 'payment',
        line_items: [
          {
            price_data: {
              currency: 'usd',
              product_data: {
                name: req.body.courseName,
              },
              unit_amount: req.body.price, // price in cents, e.g., 5000 for $50.00
            },
            quantity: 1,
          },
        ],
        success_url: `${process.env.CLIENT_URL}/success`,
        cancel_url: `${process.env.CLIENT_URL}/one-on-one-course`, // Redirect back to the course page
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
