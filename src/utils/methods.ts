//#region: Funcion de salida general para endpoints
import { Salida, BaseM } from '../schemas/exit/salida';

export function exitJson(state: number, data: any): BaseM {
    if (state < 0 || state > 1) {
      throw new Error("El estado de salida debe ser 1 o 0");
    }
    const msg = state === 1 ? "success" : "error";
    const exitJson = new Salida(state, msg);
    exitJson.data = data;
    return new BaseM(exitJson.state, exitJson.msg, exitJson.data);
  }
//#endregion

//#region: Funcion para enviar correo
import nodemailer from 'nodemailer';
import dotenv from 'dotenv';

dotenv.config();

export class EmailService {
    private transporter: nodemailer.Transporter;

    constructor() {
        this.transporter = nodemailer.createTransport({
            service: 'gmail', // Puedes cambiarlo por tu proveedor de correo
            host: process.env.SMTP_SERVER,
            port: parseInt(process.env.SMTP_PORT || '465', 10),
            secure: true, // True para puerto 465, false para otros puertos
            auth: {
                user: process.env.EMAIL_ADDRESS,
                pass: process.env.EMAIL_PASSWORD
            }
        });
    }

    public async sendEmail(recipientEmail: string, subject: string, body: string) {
        const mailOptions = {
            from: process.env.EMAIL_ADDRESS,
            to: recipientEmail,
            subject: subject,
            html: body
        };

        try {
            await this.transporter.sendMail(mailOptions);
            console.log('Email sent successfully');
        } catch (error) {
            console.error('Error sending email:', error);
        }
    }
}
//#endregion