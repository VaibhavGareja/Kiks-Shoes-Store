const express = require("express");
const app = express();
const cors = require("cors");
const db = require("./helper/db");
require("dotenv").config()
const PORT = process.env.PORT;
const bodyParser = require('body-parser');
const productRoute = require("./routes/productRoute")
const userRoute = require("./routes/userRoute")
const Product = require("./model/productSchema");
const productData = require("./topProducts.json")


app.use(express.json());
app.use(bodyParser.raw({type: 'application/json'}));
app.use(cors());

app.use("/",productRoute)
app.use("/auth",userRoute)

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
