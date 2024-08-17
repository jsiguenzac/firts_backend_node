//#region: Funcion de salida general para endpoints
import { Salida, BaseM } from '../schemas/exit/salida';

function exitJson(state: number, data: any): BaseM {
    if (state < 0 || state > 1) {
      throw new Error("El estado de salida debe ser 1 o 0");
    }
    const msg = state === 1 ? "success" : "error";
    const exitJson = new Salida(state, msg);
    exitJson.data = data;
    return new BaseM(exitJson.state, exitJson.msg, exitJson.data);
  }
//#endregion

export { exitJson };