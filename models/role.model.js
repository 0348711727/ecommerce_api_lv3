import mongoose from 'mongoose';

const Role = mongoose.Schema({
	role: String
});
export default mongoose.model('Role', Role);