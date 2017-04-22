import passport from 'passport';
import LocalStrategy from 'passport-local';
import User from './model';


  // ======================
  // PASSPORT SESSION SETUP
  // ======================
  //required for persistent login sessions
  //passport needs ability to serialize and unserialize users out of sessions

  //serialize a user for a session
  passport.serializeUser((user, done) => {
    done(null, user.id);
  });

  //de-serialize user out of session
  passport.deserializeUser(async (id, done) => {
    try {
      const user = await User.findById(id);
      done(null, user);
    } catch (e) {
      throw Error(e);
    }
  });

  // ======================
  // LOCAL LOGIN
  // ======================

const localOptions = {
  usernameField: 'email'
};

const localLogin = new LocalStrategy(localOptions, async (email, password, done) => {
  // console.log('email, ', email);
  // console.log('password, ', password);
  try {
    const user = await User.findOne({ 'local.email': email });
    // console.log('user found: ', user);
    if (!user) {
      return done(null, false, { message: 'No login found for that email address.' });
    }
    user.comparePassword(password, (err, isMatch) => {
      if (err) {
        done(err);
      } else if (!isMatch) {
        done(null, false, { message: 'Login and password did not match! ' });
      } else {
        done(null, user);
      }
    });
  } catch (e) {
    throw Error(e);
  }
});

passport.use(localLogin);
