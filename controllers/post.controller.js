import db from "../models/index.model.js";
import mongoose from "mongoose";

const postController = {
  addPost: async (req, res) => {
    const { name, title } = req.body;
    if (!name) return res.status(400).json({ message: "name require", success: false })

    const added = await db.post({ name }).save();
    if (added) {
      const singlePost = await postController.getSinglePost(added);

      // postController.getAllPost();
      return res.json({ success: true, data: added, _self: singlePost })
    }
    else return res.json({ success: false })

  },
  getSinglePost: async (data) => {

    const finded = await db.post.findById({ _id: data._id })
    if (finded) {
      console.log("đây nè")
      return ({ success: true, data: finded, title: "Get single Post", href: `http://localhost:5000/api/post/${data._id}` })
    }
    return ({ success: false })
  }
  ,
  getAllPost: async (req, res) => {
    const finded = await db.post.find({});
    if (finded) return ({ success: true, data: finded, title: "Get all Post", href: "http://localhost:5000/" });
    return ({ success: false })
  },
  getPostByParam: async (req, res) => {

    const { id } = req.params;
    console.log(id)

    if (!mongoose.Types.ObjectId.isValid(id)) {
      return res.json({ success: false, message: "Wrong id" })
    }
    const finded = await db.post.findById({ _id: id })
    if (finded) {
      console.log("vô đây")
      return res.json([
        { title: "Get single Post", href: `http://localhost:5000/api/post/${id}`, method: "GET" },
        { title: "Delete Post", href: `http://localhost:5000/api/post/${id}`, method: "DELETE" },
        { title: "Modify Post", href: `http://localhost:5000/api/post/${id}`, method: "MODIFY" },
      ])
    }
    return res.json({ success: false, message: "No user found" })
  },
  async deletePost(req, res) {
    const { id } = req.params;
    const finded = await db.post.findOne({ _id: id })
    if (finded) {
      const deleted = await db.post.deleteOne({ _id: id });
      if (deleted) return res.json({ success: true })
      return res.json({ message: "cant delete" })
    }
    return res.json({ success: false, message: "No user with that id" })
  },
  async modify(req, res) {
    // const { name, }
  }
}
export default postController;