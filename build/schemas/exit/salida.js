"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BaseM = exports.Salida = void 0;
class Salida {
    constructor(state, msg) {
        this.state = state;
        this.msg = msg;
        this.data = {}; // Inicializamos "data" como un objeto vacío
    }
}
exports.Salida = Salida;
class BaseM {
    constructor(state, msg, data) {
        this.state = state;
        this.msg = msg;
        this.data = data;
    }
}
exports.BaseM = BaseM;
