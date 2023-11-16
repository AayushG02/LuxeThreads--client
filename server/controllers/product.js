const Product = require("../models/product");

const getAllProducts = async (req, res) => {
  try {
    const products = await Product.find();
    res.status(200).json(products);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

const getProductsByQuery = async (req, res) => {
  const {category, gender} = req.query;
  try {
    let query = {};

    if (category) {
      query.category = category;
    }

    if (gender) {
      query.gender = gender;
    }
    console.log(query)
    const products = await Product.find(query);
    res.status(200).json(products);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

// const getProductByCategory = async (req, res) => {
//   const category = req.params.category;
//   try {
//     const product = await Product.find({ category });
//     res.status(200).json(product);
//   } catch (err) {
//     res.status(400).json({ error: err.message });
//   }
// };
// const getProductByGender = async (req, res) => {
//   const gender = req.params.gender;
//   try {
//     const product = await Product.find({ gender });
//     res.status(200).json(product);
//   } catch (err) {
//     res.status(400).json({ error: err.message });
//   }
// };

const createProduct = async (req, res) => {
  const { title, description, images, price, isNewProduct, category, gender } =
    req.body;

  if (
    !title ||
    !description ||
    !images ||
    !price ||
    !isNewProduct === undefined ||
    !category ||
    !gender
  ) {
    return res
      .status(400)
      .json({ error: "Please provide all required fields" });
  }

  try {
    const product = await Product.create({
      title,
      description,
      images,
      price,
      isNewProduct,
      category,
      gender,
    });
    res.status(201).json(product);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

module.exports = {
  getAllProducts,
  getProductsByQuery,
  createProduct,
};
