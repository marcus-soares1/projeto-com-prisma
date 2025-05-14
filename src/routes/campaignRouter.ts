import { Router } from 'express'
import { CampaignsController } from '../controllers/CampaignsController'

const campaignsController = new CampaignsController()

const campaignsRouter = Router()

campaignsRouter.get('/', campaignsController.index)
campaignsRouter.post('/', campaignsController.create)
campaignsRouter.get('/:id', campaignsController.show)
campaignsRouter.put('/:id', campaignsController.update)
campaignsRouter.delete('/:id', campaignsController.delete)

export { campaignsRouter }