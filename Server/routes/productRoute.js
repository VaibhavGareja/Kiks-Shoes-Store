const express = require("express");
const router = express.Router();
const { fetchAllProducts, fetchPrductById, featuredProducts, fetchProductsForMen, checkOutPayment, fetchProductsForWomen } = require("../controller/product");

router.get("/products", fetchAllProducts);
router.get("/product/:id", fetchPrductById)
router.get("/products/featuredProducts", featuredProducts)
router.get("/products/men", fetchProductsForMen)
router.get("/products/women", fetchProductsForWomen)


router.post("/create-checkout-session", checkOutPayment);
const endpointSecret = process.env.ENDPOINTSECRER;

router.post(
  "/webhook",
  express.raw({ type: "application/json" }),
  (request, response) => {
    const sig = request.headers["stripe-signature"];

    let event;

    try {
      event = stripe.webhooks.constructEvent(request.body, sig, endpointSecret);
    } catch (err) {
      response.status(400).send(`Webhook Error: ${err.message}`);
      return;
    }

    // Handle the event
    switch (event.type) {
      case "payment_intent.succeeded":
        const paymentIntentSucceeded = event.data.object;
        break;
      case "payment_intent.requires_action":
        const paymentIntentRequiresAction = event.data.object;
        break;
      case "payment_intent.created":
        const paymentIntentCreated = event.data.object;
        break;
      default:
        console.log(`Unhandled event type ${event.type}`);
    }

    // Return a 200 response to acknowledge receipt of the event
    response.send();
  }
);

// let endpointSecret;

// router.post(
//   "/webhook",
//   express.raw({ type: "application/json" }),
//   (req, res) => {
//     const sig = req.headers["stripe-signature"];
//     let eventType;
//     let data
//     if (endpointSecret) {
//       let event;
//       try {
//         event = stripe.webhooks.constructEvent(req.body, sig, endpointSecret);
//       } catch (err) {
//         res.status(400).send(`Webhook Error: ${err.message}`);
//         return;
//       }
//       data: event.data.object;
//       eventType : event.type
//     } else {
//       data: req.body.data.object;
//       eventType : req.body.type
//     }

//     // Handle the event
//     if(eventType === "checkout.session.completed"){
//       console.log(data)
//     }

//     // Return a 200 response to acknowledge receipt of the event
//     res.send();
//   }
// );

module.exports = router;
