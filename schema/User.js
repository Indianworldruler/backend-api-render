import mongoose from "mongoose"

const userSchema = new mongoose.Schema({
  fullname: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  preferences: { type: [String], default: [] },
  savedArticles: [{ type: mongoose.Schema.Types.ObjectId, ref: "SavedArticle" }]
})

export default mongoose.model("User", userSchema)
