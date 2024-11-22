// server.js
const express = require('express');
const Stripe = require('stripe');
const cors = require('cors');

const app = express();
const stripe = Stripe('YOUR_SECRET_KEY'); // Replace with your Stripe Secret Key

app.use(express.json());
app.use(cors());

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
              name: 'Spanish Group Course Enrollment',
            },
            unit_amount: 9999, // Amount in cents (e.g., $99.99)
          },
          quantity: 1,
        },
      ],
      success_url: 'http://localhost:3000/success', // Replace with your success page URL
      cancel_url: 'http://localhost:3000/cancel',   // Replace with your cancel page URL
    });

    res.json({ id: session.id });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

app.listen(4242, () => console.log('Node server running on port 4242'));
