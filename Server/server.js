const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv"); // Import dotenv module
const path = require("path"); // Import path module
const app = express();
const db = require("./helper/db");
const PORT = process.env.PORT;
const bodyParser = require('body-parser');
const productRoute = require("./routes/productRoute");
const userRoute = require("./routes/userRoute");
const Product = require("./model/productSchema");
const productData = require("./topProducts.json");

dotenv.config(); // Load environment variables from .env file

app.use(express.json());
app.use(express.static(path.join(__dirname, '../Client/dist')));
app.use(bodyParser.raw({ type: 'application/json' }));
app.use(cors());

app.use("/", productRoute);
app.use("/auth", userRoute);

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '../Client/dist', 'index.html'));
});

app.listen(PORT, () => {
  console.log(`Server started at port ${PORT}`);
});
