import mongoose, { Schema } from 'mongoose';

const EventSchema = new Schema({
  eventName: {
    type: String,
    required: true,
  },
  time: {
    type: Date,
  },
  description: {
    type: String,
    required: true,
  },
  invited: {
    type: Array,
    required: false,
  },
  private: Boolean,
  required: false
});

export default mongoose.model('Event', EventSchema);
