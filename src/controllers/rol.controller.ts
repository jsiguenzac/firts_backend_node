import { Request, Response } from "express";
import { handleHttp } from "../utils/error.handle";
import { ParamRolSchemaList } from "../schemas/rol_schema";
import * as RolServices from "../services/rol.service";

export const getListRoles = async (req: Request, res: Response) => {
  try {
    console.log("req.body", req.body);
    const { page, limit } = req.body;
    // Validación manual
    if (typeof page !== "number" || typeof limit !== "number") {
      return res
        .status(400)
        .json({ error: "Los campos 'page' y 'limit' deben ser números." });
    }
    const requestBody = new ParamRolSchemaList(page, limit);
    console.log("requestBody", requestBody);
    const responseData = await RolServices.getListRolesService(requestBody, res);
    return res.status(200).send(responseData);
  } catch (err) {
    handleHttp(res, (err as any).message);
  }
};

export const createRol = async (req: Request, res: Response) => {
  try {
    const { name } = req.body;
    // Validación manual
    if (typeof name !== "string") {
      return res.status(400).json({ error: "El campo 'name' debe ser un string." });
    }
    const responseData = await RolServices.createRolService(req, res);
    return res.status(200).send(responseData);
  } catch (err) {
    handleHttp(res, (err as any).message);
  }
};