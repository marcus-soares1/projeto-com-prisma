import { Handler } from "express";
import { CreateLeadRequestSchema, GetLeadsRequestSchema, UpdateLeadRequestSchema } from "./schema/LeadsRequestSchema";
import { HttpError } from "../errors/HttpsError";
import { ILeadsRepository, ILeadsWhereParams } from "../repositories/LeadsRepository";

export class LeadsController {
    private leadsRepository: ILeadsRepository

    constructor(leadsRepository: ILeadsRepository)
    {
        this.leadsRepository = leadsRepository
    }

    index: Handler = async (req, res, next) => {
        try {
            const query = GetLeadsRequestSchema.parse(req.query)
            const { page = "1", pageSize = "10", name, status, sortBy = "name", order = "asc"} = query

            const limit = Number(pageSize)
            const offset = (Number(page) - 1) * limit

            const where: ILeadsWhereParams = {} 

            if(name) where.name = { like: name, mode: 'insensitive' }
            if(status) where.status = status

            const leads = await this.leadsRepository.find({ where, sortBy, order, limit, offset })
            const total = await this.leadsRepository.count(where)

            // const leads = await prisma.leads.findMany({
            //     where,
            //     skip: (pageNumber -1) * pageSizeNumber,
            //     take: pageSizeNumber,
            //     orderBy: {[sortBy]: order}
            // })

            // const total = await prisma.leads.count({where})

            res.json({
                data: leads,
                meta: {
                    page: Number(page),
                    pageSize: limit,
                    total,
                    totalPages: Math.ceil(total / limit )
                }
            })
        } catch (error) {
            next(error)
        }
    }

    create:  Handler =  async (req, res, next) => {
        try {
            const body = CreateLeadRequestSchema.parse(req.body)
            
            const newLead = await this.leadsRepository.create(body)
            // const newLead = await prisma.leads.create({
            //     data: body
            // })

            res.status(201).json(newLead)
        } catch (error) {
            next(error)   
        }
    }

    show: Handler = async (req, res, next) => {
        try {
            const id = Number(req.params.id)

            const lead= await this.leadsRepository.findById(id)
            // const lead = await prisma.leads.findUnique({
            //     where: {
            //         id: id
            //     },
            //     include: {
            //         groups: true,
            //         campaigns: true
            //     }
            // })

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
    
            // const lead = await prisma.leads.findUnique({
            //     where: {
            //         id: id
            //     }
            // })
            const lead = await this.leadsRepository.findById(id)

            if(!lead) throw new HttpError(404, 'Lead not found')

            if(lead.status === "New" && body.status !== undefined && body.status !== "Contacted") 
                throw new HttpError(400, 'A new lead have to be contacted before get any other status')

            if(body.status && body.status === "Archived") {
                const now = new Date()
                const diffTime = Math.abs(now.getTime() - lead.updatedAt.getTime())
                const diffDays = Math.ceil(diffTime/ (1000 * 60 * 60 * 24))
                if(diffDays < 100) throw new HttpError(400, 'A lead must be 6 months unupdated to be archived.')
            }

            // const updatedLead = await prisma.leads.update({
            //     data: body,
            //     where: {
            //         id: id
            //     }
            // })

            const updatedLead = await this.leadsRepository.updateById(id, body)

            res.json(updatedLead)
        } catch (error) {
            next(error)
        }

    }

    delete: Handler = async (req, res, next) => {
        try {
            const id  = Number(req.params.id)

            // const leadExists = await prisma.leads.findUnique({
            //     where: {
            //         id: id
            //     }
            // })
            const leadExists = await this.leadsRepository.findById(id)
            if(!leadExists) throw new HttpError(404, 'Lead not found')

            const deletedLead = await this.leadsRepository.deleteById(id)
            // const deletedLead = await prisma.leads.delete({
            //     where: {
            //         id: id
            //     }
            // })
            
            res.json(deletedLead)
        } catch (error) {
            next(error)
        }
    }

}