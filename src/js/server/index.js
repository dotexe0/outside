import express from 'express';
import bodyParser from 'body-parser';
import morgan from 'morgan';
import mongoose from 'mongoose';
import eventsRouter from './modules/events/routes';
import usersRouter from './modules/users/routes'

mongoose.Promise = global.Promise;
mongoose.connect("mongodb://localhost/outside");
mongoose.connection
  .once("open", () => console.log("db runninng"))
  .on("error", e => console.log(e))

const PORT = process.env.PORT || 3001;

const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));
app.use(morgan('dev'));

app.use("/api", eventRouter);

app.listen(PORT, e => {
  if (e) {
    console.log(e)
  } else {
    console.log(`Server running on port ${PORT}`);
  }
});
