export interface IRoles {
    id: number;
    name: string;
    description: string;
}

export interface IRolesList {
    total: number;
    roles: IRoles[];
}