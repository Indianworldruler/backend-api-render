import User from "../schema/User.js";
import pkg from "newsflow-utils";
const { filterNewsByPreferences, cleanNewsData, removeDuplicates } = pkg;



export const getPreferences = async (req, res) => {
  const user = await User.findById(req.userId);
  res.json({ preferences: user.preferences });
};

export const updatePreferences = async (req, res) => {
  await User.findByIdAndUpdate(req.userId, { preferences: req.body.preferences });
  res.json({ message: "Updated" });
};
