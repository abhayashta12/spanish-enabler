require('dotenv').config(); // Make sure this is the first line

const express = require('express');
const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY); // Use your secret key from the environment variable
const cors = require('cors');

const app = express();
const PORT = process.env.PORT || 4242;

app.use(express.json());
app.use(cors());

app.post('/create-checkout-session', async (req, res) => {
  const { price } = req.body;

  if (!price) {
    return res.status(400).json({ error: 'Price is required' });
  }

  try {
    const session = await stripe.checkout.sessions.create({
      payment_method_types: ['card'],
      line_items: [
        {
          price_data: {
            currency: 'usd',
            product_data: {
              name: 'Spanish Course Enrollment',
            },
            unit_amount: price * 100, // Stripe expects the amount in cents
          },
          quantity: 1,
        },
      ],
      mode: 'payment',
      success_url: `${process.env.CLIENT_URL}/success`,
      cancel_url: `${process.env.CLIENT_URL}/cancel`,
    });

    res.json({ id: session.id });
  } catch (error) {
    console.error('Error creating checkout session:', error.message);
    res.status(500).send({ error: 'Internal Server Error' });
  }
});

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
