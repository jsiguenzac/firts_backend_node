import { Router } from "express";
import { readdirSync } from "fs";

const PATH_ROUTER = `${__dirname}`;

const router = Router(
    {mergeParams: true}
);

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
router.get('/List', (req, res) => {
    res.send('Roles pio');
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