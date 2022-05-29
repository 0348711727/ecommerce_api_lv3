import jwt from "jsonwebtoken";
import config from "../utils/auth.config.js";
import db from "../models/index.model.js";
const User = db.User;

verifyToken = (req, res, next) => {
  const token = req.headers['x-access-token'];
  if (!token) {
    return res.status(404).send({ message: `No token provided`, success: false })
  }
  const decoded = jwt.verify(token, config.secret, (err, decoded) => {
    if (err) {
      return res.status(403).send({ message: 'Can not authorize', success: false })
    }
    req.userId = decoded.id;
    next();
  })
}

export default authJwt = {
  verifyToken
}