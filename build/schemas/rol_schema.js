"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ParamRolSchemaList = exports.RolSchema = void 0;
class RolSchema {
    constructor(id, name, description) {
        this.id = id;
        this.name = name;
        this.description = description;
    }
}
exports.RolSchema = RolSchema;
class ParamRolSchemaList {
    constructor(page, limit) {
        this.page = page;
        this.limit = limit;
    }
}
exports.ParamRolSchemaList = ParamRolSchemaList;
