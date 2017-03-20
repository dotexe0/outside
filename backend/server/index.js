import express from 'express';
import './config/db'; // database

import middlewareConfig from './config/middlewares';

import { EventRoutes } from './modules/';

const app = express();

//middlewares
middlewareConfig(app);

//end points
app.use('/api', [EventRoutes]);

const PORT = process.env.PORT || 3001;

app.listen(PORT, err => {
  if (err) {
    console.error(err);
  }
  console.log(`Server running on port ${PORT}`);
});