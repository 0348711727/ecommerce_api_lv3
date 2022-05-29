import db from '../models/index.model.js';

// const ROLES = db.ROLES;
const User = db.user;

checkDuplicateEmail = (req, res, next) => {
  User.findOne({ email: req.body.email }).exec((err, user) => {
    if (err) {
      res.status(500).send({ message: err, success: fasle });
      return;
    }
    if (user) {
      res.status(400).send({ message: 'Email is already exist', success: false });
      return;
    }
    next();
  })
}
// checkRoleExist(req, res, next) {
//   if(req.)
// }

export default verifySignup = {
  checkDuplicateEmail
}