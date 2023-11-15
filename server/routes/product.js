const express = require("express");
const router = express.Router();

const { getAllProducts } = require("../controllers/product");

const requireAuth = require("../middleware/requireAuth");

router.use(requireAuth);

router.get("/all", getAllProducts);
// router.get("/:id", get);

module.exports = router;
