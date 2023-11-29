const Order = require("../models/order");

const createOrder = async (req, res) => {
  const { products, totalPrice } = req.body;
  const user = req.user._id;
  try {
    const order = await Order.create({ products, totalPrice, user });
    res.status(200).json(order);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

const getOrderByUser = async (req, res) => {
  const uid = req.user._id;
  try {
    const order = await Order.find({ user: uid })
      .populate("products.product")
      .sort({ createdAt: -1 });
    res.status(200).json(order);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

module.exports = {
  createOrder,
  getOrderByUser,
};
