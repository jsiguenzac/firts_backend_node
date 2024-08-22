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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.EmailService = void 0;
exports.exitJson = exitJson;
//#region: Funcion de salida general para endpoints
const salida_1 = require("../schemas/exit/salida");
function exitJson(state, data) {
    if (state < 0 || state > 1) {
        throw new Error("El estado de salida debe ser 1 o 0");
    }
    const msg = state === 1 ? "success" : "error";
    const exitJson = new salida_1.Salida(state, msg);
    exitJson.data = data;
    return new salida_1.BaseM(exitJson.state, exitJson.msg, exitJson.data);
}
//#endregion
//#region: Funcion para enviar correo
const nodemailer_1 = __importDefault(require("nodemailer"));
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
class EmailService {
    constructor() {
        this.transporter = nodemailer_1.default.createTransport({
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
    sendEmail(recipientEmail, subject, body) {
        return __awaiter(this, void 0, void 0, function* () {
            const mailOptions = {
                from: process.env.EMAIL_ADDRESS,
                to: recipientEmail,
                subject: subject,
                html: body
            };
            try {
                yield this.transporter.sendMail(mailOptions);
                console.log('Email sent successfully');
            }
            catch (error) {
                console.error('Error sending email:', error);
            }
        });
    }
}
exports.EmailService = EmailService;
//#endregion
