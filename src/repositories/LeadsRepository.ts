import { Leads } from "../generated/prisma";
import { LeadsCampaignsStatus } from "./CampaignsRepository";

export type LeadsStatus = "New" | "Contacted" | "Qualified" | "Converted" | "Unresponsive" | "Disqualified" | "Archived"

export interface ILeadsWhereParams {
    name?: {
        like?: string
        equals?: string
        mode?: "default" | "insensitive" 
    }
    status?: LeadsStatus
    campaignStatus?: LeadsCampaignsStatus
    groupId?: number
    campaignId?: number
}

export interface IFindLeadsParams {
    where?: ILeadsWhereParams
    sortBy?: "name" | "status" | "createdAt"
    order?: "asc" | "desc"
    limit?: number
    offset?: number
    join?: {
        groups?: boolean
        campaigns?: boolean
    }
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