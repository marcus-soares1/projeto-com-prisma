import { Router } from 'express'
import { CampaignsController } from '../controllers/CampaignsController'
import { CampaignsLeadsController } from '../controllers/CampaignsLeadsController'
import { PrismaCampaignsRepository } from '../repositories/prisma/PrismaCampaignsRepository'
import { PrismaLeadsRepository } from '../repositories/prisma/PrismaLeadsRepository'

// Instances
const campaignsRespository = new PrismaCampaignsRepository()
const leadsRepository = new PrismaLeadsRepository()

const campaignsController = new CampaignsController(campaignsRespository)
const campaignsLeadsController = new CampaignsLeadsController(campaignsRespository, leadsRepository)

const campaignsRouter = Router()

campaignsRouter.get('/', campaignsController.index)
campaignsRouter.post('/', campaignsController.create)
campaignsRouter.get('/:id', campaignsController.show)
campaignsRouter.put('/:id', campaignsController.update)
campaignsRouter.delete('/:id', campaignsController.delete)

campaignsRouter.get('/:campaignId/leads', campaignsLeadsController.getLeads)
campaignsRouter.post('/:campaignId/leads', campaignsLeadsController.addLead)
campaignsRouter.put('/:campaignId/leads/:leadId', campaignsLeadsController.updateLeadStatus)
campaignsRouter.delete('/:campaignId/leads/:leadId', campaignsLeadsController.removeLead)

export { campaignsRouter }