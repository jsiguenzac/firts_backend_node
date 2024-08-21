import 'dotenv/config';
import { DataSource } from 'typeorm';

const db = new DataSource({
    type: process.env.DB_TYPE as any,
    host: process.env.DB_HOST,
    port: process.env.DB_PORT as any,
    username: process.env.DB_USER,
    password: process.env.DB_PASS,
    database: process.env.DB_NAME,
    synchronize: false,
    logging: true,
    /* entities: [
        'src/models/entities/*{.ts,.js}'
    ] */
});

db.initialize().then(() => {
    console.log('Conexión a base de datos establecida');
}).catch((err) => {
    console.error('Error al conectar a base de datos:', err);
});

export { db };