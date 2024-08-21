import { Router } from "express";
import * as EmailController from "../controllers/email.controller";

const router = Router(
    {mergeParams: true}
);

/**
 * @swagger
 * /Email/Me:
 *   post:
 *     summary: Enviar mensaje a mi correo personal
 *     tags: [Email]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               subject:
 *                 type: string
 *               email:
 *                 type: string
 *               message:
 *                 type: string
 *     responses:
 *       200:
 *         description: Enviame un correo
 */
router.post('/Me', EmailController.sendMeEmail);

export default router;