import express from "express";
import mongoose from "mongoose";
const router = express.Router();
import User from "../models/userModel.js";

router.post("/register", async (req, res) => {
  try {
    const existingUser = await User.findOne({ email: req.body.email });

    if (existingUser) {
      return res.status(400).send("Email already registered");
    }

    const newuser = new User(req.body);
    await newuser.save();

    res.send("User registered successfully");
  } catch (err) {
    console.error("Registration Error:", err);
    res.status(500).send("Something went wrong registering the user");
  }
});

export default router;
