import { Handler } from "express";
import { CreateGroupsRequestSchema, UpdateGroupsRequestSchema } from "./schema/GroupsRequestSchema";
import { HttpError } from "../errors/HttpsError";
import { IGroupsRepository } from "../repositories/GroupsRepository";

export class GroupsController {
    constructor(private readonly groupsRepository: IGroupsRepository) {}
    index: Handler = async (req, res, next) => {
        try {
            const groups = await this.groupsRepository.find()
            res.json(groups)
        } catch (error) {
            next(error)

        }
    }

    show: Handler = async (req, res, next) => {
        try {
            const id = Number(req.params.id)
            const group = await this.groupsRepository.findById(id)

            if(!group) throw new HttpError(404, 'Group not found')

            res.json(group)

        } catch (error) {
            next(error)

        }
    }

    create: Handler = async (req, res, next) => {
        try {
            const body = CreateGroupsRequestSchema.parse(req.body)
            const newGroup = await this.groupsRepository.create(body)
            res.status(201).json(newGroup)

        } catch (error) {
            next(error)

        }
    }

    update: Handler = async (req, res, next) => {
        try {
            const id = Number(req.params.id)
            const body = UpdateGroupsRequestSchema.parse(req.body)
            
            const updatedGroup = await this.groupsRepository.updateById(id, body)
            if(!updatedGroup) throw new HttpError(404, 'Group not found')

            res.json(updatedGroup)
        } catch (error) {
            next(error)

        }
    }

    delete: Handler = async (req, res, next) => {
        try {
            const id = Number(req.params.id)
            
            const deletedGroup = await this.groupsRepository.deleteById(id)
            if(!deletedGroup) throw new HttpError(404, 'Group not found')

            res.json(deletedGroup)
        } catch (error) {
            next(error)

        }
    }

}