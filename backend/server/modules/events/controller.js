import Event from './model';

export const createEvent = async (req, res) => {
  const args = req.body;
  const newEvent = new Event({ ...args });

  if (!args.eventName) {
    return res.status(400).json({ error: true, message: 'Title is required' });
  } else if (typeof args.eventName !== 'string') {
    return res.status(400).json({ error: true, message: 'Title must be a string' });
  }
    // create a new event in our db, use PUT, i.e. 201 status
  try {
    return res.status(201).json({ event: await newEvent.save() });
  } catch (error) {
    console.log(error);
    return res.status(500).json({ error: true });
  }
};
