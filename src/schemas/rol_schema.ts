import { IRoles, IParamRolesList } from "../interfaces/Iroles";

export class RolSchema implements IRoles {
    id: number;
    description: string;
    name: string;

    constructor(id: number, name: string, description: string) {
        this.id = id;
        this.name = name;
        this.description = description;
    }
}

export class ParamRolSchemaList implements IParamRolesList {
    page: number;
    limit: number;

    constructor(page: number, limit: number) {
        this.page = page;
        this.limit = limit;
    }
}