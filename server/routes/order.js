const express = require("express");
const router = express.Router();

const { createOrder, getOrderByUser } = require("../controllers/order");

const requireAuth = require("../middleware/requireAuth");
router.use(requireAuth);

router.get("/:id", getOrderByUser);
router.post("/create", createOrder);

module.exports = router;
