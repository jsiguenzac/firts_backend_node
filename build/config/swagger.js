"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.setupSwagger = void 0;
const swagger_jsdoc_1 = __importDefault(require("swagger-jsdoc"));
const swagger_ui_express_1 = __importDefault(require("swagger-ui-express"));
require("dotenv/config");
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
    //apis: ['./src/routes/*{.ts, .js}']
    apis: ['./build/routes/*.js'], // Ruta a los archivos generados de JS
};
const swaggerSpec = (0, swagger_jsdoc_1.default)(options);
const setupSwagger = (app) => {
    app.use('/swagger', swagger_ui_express_1.default.serve, swagger_ui_express_1.default.setup(swaggerSpec));
};
exports.setupSwagger = setupSwagger;
