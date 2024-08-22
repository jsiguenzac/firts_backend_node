"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.db = void 0;
require("dotenv/config");
const typeorm_1 = require("typeorm");
const db = new typeorm_1.DataSource({
    type: process.env.DB_TYPE,
    host: process.env.DB_HOST,
    port: process.env.DB_PORT,
    username: process.env.DB_USER,
    password: process.env.DB_PASS,
    database: process.env.DB_NAME,
    synchronize: false,
    logging: true,
    /* entities: [
        'src/models/entities/*{.ts,.js}'
    ] */
});
exports.db = db;
db.initialize().then(() => {
    console.log('Conexión a base de datos establecida');
}).catch((err) => {
    console.error('Error al conectar a base de datos:', err);
});
