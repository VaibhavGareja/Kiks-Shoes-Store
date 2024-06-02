const Product = require("../model/productSchema");
const stripe = require("stripe")(process.env.STRIPE_SECRET_KEY);

module.exports.fetchAllProducts = async (req, res) => {
  try {
    const products = await Product.find();
    res.json(products);
  } catch {
    console.error("Error retrieving products:", err);
    res.status(500).json({ error: "Internal server error" });
  }
};

module.exports.checkOutPayment = async (req, res) => {
  const { data } = await req.body;
  console.log(data, ">>>>>>>>>>>>>>>>>>>>");
  const line_items = req.body.data.products.map((item) => {
    let price = parseFloat(item.price.replace("$", ""));
    console.log(typeof price);
    console.log(price, "pricess-------------");
    return {
      price_data: {
        currency: "usd",
        product_data: {
          images: [item.imgSrc],
          name: item.name,
          metadata: {
            id: item.id,
          },
        },
        unit_amount: price * 100,
      },
      quantity: item.quantity,
    };
  });

  const session = await stripe.checkout.sessions.create({
    payment_method_types: ["card"],
    shipping_address_collection: { allowed_countries: ["IN","US"] },
    shipping_options: [
      {
        shipping_rate_data: {
          type: "fixed_amount",
          fixed_amount: { amount: 0, currency: "usd" },
          display_name: "Free Shiping",
          delivery_estimate:{
            minimum :{unit:"day", value:"2"},
            maximum:{unit:"day",value:"4"}
          }
        },
      },
    ],
    phone_number_collection:{
      enabled:true,
    },
    line_items,
    mode: "payment",
    success_url: `${process.env.CLIENT_URL}checkout-sucess`,
    cancel_url: `${process.env.CLIENT_URL}/`,
  });

  res.send({ url: session.url });
};
