import { ISalida } from "../../interfaces/Isalida";

class Salida implements ISalida {
    state: number;
    msg: string;
    data: any;
  
    constructor(state: number, msg: string) {
        this.state = state;
        this.msg = msg;
        this.data = {}; // Inicializamos "data" como un objeto vacío
    }
}

class BaseM implements ISalida {
    state: number;
    msg: string;
    data: any;
 
    constructor(state: number, msg: string, data: any) {
        this.state = state;
        this.msg = msg;
        this.data = data;
    }
}

export { Salida, BaseM };