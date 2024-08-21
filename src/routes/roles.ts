import { Router } from "express";
import * as RolController from "../controllers/rol.controller";

const router = Router(
    {mergeParams: true}
);

/**
 * @swagger
 * /Rol/List:
 *   post:
 *     summary: Obtiene todos los roles
 *     tags: [Roles]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               page:
 *                 type: integer
 *               limit:
 *                 type: integer
 *     responses:
 *       200:
 *         description: Lista de roles
 */
router.post('/List', RolController.getListRoles);

/**
 * @swagger
 * /Rol/Create:
 *   post:
 *     summary: Crea un nuevo rol - sin funcionalidad
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
 *         description: Rol creado - se retira por el momento
 */
/* router.post('/Create', RolController.createRol); */

export default router;