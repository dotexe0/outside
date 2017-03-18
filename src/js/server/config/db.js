import mongoose from 'mongoose';

mongoose.Promise = global.Promise;

export default () => {
    mongoose.connect('mongodb://localhost/outside')
    mongoose.connection
      .once('open', () => console.log('MongoDB running...'))
      .on('error', err => console.error(err))
}
