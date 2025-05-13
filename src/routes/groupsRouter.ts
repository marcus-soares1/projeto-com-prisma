import { Router } from "express";
import { GroupsController } from "../controllers/GroupsController";

const groupsRouter = Router()

// Instances
const groupsController = new GroupsController()


groupsRouter.get('/', groupsController.index)
groupsRouter.post('/', groupsController.create)
groupsRouter.get('/:id', groupsController.show)
groupsRouter.put('/:id', groupsController.update)
groupsRouter.delete('/:id', groupsController.delete)


export { groupsRouter }