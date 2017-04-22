import { Router } from 'express';
import * as UserController from './controller';
import { requireLogin } from '../../helpers/authHelper';

const routes = new Router();

routes.post('/signup', UserController.userSignup);
routes.post('/login', requireLogin, UserController.userLogin);
routes.get('/logout', UserController.userLogout);

routes.post('/user/event', UserController.addEventToUser);
routes.post('/user/getEvents', UserController.getAllUserEvents);


export default routes;
