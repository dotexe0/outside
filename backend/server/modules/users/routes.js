import { Router } from 'express';
import * as UserController from './controller';
import { requireLogin } from '../../helpers/authHelper';

const routes = new Router();

routes.post('/signup', UserController.userSignup);
routes.post('/login', requireLogin, UserController.userLogin);
// routes.delete('/user/:id', UserController.deleteUser);
routes.put('/user/events', UserController.addEventToUser);

export default routes;
