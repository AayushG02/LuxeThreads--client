const express = require("express");
const router = express.Router();

const { getAllProducts, getProductsByQuery, getProductById, createProduct } = require("../controllers/product");

const requireAuth = require("../middleware/requireAuth");

router.use(requireAuth);

router.get("/", getProductsByQuery);
router.post("/create", createProduct);
router.get("/:id", getProductById);

module.exports = router;
