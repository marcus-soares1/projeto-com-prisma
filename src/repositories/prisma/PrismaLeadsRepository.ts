import { prisma } from "../../database";
import { Leads, Prisma } from "../../generated/prisma";
import { ICreateLeadAttributes, IFindLeadsParams, ILeadsRepository, ILeadsWhereParams } from "../LeadsRepository";

export class PrismaLeadsRepository implements ILeadsRepository{
    async find(params: IFindLeadsParams): Promise<Leads[]> {
        let where: Prisma.LeadsWhereInput = {
            name: {
                contains: params.where?.name?.like,
                equals: params.where?.name?.equals,
                mode: params.where?.name?.mode
            },
            status: params.where?.status
        }

        if(params.where?.groupId) {
            where.groups = { some: { id: params.where?.groupId } }
        }

        if(params.where?.campaignId) {
            where.campaigns = { some: { campaignId: params.where?.campaignId } }
        }

        return prisma.leads.findMany({
            where,
            orderBy: {[params.sortBy ?? "name"]: params.order},
            skip: params.offset,
            take: params.limit,
            include: {
                groups: params.join?.groups,
                campaigns: params.join?.campaigns
            }
        })

    }

    async findById (id: number): Promise<Leads | null> {
        return prisma.leads.findUnique({
            where: {id},
            include: {
                campaigns: true,
                groups: true
            }
        })
    }

    async count (where: ILeadsWhereParams): Promise<number> {
        let prismaWhere: Prisma.LeadsWhereInput = {
            name: {
                contains: where?.name?.like,
                equals: where?.name?.equals,
                mode: where?.name?.mode
            },
            status: where?.status
        }

        if(where?.groupId) {
            prismaWhere.groups = { some: { id: where?.groupId } }
        }

        if(where?.campaignId) {
            prismaWhere.campaigns = { some: { campaignId: where?.campaignId } }
        }

        return prisma.leads.count({ where: prismaWhere })
    }

    async create (attributes: ICreateLeadAttributes): Promise<Leads> {
        return prisma.leads.create({data: attributes})
    }

    async updateById (id: number, atributes: Partial<ICreateLeadAttributes>): Promise<Leads> {
        return prisma.leads.update({
            where: { id },
            data: atributes
        })
    }

    async deleteById (id: number): Promise<Leads>{
        return prisma.leads.delete({ where: { id } })
    }

}