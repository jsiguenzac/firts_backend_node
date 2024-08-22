"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
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
exports.createRol = exports.getListRoles = void 0;
const error_handle_1 = require("../utils/error.handle");
const rol_schema_1 = require("../schemas/rol_schema");
const RolServices = __importStar(require("../services/rol.service"));
const getListRoles = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        console.log("req.body", req.body);
        const { page, limit } = req.body;
        // Validación manual
        if (typeof page !== "number" || typeof limit !== "number") {
            return res
                .status(400)
                .json({ error: "Los campos 'page' y 'limit' deben ser números." });
        }
        const requestBody = new rol_schema_1.ParamRolSchemaList(page, limit);
        console.log("requestBody", requestBody);
        const responseData = yield RolServices.getListRolesService(requestBody, res);
        return res.status(200).send(responseData);
    }
    catch (err) {
        (0, error_handle_1.handleHttp)(res, err.message);
    }
});
exports.getListRoles = getListRoles;
const createRol = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { name } = req.body;
        // Validación manual
        if (typeof name !== "string") {
            return res.status(400).json({ error: "El campo 'name' debe ser un string." });
        }
        const responseData = yield RolServices.createRolService(req, res);
        return res.status(200).send(responseData);
    }
    catch (err) {
        (0, error_handle_1.handleHttp)(res, err.message);
    }
});
exports.createRol = createRol;
