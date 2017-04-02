import express from 'express';
import './config/db'; // database
import path from 'path';
import middlewareConfig from './config/middlewares';

import { EventRoutes } from './modules/events';
import { UserRoutes } from './modules/users';

const app = express();

//middlewares
middlewareConfig(app);

//end points
app.use('/api', [EventRoutes, UserRoutes]);
// app.use('/login', [UserRoutes]);
// app.use('/signup', [UserRoutes]);

const staticFiles = express.static(path.join(__dirname, '../../frontend/build'));
app.use(staticFiles);
app.use('/*', staticFiles);


const PORT = process.env.PORT || 3001;

app.listen(PORT, err => {
  if (err) {
    console.error(err);
  }
  console.log(`Server running on port ${PORT}`);
});
