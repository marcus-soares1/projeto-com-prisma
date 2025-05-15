import { Handler } from "express";
import { prisma } from "../database";
import { Prisma } from "../generated/prisma";
import { AddLeadsGroupRequestSchema, GetGroupsLeadsRequestSchema } from "./schema/GroupsRequestSchema";

export class GroupsLeadsController {
    getLeads: Handler = async (req, res, next) => {
        try {
            const groupId = Number(req.params)
            const query = req.query
            const { page = 1,  pageSize = 10, name, status, sortBy = "name", order = "asc" } = GetGroupsLeadsRequestSchema.parse(query)
            

            const where: Prisma.LeadsWhereInput = {
                groups: {
                    some: { id: groupId }
                }
            }

            if (name) where.name = { contains: name, mode: 'insensitive' }
            if (status) where.status = status

            const leads = await prisma.leads.findMany({
                where,
                orderBy: { [sortBy]: order },
                skip: (page - 1) * pageSize,
                take: pageSize,
                include: {
                    groups: true
                }
            })

            const total = await prisma.leads.count({ where })

            res.json({
                data: leads,
                pagination: {
                    page,
                    pageSize,
                    total,
                    totalPages: Math.ceil(total/ pageSize)
                }
            })
        } catch (error) {
            next(error)
        }
    }

    addLead: Handler = async (req, res, next) => {
        try {
           const groupId = Number(req.params.groupId)
           
           const body = AddLeadsGroupRequestSchema.parse(req.body.id)
           
           const updateGroup = await prisma.groups.update({
                data: {
                    leads: {
                        connect: { id: body.id }
                    }
                },
                where: {
                    id: groupId
                },
                include: {
                    leads: true
                }
           })

        } catch (error) {
            next(error)
        }
    }

    removeLead: Handler = async (req, res, next) => {
        try {
            const { groupsId, leadId } = req.params

            const updatedGroup = await prisma.groups.update({
                where: { id: Number(groupsId) },
                data: {
                    leads: { disconnect: { id: Number(leadId) } }
                },
                include: {
                    leads: true
                }
            })

            res.json(updatedGroup)
        } catch (error) {
            next(error)
        }
    }



}