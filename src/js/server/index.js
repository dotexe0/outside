import express from 'express';
import dbConfig from './config/db';
import eventsRouter from './modules/events/routes';
import usersRouter from './modules/users/routes'

const app = express();

// database
dbConfig();

const PORT = process.env.PORT || 3001;

app.listen(PORT, err => {
  if(err) {
    console.error(err);
  }
  console.log(`Server running on port ${3001}`);
});