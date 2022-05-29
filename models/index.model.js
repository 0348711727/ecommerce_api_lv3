import mongoose from 'mongoose';
import Role from './role.model.js';
import User from './user.model.js';

mongoose.Promise = global.Promise;

const db = {
  initial() {
    Role.estimatedDocumentCount((err, count) => {
      if (!err && count === 0) {
        new Role({ name: 'user' }).save(err => {
          if (err) {
            console.log(err);
          }
          console.log('Role Guest add to mongo');
        });
        new Role({ name: 'admin' }).save(err => {
          if (err) {
            console.log(err);
          }
          console.log('Role Admin add success');
        });
      }
    });
  }
};

db.mongoose = mongoose;
db.user = User;
db.role = Role;
db.ROLES = ['user', 'admin', 'moderator'];

export default db;