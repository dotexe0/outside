import { Router } from 'express';
import * as EventController from './controller';

const routes = new Router();

routes.post('/events', EventController.createEvent);
routes.delete('/events/:id', EventController.deleteEvent);
routes.get('/public/events', EventController.getAllPublicEvents);

export default routes;
