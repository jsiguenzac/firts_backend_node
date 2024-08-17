import { IRoles, IRolesList } from "../interfaces/Iroles";

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

export class RolSchemaList implements IRolesList {
    total: number;
    roles: RolSchema[];

    constructor(total: number, roles: RolSchema[]) {
        this.total = total;
        this.roles = roles;

    }
}