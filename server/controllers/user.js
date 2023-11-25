const User = require("../models/user");
const jwt = require("jsonwebtoken");

const createToken = (_id) => {
  return jwt.sign({ _id }, process.env.SECRET, {
    expiresIn: "3d",
  });
};

const loginUser = async (req, res) => {
  const { email, password } = req.body;
  try {
    const user = await User.login(email, password);
    await user.populate("wishlist");
    const token = createToken(user._id);
    res
      .status(200)
      .json({ id: user._id, name: user.name, wishlist: user.wishlist, token });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

const signupUser = async (req, res) => {
  const { name, email, password } = req.body;
  try {
    const user = await User.signup(name, email, password);
    const token = createToken(user._id);
    res.status(200).json({ id: user._id, name: user.name, token });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

const addToWishlist = async (req, res) => {
  const uid = req.user._id;
  const itemID = req.params.itemID;
  try {
    const user = await User.findById(uid);
    if (!user.wishlist.includes(itemID)) {
      user.wishlist.push(itemID);
      await user.save();
      res.status(200).json(user.wishlist);
    } else {
      res.status(409).json({ error: "Item already exists in wishlist" });
    }
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

const getWishlist = async (req, res) => {
  const uid = req.user._id;
  try {
    const user = await User.findById(uid).populate("wishlist");
    res.status(200).json(user.wishlist);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

const removeItemFromWishlist = async (req, res) => {
  const uid = req.user._id;
  const itemID = req.params.itemID;
  try {
    const user = await User.findById(uid);
    user.wishlist.pull(itemID);
    await user.save();
    res.status(200).json(user);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

module.exports = {
  signupUser,
  loginUser,
  addToWishlist,
  getWishlist,
  removeItemFromWishlist,
};
