import { Handler } from "express";
import { prisma } from "../database";
import { HttpError } from "../errors/HttpsError";
import { CreateCampaignRequestSchema, UpdateCampaignRequestSchema } from "./schema/CampaingsRequestSchema";

export class CampaignsController {
    index: Handler = async (req, res, next) => {
        try {
            const campaigns = await prisma.campaigns.findMany();
            res.json(campaigns);


        } catch (error) {
            next(error)
        }
    }

    show: Handler = async (req, res, next) => {
        try {
            const id = Number(req.params.id)
            const campaign = await prisma.campaigns.findUnique({ where: { id: Number(id) } });

            if(!campaign) throw new HttpError(404, 'Campaign not found')

            res.json(campaign);
        } catch (error) {
            next(error)
        }
    }

    create: Handler = async (req, res, next) => {
        try {
            const body = CreateCampaignRequestSchema.parse(req.body)

            const newCampaign = await prisma.campaigns.create({
                data: body,
            })

            res.status(201).json(newCampaign);
        } catch (error) {
            next(error)
        }
    }

    update: Handler = async (req, res, next) => {
        try {
            const id = Number(req.params.id)
            const body = UpdateCampaignRequestSchema.parse(req.body)

            const campaignExists = await prisma.campaigns.findUnique({where: { id }})
            if(!campaignExists) throw new HttpError(404, 'Campaign not found')

            const updatedCampaign = await prisma.campaigns.update({
                where: { id: Number(id) },
                data: body,
            })

            res.json(updatedCampaign);
        } catch (error) {
            next(error)
        }
    }

    delete: Handler = async (req, res, next) => {
        try {
            const id = Number(req.params.id)

            const campaignExists = await prisma.campaigns.findUnique({where: { id }})
            if(!campaignExists) throw new HttpError(404, 'Campaign not found')

            const deletedCampaign = await prisma.campaigns.delete({ where: { id } })
            res.status(204).json(deletedCampaign)
        } catch (error) {
            next(error)
        }
    }
}