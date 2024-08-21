import { Request, Response } from "express";
import { handleHttp } from "../utils/error.handle";
import * as sendEmailService from "../services/email.service";
import { EmailSchema } from "../schemas/email_schema";

export const sendMeEmail = async (req: Request, res: Response) => {
    try {
        console.log("req.body", req.body);
        const { subject, email, message } = req.body;
        // Validación manual
        if (typeof email !== "string" || typeof subject !== "string" || typeof message !== "string") {
            return res.status(400).json({ error: "Los campos 'email', 'subject' y 'message' deben ser strings." });
        }
        const dataEmail = new EmailSchema(subject, email, message);
        const responseData = await sendEmailService.sendMeEmailService(dataEmail, res);
        return res.status(200).send(responseData);
    } catch (err) {
        handleHttp(res, (err as any).message);
    }
}
