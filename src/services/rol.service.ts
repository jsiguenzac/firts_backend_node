import { Request, Response } from "express";
import { RolSchema, ParamRolSchemaList } from "../schemas/rol_schema";
import { exitJson } from "../utils/methods";
import { db } from "../config/database";

const table_name = 'tb_roles';

export const getListRolesService = async (req: ParamRolSchemaList, res: Response) => {
    try {
        // total de registros
        var totalRoles = await db.query(`SELECT COUNT(1) AS COUNT FROM ${table_name}`);
        var numerototal = parseInt(totalRoles[0].count, 10);
        console.log('pagina', req.page);
        console.log('limite', req.limit);
        // roles 10 por pagina
        var page = req.page;
        var limit = req.limit;
        var offset = (page - 1) * limit;
        var rolesPorPage = await db.query(`SELECT * FROM ${table_name} LIMIT ${limit} OFFSET ${offset}`);
        
        // mostrar solo los campos necesarios haciendo uso del schema
        var roles: RolSchema[] = [];
        rolesPorPage.forEach((rol: any) => {
            const idRolAsNumber = parseInt(rol.idRol, 10);
            roles.push(new RolSchema(idRolAsNumber, rol.Nombre, rol.Descripcion)); // atributos de la tabla
        });

        const data = exitJson(1, {
            'total': numerototal,
            'roles': roles
        });
        return res.status(200).send(data);
    } catch (err) {
        return res.status(400).send(
            exitJson(0, {
                'mensaje': (err as any).message
            })
        );
    }
}

// para crear un rol
export const createRolService = async (req: Request, res: Response) => {
    try {
        const { Nombre, Descripcion } = req.body;
        await db.query(`INSERT INTO ${table_name} (Nombre, Descripcion) VALUES ('${Nombre}', '${Descripcion}')`);
        return res.status(200).send(
            exitJson(1, {
                'exito': true,
                'mensaje': 'ROL_CREATED'
            })
        );
    } catch (err) {
        return res.status(400).send(
            exitJson(0, {
                'exito': false,
                'mensaje': (err as any).message
            })
        );
    }
}
