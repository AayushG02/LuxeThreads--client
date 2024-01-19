const express = require("express");
const router = express.Router();
const {
  loginUser,
  signupUser,
  googleLoginUser,
  addToWishlist,
  getWishlist,
  removeItemFromWishlist,
} = require("../controllers/user");
const requireAuth = require("../middleware/requireAuth");

// Public routes (no authentication required)
router.post("/login", loginUser);
router.post("/signup", signupUser);
router.post("/googlelogin", googleLoginUser);
// Routes below this middleware require authentication
router.use(requireAuth);

// Wishlist routes
router.post("/wishlist/:itemID", addToWishlist);
router.get("/wishlist", getWishlist);
router.delete("/wishlist/:itemID", removeItemFromWishlist);


module.exports = router;
