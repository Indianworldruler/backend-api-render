import User from "../schema/User.js";
import jwt from "jsonwebtoken";
import { filterNewsByPreferences, cleanNewsData, removeDuplicates } from "newsflow-utils";


// Signup
export const signup = async (req, res) => {
  try {
    const user = await User.create(req.body);
    res.json({ message: "Signup success" });
  } catch (err) {
    res.status(400).json({ message: "Signup failed", error: err.message });
  }
};

// Login
export const login = async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await User.findOne({ email });

    if (!user || user.password !== password)
      return res.status(401).json({ message: "Invalid credentials" });

    const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, { expiresIn: "7d" });

    res.json({ token });
  } catch (err) {
    res.status(400).json({ message: "Login failed", error: err.message });
  }
};
