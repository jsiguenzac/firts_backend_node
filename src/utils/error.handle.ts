import { Response } from "express";
import { exitJson } from "./methods";

const handleHttp = (res: Response, error: string) => {
    // funcion para crear txt (log de errores)...
    
    // retornar error
    return res.status(400).send(
        exitJson(0, {
            'mensaje': error
        })
    );
}

export { handleHttp };