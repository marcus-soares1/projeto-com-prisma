import { Handler } from "express";
import { AddLeadsRequestSchema, GetCampaignsLeadsRequestSchema, UpdateLeadStatusSchema } from "./schema/CampaingsRequestSchema";
import { prisma } from "../database";
import { Prisma } from "../generated/prisma";

export class CampaignsLeadsController {
    getLeads: Handler = async (req, res, next) => {
        try {
            const campaignId = Number(req.params.campaignId)
            const query = GetCampaignsLeadsRequestSchema.parse(req.query)
            const { page = "1", pageSize = "10", name, status, sortBy = "name", order = "asc" } = query

            const pageNumber = Number(page)
            const pageSizeNumber = Number(pageSize)

            const where: Prisma.LeadsWhereInput = {
                campaigns: {
                    some: { campaignId }
                }
            }

            if (name) where.name = { contains: name, mode: 'insensitive' }
            if (status) where.campaigns = { some: { status } }

            const leads = await prisma.leads.findMany({
                where,
                orderBy: {[sortBy]: order },
                skip: (pageNumber-1) * pageSizeNumber,
                take: pageSizeNumber,
                include: {
                    campaigns: {
                        select: {
                            campaignId: true,
                            leadId: true,
                            status: true
                        }
                    }
                }
            })

            const total = await prisma.leads.count({ where })

            res.json({
                data: leads,
                pagination: {
                    page: pageNumber,
                    pageSize: pageSizeNumber,
                    total,
                    totalPages: Math.ceil(total / pageSizeNumber)
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
            await prisma.leadsCampaigns.create({
                data: {
                    campaignId: campaignId,
                    leadId: body.leadId,
                    status: body.status
                }
            })
            res.status(201).json(body)
            
        } catch (error) {
            next(error)
        }
    }

    updateLeadStatus: Handler = async (req, res, next) => {
        try {
            const { campaignId, leadId } = req.params
            const body = UpdateLeadStatusSchema.parse(req.body)

            await prisma.leadsCampaigns.update({
                data: body,
                where: {
                    leadId_campaignId: {
                        campaignId: Number(campaignId),
                        leadId: Number(leadId)
                    }
                }
            })

            res.json(204).send()
        } catch (error) {
            next(error)
        }
    }

    removeLead: Handler = async (req, res, next) => {
        try {
            const { campaignId, leadId } = req.body
            const removedLead = await prisma.leadsCampaigns.delete({
                where: {
                    leadId_campaignId: {
                        leadId: Number(leadId),
                        campaignId: Number(campaignId)
                    }
                }
            })
            res.json(removedLead)
        } catch (error) {
            next(error)
        }
    }



}