import express from 'express';
import dbConfig from './config/db';
import middlewareConfig from './config/middlewares';

import { EventRoutes } from './modules/';

const app = express();

// database
dbConfig();

//middlewares
middlewareConfig(app);

//end points
app.use('/api', [EventRoutes]);

const PORT = process.env.PORT || 3000;

app.listen(PORT, err => {
  if(err) {
    console.error(err);
  }
  console.log(`Server running on port ${PORT}`);
});