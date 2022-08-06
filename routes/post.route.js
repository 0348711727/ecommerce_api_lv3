import postController from "../controllers/post.controller.js"
import express from "express";

const router = express.Router();

router.post("/add", postController.addPost);
// router.post("/get", postController.getSinglePost);
router.get("/:id", postController.getPostByParam);
router.post("/:id", postController.getSinglePost);
router.delete("/:id", postController.deletePost);
export default router;