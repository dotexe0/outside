import User from './model';

export const userLogin = async (req, res) => {
  // const { ...args } = req.body;
  // const newUser = new User(...args);

};

export const userSignup = async (req, res) => {
    const { ...args } = req.body;
    console.log('args: ', ...args);
    console.log('params', req.params);
    console.log('body', req.body);
    const newUser = new User({ local: req.body });
    console.log('newUser: ', newUser);
    try {
    res.status(200).json({ user: await newUser.save() });
  } catch (error) {
    console.log('User signup error: ', error);
    return res.status(500);
  }
};
