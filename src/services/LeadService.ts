import { HttpError } from "../errors/HttpsError"
import { ICreateLeadAttributes, ILeadsRepository, ILeadsWhereParams, LeadsStatus } from "../repositories/LeadsRepository"

interface GetLeadsWithPaginationParams {
    page?: number
    pageSize?: number
    name?: string
    status?: LeadsStatus
    sortBy?: "name" | "status" | "createdAt"
    order?: "asc" | "desc"
}

export class LeadsService {
    constructor(private readonly leadsRepository: ILeadsRepository) {}

    async getAllLeadsPaginated(params: GetLeadsWithPaginationParams) {
        const { page = 1, pageSize = 10, name, status, sortBy, order } = params
        const limit = pageSize
        const offset = (page - 1) * limit

        const where: ILeadsWhereParams = {} 

        if(name) where.name = { like: name, mode: 'insensitive' }
        if(status) where.status = status

        const leads = await this.leadsRepository.find({ where, sortBy, order, limit, offset })
        const total = await this.leadsRepository.count(where)

        return {
            data: leads,
            meta: {
                page,
                pageSize,
                total,
                totalPages: Math.ceil(total / pageSize)
            }
        }
    }

    async getLeadById(id: number){
        const lead =  await this.leadsRepository.findById(id)
        if(!lead) throw new HttpError(404, `Lead not found`)
        
        return lead
    }

    async createLead(params: ICreateLeadAttributes){
        if(!params.status) params.status = "New"
        return await this.leadsRepository.create(params)
    }

    async updateLead(leadId: number, params: Partial<ICreateLeadAttributes>){
        const { status } = params
        
        const lead = await this.leadsRepository.findById(leadId)

        if(!lead) throw new HttpError(404, 'Lead not found')

        if(lead.status === "New" && params.status !== undefined && params.status !== "Contacted") 
            throw new HttpError(400, 'A new lead have to be contacted before get any other status')

        if(params.status && params.status === "Archived") {
            const now = new Date()
            const diffTime = Math.abs(now.getTime() - lead.updatedAt.getTime())
            const diffDays = Math.ceil(diffTime/ (1000 * 60 * 60 * 24))
            if(diffDays < 100) throw new HttpError(400, 'A lead must be 6 months unupdated to be archived.')
        }

        return await this.leadsRepository.updateById(leadId, params)
    }

    async deleteLead(leadId: number){
        const leadExists = await this.leadsRepository.findById(leadId)
        if(!leadExists) throw new HttpError(404, 'Lead not found')

        return await this.leadsRepository.deleteById(leadId)
    }
}