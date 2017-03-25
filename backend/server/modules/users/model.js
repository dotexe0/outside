import mongoose, { Schema } from 'mongoose';

const UserSchema = new Schema({
  local: {
   email: String,
   password: String
  }
});

export default mongoose.model('User', UserSchema);
