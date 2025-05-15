import { Router } from 'express'
import { CampaignsController } from '../controllers/CampaignsController'
import { CampaignsLeadsController } from '../controllers/CampaignsLeadsController'

const campaignsController = new CampaignsController()
const campaignsLeadsController = new CampaignsLeadsController()

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