import { Express } from 'express';
import rolesRouter from './roles';
import emailRouter from './email';

export const setupRoutes = (app: Express) => {
  // Monta los enrutadores con diferentes prefijos
  app.use('/Rol', rolesRouter);
  app.use('/Email', emailRouter);
};