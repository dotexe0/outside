import mongoose, { Schema } from 'mongoose';
import { hash, compare } from 'bcrypt';

const UserSchema = new Schema({
  local: {
   email: String,
   password: String
  }
});

UserSchema.pre('save', function (next) {
  // check if it's new password or update one so we don't touch it
  if (!this.isModified('local.password')) { return next(); }
  // number of round for salt
  const SALT_ROUNDS = 10;
  // hash the password
  hash(this.local.password, SALT_ROUNDS, (err, hashPasword) => {
    if (err) { return next(err); }
    // make the local.password the result of the hash
    this.local.password = hashPasword;
    next();
  });
});

// method for comapre password
UserSchema.methods.comparePassword = function (canditePassword, cb) {
  // compare the password from the front-end and check if match the crypt one
  compare(canditePassword, this.local.password, (err, isMatch) => {
    if (err) { return cb(err); }
    // return no error and the match if this is good
    cb(null, isMatch);
  });
};

export default mongoose.model('User', UserSchema);
