import { Express } from 'express';
import rolesRouter from './roles';

export const setupRoutes = (app: Express) => {
  // Monta los enrutadores con diferentes prefijos
  app.use('/Rol', rolesRouter); // Prefijo para módulos
};