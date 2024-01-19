const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const bcrypt = require("bcrypt");

const userSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    passwordHash: {
      type: String,
    },
    isGoogle: {
      type: Boolean,
      default: false,
    },
    wishlist: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Product",
      },
    ],
  },
  { timestamps: true }
);

userSchema.statics.signup = async function (name, email, password) {
  const exists = await this.findOne({ email });
  if (exists.isGoogle) {
    throw Error(
      "This account is already registered with Google. Please login with Google."
    );
  }
  if (exists) {
    throw Error("Email already exists");
  }
  const salt = await bcrypt.genSalt(10);
  const hash = await bcrypt.hash(password, salt);
  const user = await this.create({ name, email, passwordHash: hash });

  return user;
};

userSchema.statics.login = async function (email, password) {
  const user = await this.findOne({ email });
  if (user.isGoogle) {
    throw Error(
      "This account is already registered with Google. Please login with Google."
    );
  }
  if (!user) {
    throw Error("Incorrect email");
  }
  const auth = await bcrypt.compare(password, user.passwordHash);
  if (!auth) {
    throw Error("Incorrect password");
  }
  return user;
};

userSchema.statics.googleLogin = async function (name, email) {
  const user = await this.findOne({ email });
  if (!user) {
    const user = await this.create({ name, email, isGoogle: true });
    return user;
  } else {
    return user;
  }
};

module.exports = mongoose.model("User", userSchema);
