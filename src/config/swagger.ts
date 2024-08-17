import swaggerJsdoc from 'swagger-jsdoc';
import swaggerUi from 'swagger-ui-express';
import { Express } from 'express';
import 'dotenv/config';

// Configuración de Swagger
const swaggerDefinition = {
  openapi: '3.0.0',
  info: {
    title: 'Mi API con Node.js y Express',
    version: '1.0.0',
    description: 'Documentación de la API - Jsiguenza',
  },
  /*servers: [
    {
      url: `http://localhost:${process.env.PORT || 3001}`,
      description: 'Servidor local de desarrollo',
    },
  ],*/
};

const options = {
  swaggerDefinition,
  apis: ['./src/routes/*.ts'], // Ruta a tus archivos de rutas
};

const swaggerSpec = swaggerJsdoc(options);

export const setupSwagger = (app: Express) => {
  app.use('/swagger', swaggerUi.serve, swaggerUi.setup(swaggerSpec));
};
