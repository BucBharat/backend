import mongoose from 'mongoose';
// import { stringify } from 'nodemon/lib/utils';
const userSchema = mongoose.Schema({
  name: String,
  // username: String,
  price: Number,
  // phone: Number,
});

const user = mongoose.model('user', userSchema);
export default user;
