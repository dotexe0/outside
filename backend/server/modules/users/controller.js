// import passport from 'passport';
// import './passport';
import User from './model';

  // ======================
  // LOCAL LOGIN
  // ======================
export const userLogin = (req, res, next) => {
  console.log('req, body:', req.body);
  res.send({ user: req.user });
  return next();
};

  // ======================
  // LOCAL SIGNUP
  // ======================
export const userSignup = async (req, res) => {
  const { email, password } = req.body;
  // console.log('req.body: ', req.body);
  try {
        const user = await User.findOne({ 'local.email': email });
        if (user) {
          console.log('message: That email account already exists.');
          return res.status(422).json({ message: 'That email account already exists.' });
        }
        try {
          const newUser = await User.create({ local: { email, password } });
          console.log('new user: ', newUser);
          await newUser.save();
          res.status(200).json({ user: newUser });
        } catch (e) {
          throw new Error(e);
        }
      } catch (e) {
        throw new Error(e);
      }
};





  // console.log('body, ', req.body);
  //   // const { email, password } = req.body;

  //   const newUser = new User({ local: req.body });
  //   console.log('newUser: ', newUser);
  //   try {
  //   res.status(200).json({ user: await newUser.save() });
  // } catch (error) {
  //   console.log('User signup error: ', error);
  //   return res.status(500);
  // }
// };


 // ======================
  // LOCAL SIGNUP
  // ======================
  // we are using named strategies since we have one for login and one for signup.
  // by default, if there was no name, it would just be called 'local'

  // passport.use('local-signup', new LocalStrategy({
  //   //by default, local strategy uses username and password -- we override username with email.
  //   emailField: 'email',
  //   passwordField: 'password',
  //   passReqToCallback: true // allows us to pass entire request to callback,
  // },
  // async (req, email, password, done) => {
  //   //asynch User.findOne wont fire unless data is sent back
  //     try {
  //       const user = await User.findOne({ 'local.email': email });
  //       if (user) {
  //         return done(null, false, {'message': 'That email account already exists.'});
  //       }

  //       try {
  //         const newUser = await User.create({ email, password });

  //         return done(null, newUser);
  //       } catch (e) {
  //         throw new Error(e);
  //       }

  //     } catch (e) {
  //       throw new Error(e);
  //     }
  // ));
