import bodyParser from 'body-parser';
import morgan from 'morgan';
import cookieParser from 'cookie-parser';
import session from 'express-session';

export default app => {
    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({ extended: false }));
    app.use(morgan('dev')); // console log server requests;
      console.log('Morgan loaded...');
    app.use(cookieParser());
      console.log('CookieParser loaded...');
    app.use(session({
                    secret: 'this is my secret to be used in cookies!',
                    saveUninitialized: true,
                    resave: true
                  }));
      console.log('Session loaded...');

};
