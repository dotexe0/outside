import { Strategy as LocalStrategy } from 'passport-local';
import User from './model';

//export module to expose it in our app
export default passport => {
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
  passport.use('local-login', new LocalStrategy({
    usernameField: 'email',
    passwordField: 'password',
    passReqToCallback: true,
    session: true
  },
    async (req, email, password, done) => {
      try {
        const user = await User.findOne({ 'local.email': email });
        if (!user) {
          return done(null, false, { message: 'No login found for that email address.' });
        }
        try {
          if (!user.comparePassword(password)) {
            return done(null, false, { message: 'Wrong password!' });
          }
        } catch (e) {
          throw Error(e);
        }
        return done(null, user);
      } catch (e) {
        throw Error(e);
      }
    }
  ));
};

