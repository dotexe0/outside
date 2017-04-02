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
app.use(express.static('../frontend/build'));

app.get('/*', (req, res) => {
  res.sendFile(path.join(__dirname, '../../frontend/build', 'index.html'));
});


app.set('port', (process.env.PORT || 3001));
app.listen(app.get('port'), () => {
  console.log(`Listening on ${app.get('port')}`);
});


// import express from 'express';
// import path from 'path';
// import './config/db'; // database
// import middlewareConfig from './config/middlewares';

// import { EventRoutes } from './modules/events';
// import { UserRoutes } from './modules/users';

// const app = express();

// //middlewares
// middlewareConfig(app);

// const staticFiles = express.static(path.join(__dirname, '../../frontend/build'));
// app.use(staticFiles);

// //end points
// app.use('/api', [EventRoutes, UserRoutes]);
// app.use('/*', staticFiles);


// app.set('port', (process.env.PORT || 3001));
// app.listen(app.get('port'), () => {
//   console.log(`Listening on ${app.get('port')}`);
// });
