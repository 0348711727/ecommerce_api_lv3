import mongoose from "mongoose";
import bcrypt from "bcryptjs";
import db from "../models/index.model.js";
import { header } from "../utils/auth.config.js";
import jwt from "jsonwebtoken";
import catchAsyncError from "../middlewares/catchAsyncError.js";
import ErrorHandler from "../utils/errorHandler.js";
const Role = db.role;
const User = db.user;

const userController = {
  signUp: (req, res, next) => {
    const { email, name, password } = req.body;
    let passwordHashed = null;

    if (!email || !name || !password) return res.status(500).json({ message: 'Please fullfill the input', success: false })

    // if (!email || !name || !password) return next(new ErrorHandler('Please fullfill the input', 500))
    // // const user = await User.save()
    res.send(email)
  }
}
export default userController;