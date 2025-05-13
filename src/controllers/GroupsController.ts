import { Handler } from "express";
import { prisma } from "../database";
import { CreateGroupsRequestSchema, UpdateGroupsRequestSchema } from "./schema/GroupsRequestSchema";
import { HttpError } from "../errors/HttpsError";

export class GroupsController {
    index: Handler = async (req, res, next) => {
        try {
            const groups = await prisma.groups.findMany()
            res.json(groups)
        } catch (error) {
        next(error)

        }
    }

    show: Handler = async (req, res, next) => {
        try {
            const id = Number(req.params.id)
            const group = await prisma.groups.findUnique({
                where: { id },
                include: {leads: true}
            })

            if(!group) throw new HttpError(404, 'Group not found')

            res.json(group)

        } catch (error) {
        next(error)

        }
    }

    create: Handler = async (req, res, next) => {
        try {
            const body = CreateGroupsRequestSchema.parse(req.body)
            const newGroup = await prisma.groups.create({
                data: body
            })
            res.status(201).json(newGroup)

        } catch (error) {
        next(error)

        }
    }

    update: Handler = async (req, res, next) => {
        try {
            const id = Number(req.params.id)
            const body = UpdateGroupsRequestSchema.parse(req.body)

            const groupExists = await prisma.groups.findUnique({
                where: { id }
            })
            if(!groupExists) throw new HttpError(404, 'Group not found')

            const updatedGroup = await prisma.groups.update({
                data: body,
                where: { id }
            })
            res.json(updatedGroup)
        } catch (error) {
        next(error)

        }
    }

    delete: Handler = async (req, res, next) => {
        try {
            const id = Number(req.params.id)
            const groupExists = await prisma.groups.findUnique({
                where: { id }
            })
            if(!groupExists) throw new HttpError(404, 'Group not found')

            const deletedGroup = await prisma.groups.delete({
                where: { id }
            }) 

            res.json(deletedGroup)
        } catch (error) {
        next(error)

        }
    }

}