const mongoose = require("mongoose");

const reviewSchema = mongoose.Schema({
  reviewerName: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  rating: {
    type: Number,
    required: true,
  }
});

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
  sizesAvailable: {
    type: [Number],
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  SKU: {
    type: String,
    required: true,
  },
  ratings: {
    type: Number,
    required: true,
  },
  reviews: [reviewSchema],
  stock: {
    type: Number,
    required: true,
  },
  weight: {
    type: String,
    required: true,
  },
  dimensions: {
    type: String,
    required: true,
  },
  material: {
    type: String,
    required: true,
  },
  careInstructions: {
    type: String,
    required: true,
  },
  manufacturer: {
    type: String,
    required: true,
  }
});

const Product = mongoose.model('Product', productSchema);

module.exports = Product;
