import express from 'express';
import path from 'path';
import './config/db'; // database
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


app.set('port', (process.env.PORT || 3001));
app.listen(app.get('port'), () => {
  console.log(`Listening on ${app.get('port')}`);
});
