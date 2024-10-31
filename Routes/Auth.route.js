const express = require("express");
const router = express.Router();
const createError = require("http-errors");
const User = require("../Models/User.model");
router.post("/register", async (req, res, next) => {
  try {
    const { email, password } = req.body;
    if (!email || !password) throw createError.BadRequest();
    const doesexists = await User.findOne({ email });
    if (doesexists) throw createError.Conflict(`${email} is already in use`);
    const user = new User({
      email,
      password,
    });
    const savedUser = await user.save();

    res.send(savedUser);
  } catch (error) {
    next(error);
  }
});
router.post("/login", async (req, res, next) => {
  res.send("register route");
});
router.delete("/logout", async (req, res, next) => {
  res.send("register route");
});
router.post("/refresh-token", async (req, res, next) => {
  res.send("register route");
});

module.exports = router;
