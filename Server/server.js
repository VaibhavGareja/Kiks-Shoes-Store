const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv"); 
const path = require("path");
const app = express();
const db = require("./helper/db");
const PORT = process.env.PORT || 3000; 
const bodyParser = require("body-parser");
const productRoute = require("./routes/productRoute");
const userRoute = require("./routes/userRoute");
const Product = require("./model/productSchema");
const productData = require("./topProducts.json");

dotenv.config(); 

// Middleware
app.use(express.json());
app.use(bodyParser.raw({ type: "application/json" }));
app.use(cors({
  origin: process.env.CLIENT_URL || '*', 
  methods: ['GET', 'POST', 'PUT', 'DELETE'],
  allowedHeaders: ['Content-Type', 'Authorization']
}));

// API Routes
app.use("/", productRoute);
app.use("/auth", userRoute);

// Serve static files if necessary
// Comment or remove if frontend is hosted separately
// app.use(express.static(path.join(__dirname, "../Client/dist")));

// Fallback route for serving frontend (if applicable)
// Comment or remove if frontend is hosted separately
// app.get("*", (req, res) => {
//   res.sendFile(path.join(__dirname, "../Client/dist", "index.html"));
// });

// Example database seeding (if needed)
// Comment or uncomment based on your needs
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

app.listen(PORT, () => {
  console.log(`Server started at port ${PORT}`);
});
