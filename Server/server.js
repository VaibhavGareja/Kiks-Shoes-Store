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
  origin:  '*', 
  methods: ['GET', 'POST', 'PUT', 'DELETE'],
  allowedHeaders: ['Content-Type', 'Authorization']
}));

// API Routes
app.use("/", productRoute);
app.use("/auth", userRoute);

app.listen(PORT, () => {
  console.log(`Server started at port ${PORT}`);
});
