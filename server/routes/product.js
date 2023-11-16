const express = require("express");
const router = express.Router();

const { getAllProducts, getProductsByQuery, createProduct } = require("../controllers/product");

const requireAuth = require("../middleware/requireAuth");

router.use(requireAuth);

router.get("/", getProductsByQuery);
router.post("/create", createProduct);
// router.get("/:id", get);

module.exports = router;
