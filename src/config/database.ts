import { DataSource } from 'typeorm';

const db = new DataSource({
    type: 'postgres',
    host: 'localhost',
    port: 5432,
    username: 'postgres',
    password: 'sql',
    database: 'app_ultima_milla',
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