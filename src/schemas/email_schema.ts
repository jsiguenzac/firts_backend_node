import { IParamEmail } from "../interfaces/IEmail";

export class EmailSchema implements IParamEmail {
    subject: string;
    email: string;
    message: string;

    constructor(subject: string, email: string, message: string) {
        this.subject = subject;
        this.email = email;
        this.message = message;
    }
}