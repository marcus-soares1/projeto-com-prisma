import { Groups } from "../generated/prisma";

export interface ICreatGroupAttributes {
    name: string,
    description: string
}

export interface IGroupsRepository{
    find: () => Promise<Groups[]>
    findById: (id: number) => Promise<Groups | null>
    create: (attributes: ICreatGroupAttributes) => Promise<Groups>
    updateById: (id: number, attributes: Partial<ICreatGroupAttributes>) => Promise<Groups | null>
    deleteById: (id: number) => Promise<Groups | null>
}