"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.sendMeEmailService = void 0;
const methods_1 = require("../utils/methods");
const methods_2 = require("../utils/methods");
const emailService = new methods_1.EmailService();
const sendMeEmailService = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const personalEmail = process.env.PERSONAL_EMAIL;
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
        yield emailService.sendEmail(personalEmail, subjectTitle, body);
        return (0, methods_2.exitJson)(1, {
            'exito': true,
            'mensaje': 'CORREO_ENVIADO'
        });
    }
    catch (err) {
        return (0, methods_2.exitJson)(0, {
            'exito': false,
            'mensaje': err.message
        });
    }
});
exports.sendMeEmailService = sendMeEmailService;
