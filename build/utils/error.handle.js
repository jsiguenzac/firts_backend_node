"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.handleHttp = void 0;
const methods_1 = require("./methods");
const handleHttp = (res, error) => {
    // funcion para crear txt (log de errores)...
    // retornar error
    return res.status(400).send((0, methods_1.exitJson)(0, {
        'mensaje': error
    }));
};
exports.handleHttp = handleHttp;
