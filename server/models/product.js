const mongoose = require("mongoose");

const productSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    images: [
      {
        type: String,
      },
      {
        type: String,
      },
    ],
    price: {
      type: Number,
      required: true,
      min: 0,
    },
    isNewProduct: {
      type: Boolean,
      default: false,
    },
    categories: {
      type: [String],
      enum: ["male", "female", "tshirt", "jogger"],
      required: true,
    },
  },
  { timespatms: true }
);

const Product = mongoose.model("Product", productSchema);

module.exports = Product;
