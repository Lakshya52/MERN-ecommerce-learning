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
router.post("/login", async (req, res) => {
  try {
    const { email, password} = req.body;
    const user = await User.findOne({ email, password});

    if (user) {
      res.status(200).json({ message: "Login success", user });
    } else {
      res.status(400).json({ message: "Invalid Credentials" });
    }
  } catch (error) {
    res.status(500).json({ message: "Server error", error: error.message });
  }
});



export default router; 
