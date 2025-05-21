import { Router } from "express";
import { LeadsController } from "../controllers/LeadsController";
import { PrismaLeadsRepository } from "../repositories/prisma/PrismaLeadsRepository";
import { LeadsService } from "../services/LeadService";

const leadsRouter = Router()

// Instances
const leadsRepository = new PrismaLeadsRepository()
const leadsService = new LeadsService(leadsRepository)
const leadsController = new LeadsController(leadsService)


leadsRouter.get('/', leadsController.index)
leadsRouter.post('/', leadsController.create)
leadsRouter.get('/:id', leadsController.show)
leadsRouter.put('/:id', leadsController.update)
leadsRouter.delete('/:id', leadsController.delete)


export { leadsRouter }