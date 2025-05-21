import { prisma } from "../../database";
import { Groups } from "../../generated/prisma";
import { ICreatGroupAttributes, IGroupsRepository } from "../GroupsRepository";

export class PrismaGroupsRepository implements IGroupsRepository{
    async find(): Promise<Groups[]> {
        return prisma.groups.findMany()

    }

    async findById (id: number): Promise<Groups | null> {
        return prisma.groups.findUnique({
            where: { id },
            include: {
                leads: true
            }
        })

    }

    async create (attributes: ICreatGroupAttributes): Promise<Groups> {
        return prisma.groups.create({data: attributes})

    }

    async updateById (id: number, attributes: Partial<ICreatGroupAttributes>): Promise<Groups | null> {
        return prisma.groups.update({where: { id }, data: attributes})

    }

    async deleteById (id: number): Promise<Groups | null>{
        return prisma.groups.delete({where: { id }})

    }

    async addLead(groupId: number, leadId: number): Promise<Groups> {
        return prisma.groups.update({
            where: { id: groupId },
            data: {
                leads: {
                    connect: { id: leadId }
                }
            },
            include: { leads: true }
        })
    }

    async removeLead(groupId: number, leadId: number): Promise<Groups> {
        return prisma.groups.update({
            where: { id: groupId },
            data: {
                leads: { disconnect: { id: leadId } }
            },
            include: {
                leads: true
            }
        })
    }
}