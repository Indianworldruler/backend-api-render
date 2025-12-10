import mongoose from "mongoose"

const savedArticleSchema = new mongoose.Schema({
  userId: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
  articleData: { type: Object, required: true },
  savedAt: { type: Date, default: Date.now }
})

export default mongoose.model("SavedArticle", savedArticleSchema)
