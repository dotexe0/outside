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
  const { userId, event } = req.body;
  console.log('event: ', event);
  try {
    await User.addEvent(userId, event);
      return res.status(200).json({ event });
  } catch (e) {
    return res.status(400).json({ error: e });
  }
};

export const getAllUserEvents = async (req, res) => {
  console.log('req.body-delete: ', req.body);
  try {
    return res.status(200).json({ events: await User.findById('58db0f02dc53eb320123c89f').populate('events') });
  } catch (error) {
    console.log('Get all events error', error);
    return res.status(404).json({ error: true });
  }
};
