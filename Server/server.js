const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv"); // Import dotenv module
const path = require("path"); // Import path module
const app = express();
const db = require("./helper/db");
const PORT = process.env.PORT;
const bodyParser = require("body-parser");
const productRoute = require("./routes/productRoute");
const userRoute = require("./routes/userRoute");
const Product = require("./model/productSchema");
const productData = require("./topProducts.json");

dotenv.config(); // Load environment variables from .env file

app.use(express.json());
app.use(express.static(path.join(__dirname, "../Client/dist")));
app.use(bodyParser.raw({ type: "application/json" }));
app.use(cors());
// app.use(cors({
//   origin: 'https://kiks-shoes-store.onrender.com',
//   methods: ['GET', 'POST', 'PUT', 'DELETE'],
//   allowedHeaders: ['Content-Type', 'Authorization']
// }));
app.use("/", productRoute);
app.use("/auth", userRoute);

// (async () => {
//   try {
//     for (const product of productData.shoes) {
//       const newProduct = new Product(product);
//       await newProduct.save();
//     }
//     console.log("Products inserted into the database successfully");
//   } catch (err) {
//     console.error("Error inserting products into the database:", err);
//   }
// })();

app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "../Client/dist", "index.html"));
});

app.listen(PORT, () => {
  console.log(`Server started at port ${PORT}`);
});
