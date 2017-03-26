import bodyParser from 'body-parser';
import morgan from 'morgan';
import cookieParser from 'cookie-parser';
import session from 'express-session';
import passport from 'passport';

export default app => {
    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({ extended: false }));
    app.use(morgan('dev')); // console log server requests;
    app.use(cookieParser());
    // app.use(session({
    //                 secret: 'this is my secret to be used in cookies!',
    //                 saveUninitialized: true,
    //                 resave: true
    //               }));
    app.use(passport.initialize());
    // app.use(passport.session());
};
