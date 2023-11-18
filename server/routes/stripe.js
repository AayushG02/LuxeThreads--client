const express = require("express");
const router = express.Router();
const stripe = require("stripe")(process.env.STRIPE_SECRET_KEY);

router.post("/", async (req, res) => {
  console.log("from checkout req\n", req.body.products);
  try {
    const session = await stripe.checkout.sessions.create({
      payment_method_types: ["card"],
      mode: "payment",
      line_items: req.body.products.map((product) => {
        return {
          price_data: {
            currency: "inr",
            product_data: {
              name: product.title,
              images: [product.img],
            },
            unit_amount: product.price * 100,
          },
          quantity: product.quantity,
        };
      }),
      shipping_address_collection: {
        allowed_countries: ["IN"],

      },
      success_url: "http://localhost:5173/success",
      cancel_url: "http://localhost:5173/failed",
    });

    res.json({ id: session.id });
  } catch (error) {
    console.error("Error creating Checkout Session:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

module.exports = router;
