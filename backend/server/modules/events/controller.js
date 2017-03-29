import Event from './model';

export const createEvent = async (req, res) => {
  const { time, ...args } = req.body;
  const newEvent = new Event({ ...args, time: Date(time) });

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

export const getAllPublicEvents = async (req, res) => {
  try {
    return res.status(200).json({ events: await Event.find({}) });
  } catch (error) {
    console.log('Get all events error', error);
    return res.status(404).json({ error: true });
  }
};

export const deleteEvent = async (req, res) => {
  try {
    await Event.findOneAndRemove(req.params.id);
    return res.sendStatus(200);
  } catch (error) {
    console.log('Get all events error', error);
    return res.status(400).json({ error: true });
  }
};
