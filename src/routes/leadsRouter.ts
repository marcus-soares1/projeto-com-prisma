import { Router } from "express";
import { LeadsController } from "../controllers/LeadsController";

const leadsRouter = Router()

// Instances
const leadsController = new LeadsController()


leadsRouter.get('/', leadsController.index)
leadsRouter.post('/', leadsController.create)
leadsRouter.get('/:id', leadsController.show)
leadsRouter.put('/:id', leadsController.update)
leadsRouter.delete('/:id', leadsController.delete)


export { leadsRouter }