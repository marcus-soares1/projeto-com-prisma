import { Handler } from "express";
import { AddLeadsGroupRequestSchema, GetGroupsLeadsRequestSchema } from "./schema/GroupsRequestSchema";
import { IGroupsRepository } from "../repositories/GroupsRepository";
import { ILeadsRepository, ILeadsWhereParams } from "../repositories/LeadsRepository";

export class GroupsLeadsController {
    constructor(private readonly groupsRepository: IGroupsRepository, private readonly leadsRepository: ILeadsRepository) {}

    getLeads: Handler = async (req, res, next) => {
        try {
            const groupId = Number(req.params.groupId)
            const query = GetGroupsLeadsRequestSchema.parse(req.query)
            const { page = "1", pageSize = "10", name, status, sortBy = "name", order = "asc" } = query

            const limit = Number(pageSize)
            const offset = (Number(page) - 1) * limit

            const where: ILeadsWhereParams = { groupId }

            if (name) where.name = { like: name, mode: "insensitive" }
            if (status) where.status = status

            const leads = await this.leadsRepository.find({
                where,
                sortBy,
                order,
                limit,
                offset,
                join: { groups: true }
            })

            const total = await this.leadsRepository.count(where)

            res.json({
                leads,
                meta: {
                page: Number(page),
                pageSize: limit,
                total,
                totalPages: Math.ceil(total / limit)
                }
            })
        } catch (error) {
            next(error)
        }
    }

    addLead: Handler = async (req, res, next) => {
        try {
           const groupId = Number(req.params.groupId)
           
           const body = AddLeadsGroupRequestSchema.parse(req.body)
           
           const updatedGroup = await this.groupsRepository.addLead(groupId, body.id)
            res.json(updatedGroup)
        } catch (error) {
            next(error)
        }
    }

    removeLead: Handler = async (req, res, next) => {
        try {
            const { groupId, leadId } = req.params

            const removedGroup = await this.groupsRepository.addLead(Number(groupId), Number(leadId))

            res.json(removedGroup)
        } catch (error) {
            next(error)
        }
    }



}