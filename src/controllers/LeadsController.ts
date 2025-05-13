import { Handler } from "express";
import { prisma } from "../database";
import { CreateLeadRequestSchema, GetLeadsRequestSchema, UpdateLeadRequestSchema } from "./schema/LeadsRequestSchema";
import { HttpError } from "../errors/HttpsError";
import { Prisma } from "../generated/prisma";

export class LeadsController {
    index: Handler = async (req, res, next) => {
        try {
            const query = GetLeadsRequestSchema.parse(req.query)
            const { page = "1", pageSize = "10", name, status, sortBy = "name", order = "asc"} = query

            const pageNumber = Number(page)
            const pageSizeNumber = Number(pageSize)

            const where: Prisma.LeadsWhereInput = {} 

            if(name) where.name = { contains: name, mode: 'insensitive' }
            if(status) where.status = status

            const leads = await prisma.leads.findMany({
                where,
                skip: (pageNumber -1) * pageSizeNumber,
                take: pageSizeNumber,
                orderBy: {[sortBy]: order}
            })

            const total = await prisma.leads.count({where})

            res.json({
                data: leads,
                meta: {
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

    create:  Handler =  async (req, res, next) => {
        try {
            const body = CreateLeadRequestSchema.parse(req.body)
            const newLead = await prisma.leads.create({
                data: body
            })

            res.status(201).json(newLead)
        } catch (error) {
            next(error)   
        }
    }

    show: Handler = async (req, res, next) => {
        try {
            const id = Number(req.params.id)
            const lead = await prisma.leads.findUnique({
                where: {
                    id: id
                },
                include: {
                    groups: true,
                    campaigns: true
                }
            })

            if(!lead) throw new HttpError(404, 'Lead not found')

            res.json(lead)
        } catch (error) {
            next(error)
        }
    }

    update: Handler = async (req, res, next) => {
        try {
            const id = Number(req.params.id)
            const body = UpdateLeadRequestSchema.parse(req.body)
    
            const leadExists = await prisma.leads.findUnique({
                where: {
                    id: id
                }
            })
            if(!leadExists) throw new HttpError(404, 'Lead not found')

            const updatedLead = await prisma.leads.update({
                data: body,
                where: {
                    id: id
                }
            })


            res.json(updatedLead)
        } catch (error) {
            next(error)
        }

    }

    delete: Handler = async (req, res, next) => {
        try {
            const id  = Number(req.params.id)

            const leadExists = await prisma.leads.findUnique({
                where: {
                    id: id
                }
            })
            if(!leadExists) throw new HttpError(404, 'Lead not found')

            const deletedLead = await prisma.leads.delete({
                where: {
                    id: id
                }
            })
            
            res.json(deletedLead)
        } catch (error) {
            next(error)
        }
    }

}