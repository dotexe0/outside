import { Router } from 'express';
import * as UserController from './controller';

const routes = new Router();

routes.post('/signup', UserController.userSignup);
routes.post('/login', UserController.userLogin);
// routes.delete('/Users/:id', UserController.deleteUser);


export default routes;
