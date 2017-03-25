import User from './model';

export const userLogin = async (req, res) => {
  // const { ...args } = req.body;
  // const newUser = new User(...args);

};

export const userSignup = async (req, res) => {
    const { ...args } = req.body;
    const newUser = new User(...args);
    try {
    res.send(200).json({ user: await newUser.save() });
  } catch (error) {
    console.log('User signup error: ', error);
    return res.status(500).json({ error: true });
  }
};
