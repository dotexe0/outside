import { Router } from 'express';
import * as UserController from './controller';

const routes = new Router();

routes.post('/signup', UserController.userSignup);
routes.get('/login', UserController.userLogin);
// routes.delete('/Users/:id', UserController.deleteUser);


export default routes;
