import { Handler } from "express";
import { AddLeadsRequestSchema, GetCampaignsLeadsRequestSchema, UpdateLeadStatusSchema } from "./schema/CampaingsRequestSchema";
import { ICampaignsRepository } from "../repositories/CampaignsRepository";
import { ILeadsRepository, ILeadsWhereParams } from "../repositories/LeadsRepository";

export class CampaignsLeadsController {
    constructor(private readonly campaignsRepository: ICampaignsRepository, private readonly leadsRepository: ILeadsRepository) {}
    getLeads: Handler = async (req, res, next) => {
        try {
            const campaignId = Number(req.params.campaignId)
            const query = GetCampaignsLeadsRequestSchema.parse(req.query)
            const { page = "1", pageSize = "10", name, status, sortBy = "name", order = "asc" } = query

            const pageNumber = Number(page)
            const limit = Number(pageSize)
            const offset = (pageNumber - 1) * limit

            const where: ILeadsWhereParams = { campaignId, campaignStatus: status }

            if (name) where.name = { like: name, mode: 'insensitive' }

            const leads = await this.leadsRepository.find({where, sortBy, order, limit, offset, join: { campaigns: true }})

            const total = await this.leadsRepository.count(where)

            res.json({
                data: leads,
                pagination: {
                    page: pageNumber,
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
            const campaignId = Number(req.params.campaignId)
            const body = AddLeadsRequestSchema.parse(req.body)
            await this.campaignsRepository.addLead(campaignId ,body.leadId, body.status)
            res.status(201).json(body)
            
        } catch (error) {
            next(error)
        }
    }

    updateLeadStatus: Handler = async (req, res, next) => {
        try {
            const { campaignId, leadId } = req.params
            const body = UpdateLeadStatusSchema.parse(req.body)

            await this.campaignsRepository.updateLeadStatus(Number(campaignId), Number(leadId), body.status)

            res.json(204).send()
        } catch (error) {
            next(error)
        }
    }

    removeLead: Handler = async (req, res, next) => {
        try {
            const { campaignId, leadId } = req.body
            await this.campaignsRepository.removeLead(Number(campaignId), Number(leadId))
            res.status(204).send()
        } catch (error) {
            next(error)
        }
    }
    
}