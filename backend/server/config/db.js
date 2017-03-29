import mongoose from 'mongoose';

mongoose.Promise = global.Promise;

function exec() {
  try {
    mongoose.connect('mongodb://localhost/outside');
    mongoose.set('debug', true);
    mongoose.connection
      .once('open', () => console.log('Connected to MongoDb'))
      .on('error', err => console.warn('Warning', err));
  } catch (error) {
    console.log('error', error);
  }
}

exec();
