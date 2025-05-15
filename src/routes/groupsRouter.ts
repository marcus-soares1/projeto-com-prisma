import { Router } from "express";
import { GroupsController } from "../controllers/GroupsController";
import { GroupsLeadsController } from "../controllers/GroupsLeadsController";

const groupsRouter = Router()

// Instances
const groupsController = new GroupsController()
const groupsLeadsController = new GroupsLeadsController()

groupsRouter.get('/', groupsController.index)
groupsRouter.post('/', groupsController.create)
groupsRouter.get('/:id', groupsController.show)
groupsRouter.put('/:id', groupsController.update)
groupsRouter.delete('/:id', groupsController.delete)

groupsRouter.get('/:groupId/leads', groupsLeadsController.getLeads)
groupsRouter.post('/:groupId/leads', groupsLeadsController.addLead)
groupsRouter.delete('/:groupId/leads/:leadId', groupsLeadsController.removeLead)

export { groupsRouter }