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
exports.createRolService = exports.getListRolesService = void 0;
const rol_schema_1 = require("../schemas/rol_schema");
const methods_1 = require("../utils/methods");
const database_1 = require("../config/database");
const table_name = 'tb_roles';
const getListRolesService = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        var page = req.page;
        var limit = req.limit;
        var offset = (page - 1) * limit;
        if (page <= 0) {
            return (0, methods_1.exitJson)(0, {
                'mensaje': 'page debe ser mayor a 0'
            });
        }
        // total de registros
        var totalRoles = yield database_1.db.query(`SELECT COUNT(1) AS COUNT FROM ${table_name}`);
        var numerototal = parseInt(totalRoles[0].count, 10);
        console.log('pagina', req.page);
        console.log('limite', req.limit);
        // roles 10 por pagina
        var rolesPorPage = yield database_1.db.query(`SELECT * FROM ${table_name} LIMIT ${limit} OFFSET ${offset}`);
        // mostrar solo los campos necesarios haciendo uso del schema
        var roles = [];
        rolesPorPage.forEach((rol) => {
            const idRolAsNumber = parseInt(rol.idRol, 10);
            roles.push(new rol_schema_1.RolSchema(idRolAsNumber, rol.Nombre, rol.Descripcion)); // atributos de la tabla
        });
        const data = (0, methods_1.exitJson)(1, {
            'total': numerototal,
            'roles': roles
        });
        return data;
    }
    catch (err) {
        return (0, methods_1.exitJson)(0, {
            'mensaje': err.message
        });
    }
});
exports.getListRolesService = getListRolesService;
// para crear un rol
const createRolService = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { Nombre, Descripcion } = req.body;
        yield database_1.db.query(`INSERT INTO ${table_name} (Nombre, Descripcion) VALUES ('${Nombre}', '${Descripcion}')`);
        return (0, methods_1.exitJson)(1, {
            'exito': true,
            'mensaje': 'ROL_CREATED'
        });
    }
    catch (err) {
        return (0, methods_1.exitJson)(0, {
            'exito': false,
            'mensaje': err.message
        });
    }
});
exports.createRolService = createRolService;
