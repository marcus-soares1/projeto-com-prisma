import { Router } from "express";
import { GroupsController } from "../controllers/GroupsController";
import { GroupsLeadsController } from "../controllers/GroupsLeadsController";
import { PrismaGroupsRepository } from "../repositories/prisma/PrismaGroupsRepository";
import { PrismaLeadsRepository } from "../repositories/prisma/PrismaLeadsRepository";

const groupsRouter = Router()

// Instances
const groupsRepository = new PrismaGroupsRepository()
const leadsRepository = new PrismaLeadsRepository()

const groupsController = new GroupsController(groupsRepository)
const groupsLeadsController = new GroupsLeadsController(groupsRepository, leadsRepository)

groupsRouter.get('/', groupsController.index)
groupsRouter.post('/', groupsController.create)
groupsRouter.get('/:id', groupsController.show)
groupsRouter.put('/:id', groupsController.update)
groupsRouter.delete('/:id', groupsController.delete)

groupsRouter.get('/:groupId/leads', groupsLeadsController.getLeads)
groupsRouter.post('/:groupId/leads', groupsLeadsController.addLead)
groupsRouter.delete('/:groupId/leads/:leadId', groupsLeadsController.removeLead)

export { groupsRouter }