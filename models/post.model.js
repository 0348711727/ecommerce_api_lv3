import mongoose from "mongoose";

const Post = mongoose.Schema({
  name: String,
  title: String
})

export default mongoose.model('Post', Post)