"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const swagger_1 = require("../build/config/swagger");
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
require("dotenv/config");
const routes_setup_1 = require("../build/routes/routes_setup"); // configuracion de rutas
const app = (0, express_1.default)();
// Configurar el servidor para que pueda recibir JSON
app.use(express_1.default.json());
// configurar cors
const corsOptions = {
    origin: '*', // Permite todos los dominios
    methods: ['*'], // Permite todos los métodos
    allowedHeaders: ['Content-Type'], // Permite solo el encabezado Content-Type
};
app.use((0, cors_1.default)(corsOptions));
// Configura las rutas
(0, routes_setup_1.setupRoutes)(app);
// Configura Swagger UI
(0, swagger_1.setupSwagger)(app);
// Redirige la ruta raíz a Swagger UI
app.get('/', (req, res) => {
    res.redirect('/swagger');
});
function startServer() {
    const port = process.env.PORT || 3001;
    app.listen(port, () => {
        console.log(`Server started on host: http://localhost:${port}`);
    });
}
//startServer();
module.exports = app;
