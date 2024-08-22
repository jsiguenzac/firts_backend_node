"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.setupRoutes = void 0;
const roles_1 = __importDefault(require("./roles"));
const email_1 = __importDefault(require("./email"));
const setupRoutes = (app) => {
    // Monta los enrutadores con diferentes prefijos
    app.use('/Rol', roles_1.default);
    app.use('/Email', email_1.default);
};
exports.setupRoutes = setupRoutes;
