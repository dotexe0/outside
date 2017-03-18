import mongoose, { Schema } from 'mongoose';

const EventSchema = new Schema({
  eventName: {
    type: String,
    required: true,
  },
  time: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  invited: {
    type: Array,
    required: false,
  },
});

export default mongoose.model('Event', EventSchema);
