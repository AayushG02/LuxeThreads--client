const express = require("express");
const router = express.Router();

const {
  getProductsByQuery,
  getProductById,
  createProduct,
} = require("../controllers/product");

const requireAuth = require("../middleware/requireAuth");

router.get("/", getProductsByQuery);
router.get("/:id", getProductById);
router.use(requireAuth);
router.post("/create", createProduct);

module.exports = router;
