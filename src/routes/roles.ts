import { Router } from "express";
import { db } from '../config/database'; // configuracion de base de datos
import { exitJson } from '../utils/methods';
import { RolSchema, RolSchemaList } from '../schemas/rol_schema';

const router = Router(
    {mergeParams: true}
);

const table_name = 'tb_roles';

/**
 * @swagger
 * /Rol/List:
 *   get:
 *     summary: Obtiene todos los roles
 *     tags: [Roles]
 *     responses:
 *       200:
 *         description: Lista de roles
 */
router.get('/List', async (req, res) => {
    try {
        // total de registros
        var totalRoles = await db.query(`SELECT COUNT(1) AS COUNT FROM ${table_name}`);
        var numerototal = parseInt(totalRoles[0].count, 10);
        
        // roles 10 por pagina
        var page = 1;
        var limit = 10;
        var offset = (page - 1) * limit;
        var rolesPorPage = await db.query(`SELECT * FROM ${table_name} LIMIT ${limit} OFFSET ${offset}`);
        
        // mostrar solo los campos necesarios haciendo uso del schema
        var roles: RolSchema[] = [];
        rolesPorPage.forEach((rol: any) => {
            roles.push(new RolSchema(rol.idRol, rol.Nombre, rol.Descripcion)); // atributos de la tabla
        });

        const data = exitJson(1, {
            'total': numerototal,
            'roles': roles
        });
        return res.status(200).send(data);
    } catch (err) {
        return res.status(400).send(
            exitJson(0, {
                'mensaje': (err as any).message
            })
        );
    }
});

/**
 * @swagger
 * /Rol/Create:
 *   post:
 *     summary: Crea un nuevo rol
 *     tags: [Roles]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               name:
 *                 type: string
 *     responses:
 *       200:
 *         description: Rol creado
 */
router.post('/Create', (req, res) => {
    try {
        var name = req.body.name;    
        res.send(`Rol creado: ${req.body.name}`);        
    } catch (err) {
        res.status(400).send((err as any).message);
    }
});

export default router;