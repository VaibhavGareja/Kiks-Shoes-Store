const mongoose = require("mongoose");

const productSchema = mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  brand: {
    type: String,
    required: true,
  },
  category: {
    type: [String],
    required: true,
  },
  price: {
    type: String,
    required: true,
  },
  discount: {
    type: Number,
    required: true,
  },
  imgSrc: {
    type: String,
    required: true,
  },
  bgGradient: {
    type: [String],
    required: true,
  },
});

const Product = mongoose.model('Product', productSchema);

module.exports = Product;
