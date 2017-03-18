import Event from './model';

export const createEvent = async (req, res) => {
    const { title, description } = req.body;
    const newEvent = new Event({ title, description });

    // create a new event in our db, use PUT, i.e. 201 status
    try {
        return res.status(201).json({ event: await newEvent.save() });
    } catch (error) {
        return res.status(error.status).json({error: true, message: 'Error in Event controller.'});
    }
}