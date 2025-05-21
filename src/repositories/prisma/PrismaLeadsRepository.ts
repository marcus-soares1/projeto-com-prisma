import { prisma } from "../../database";
import { Leads } from "../../generated/prisma";
import { ICreateLeadAttributes, IFindLeadsParams, ILeadsRepository, ILeadsWhereParams } from "../LeadsRepository";

export class PrismaLeadsRepository implements ILeadsRepository{
    async find(params: IFindLeadsParams): Promise<Leads[]> {
        return prisma.leads.findMany({
            where: {
                name: {
                    contains: params.where?.name?.like,
                    equals: params.where?.name?.equals,
                    mode: params.where?.name?.mode
                },
                status: params.where?.status,
                groups: {
                    some: {
                        id: params.where?.groupId
                    }
                }
            },
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
        return prisma.leads.count({
            where: {
                name: {
                    contains: where?.name?.like,
                    equals: where?.name?.equals,
                    mode: where?.name?.mode
                },
                status: where?.status,
                groups: {
                    some: {
                        id: where?.groupId
                    }
                }
            }
        })
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