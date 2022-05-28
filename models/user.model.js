import mongoose from 'mongoose';
import validator from 'validator';

const User = mongoose.Schema({
	email: {
		type: String,
		required: [true, 'Please enter your email address'],
		unique: true,
		validate: [validator.isEmail, 'Please enter a valid email']
	},
	password: {
		type: String,
		required: [true, 'Please enter your password'],
		minLength: [6, 'Your password is atleast 6 character'],
		select: false //false so password detail will not be show when we don't require
	},

});
export default mongoose.model('User', User);