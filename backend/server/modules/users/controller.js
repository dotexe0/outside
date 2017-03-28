// import passport from 'passport';
// import './passport';
import User from './model';
import Event from '../events/model';

  // ======================
  // LOCAL LOGIN
  // ======================
export const userLogin = (req, res, next) => {
  console.log('login credentials:', req.body);
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

export const addEventToUser = async (req, res) => {
  const { _id } = req.body;
  const { time, ...args } = req.body.event;
  console.log('event: ', req.body.event);
  console.log('_id: ', req.body._id);


  const newEvent = new Event({ ...args, time: Date(time) });
  console.log('newEvent: ', newEvent);
  try {
    User.findOneAndUpdate({ _id: _id }, { $push: { events: newEvent } }).exec((err, user) => {
    console.log('user: ', user);
    if (err) {
      console.log('Error updating: ', err);
    }
      res.status(200).json({ updatedUser: user });
    });
  } catch (e) {
    throw Error(e);
  }
};

// const { time, eventName, description, invited, isPrivate } = req.body.event;
//   console.log('event: ', req.body.event);
//   console.log('email: ', req.body.email);

  // const newEvent = new Event({
  //   eventName: eventName,
  //   time: Date(time),
  //   description: description,
  //   invited: invited,
  //   isPrivate: false
  // });
