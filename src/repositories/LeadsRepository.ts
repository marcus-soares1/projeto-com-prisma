import { Leads } from "../generated/prisma";

export type LeadsStatus = "New" | "Contacted" | "Qualified" | "Converted" | "Unresponsive" | "Disqualified" | "Archived"

export interface ILeadsWhereParams {
    name?: {
        like?: string
        equals?: string
        mode?: "default" | "insensitive" 
    }
    status?: LeadsStatus
}

export interface IFindLeadsParams {
    where?: ILeadsWhereParams
    sortBy?: "name" | "status" | "createdAt"
    order?: "asc" | "desc"
    limit?: number
    offset?: number
}

export interface ICreateLeadAttributes {
    name: string
    email: string
    phone: string
    status?: LeadsStatus
}

export interface ILeadsRepository{
    find: (params: IFindLeadsParams) => Promise<Leads[]>
    findById: (id: number) => Promise<Leads | null>
    count: (where: ILeadsWhereParams) => Promise<number>
    create: (attributes: ICreateLeadAttributes) => Promise<Leads>
    updateById: (id: number, attributes: Partial<ICreateLeadAttributes>) => Promise<Leads | null>
    deleteById: (id: number) => Promise<Leads | null>
}