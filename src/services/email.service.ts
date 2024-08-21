
import { Request, Response } from "express";
import { EmailService } from '../utils/methods';
import { exitJson } from '../utils/methods';
import dontvenv from 'dotenv';
import { EmailSchema } from "../schemas/email_schema";

const emailService = new EmailService();

export const sendMeEmailService = async (req: EmailSchema, res: Response) => {
    try {
        const personalEmail = process.env.PERSONAL_EMAIL as string;        
        const subjectTitle = "Mensaje de Contacto - Desde Tu Sitio Web";
        const body = `
            <html>
            <body>
                <h2>Mensaje de Contacto</h2>
                <hr>
                <p>Hola,</p>
                <p>Has recibido un nuevo mensaje de contacto desde tu aplicación.</p>
                <p><strong>Detalles del Mensaje:</strong></p>
                <p><strong>Nombre:</strong> ${req.subject}</p>
                <p><strong>Email:</strong> ${req.email}</p>
                <p><strong>Mensaje:</strong></p>
                <p>${req.message}</p>
                <p>Por favor, revisa este mensaje y responde a la persona que se ha comunicado contigo.</p>
                <p>Es todo, ten un buen día</p>
                <p>Enviado desde backend node.js - jsiguenzac</p>
            </body>
            </html>
        `;
        await emailService.sendEmail(personalEmail, subjectTitle, body);
        return res.status(200).send(
            exitJson(1, {
            'exito': true,
            'mensaje': 'CORREO_ENVIADO'	
        }));
    } catch (err) {
        return res.status(500).send(
            exitJson(0, {
            'exito': false,
            'mensaje': (err as any).message
        }));
    }
}