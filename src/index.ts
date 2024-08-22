import { setupSwagger } from './config/swagger';
import express from 'express';
import cors from 'cors';
import 'dotenv/config';
import { setupRoutes } from './routes/routes_setup'; // configuracion de rutas

const app = express();

// Configurar el servidor para que pueda recibir JSON
app.use(express.json());

// configurar cors
const corsOptions = {
    origin: '*', // Permite todos los dominios
    methods: ['*'], // Permite todos los métodos
    allowedHeaders: ['Content-Type'], // Permite solo el encabezado Content-Type
};
app.use(cors(corsOptions));

// Configura las rutas
setupRoutes(app);

// Configura Swagger UI
setupSwagger(app);

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