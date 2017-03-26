import { Router } from 'express';
import * as UserController from './controller';
import { requireLogin } from '../../helpers/authHelper';
const routes = new Router();

routes.post('/signup', UserController.userSignup);
routes.post('/login', requireLogin, UserController.userLogin);
// routes.delete('/Users/:id', UserController.deleteUser);


export default routes;
