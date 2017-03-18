import mongoose from 'mongoose';

// export default () => {
//     mongoose.Promise = global.Promise;
//     mongoose.connect('mongodb://localhost/outside')
//     mongoose.connection
//       .once('open', () => console.log('MongoDB running...'))
//       .on('error', err => console.error(err))
// };


mongoose.Promise = global.Promise;

function exec() {
  try {
    mongoose.connect('mongodb://localhost/outside');
    mongoose.connection
      .once('open', () => console.log('Connected to MongoDb'))
      .on('error', err => console.warn('Warning', err));

  } catch(error) {
    console.log('error', error);
  }
};

exec();
