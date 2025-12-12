import axios from "axios";
import User from "../schema/User.js";
import pkg from "newsflow-utils";
const { filterNewsByPreferences, cleanNewsData, removeDuplicates } = pkg;



export const getNews = async (req, res) => {
  const user = await User.findById(req.userId);
  const prefs = user.preferences.join(",");

  const apiURL = `https://newsapi.org/v2/top-headlines?category=${prefs}&apiKey=${process.env.NEWS_API_KEY}`;
  const resp = await axios.get(apiURL);

  res.json(resp.data.articles);
};

export const saveArticle = async (req, res) => {
  await User.findByIdAndUpdate(
    req.userId,
    { $push: { savedArticles: req.body } }
  );
  res.json({ message: "Saved" });
};

export const getSavedArticles = async (req, res) => {
  const user = await User.findById(req.userId);
  res.json(user.savedArticles);
};
