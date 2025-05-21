import { Handler } from "express";
import { HttpError } from "../errors/HttpsError";
import { CreateCampaignRequestSchema, UpdateCampaignRequestSchema } from "./schema/CampaingsRequestSchema";
import { ICampaignsRepository } from "../repositories/CampaignsRepository";

export class CampaignsController {
    constructor(private readonly campaignsRepository: ICampaignsRepository) { }

    index: Handler = async (req, res, next) => {
        try {
            const campaigns = await this.campaignsRepository.find()
            res.json(campaigns)

        } catch (error) {
            next(error)
        }
    }

    show: Handler = async (req, res, next) => {
        try {
            const id = Number(req.params.id)
            const campaign = await this.campaignsRepository.findById(id)

            if(!campaign) throw new HttpError(404, 'Campaign not found')

            res.json(campaign);
        } catch (error) {
            next(error)
        }
    }

    create: Handler = async (req, res, next) => {
        try {
            const body = CreateCampaignRequestSchema.parse(req.body)

            const newCampaign = await this.campaignsRepository.create(body)

            res.status(201).json(newCampaign);
        } catch (error) {
            next(error)
        }
    }

    update: Handler = async (req, res, next) => {
        try {
            const id = Number(req.params.id)
            const body = UpdateCampaignRequestSchema.parse(req.body)

            const updatedCampaign = await this.campaignsRepository.updateById(id, body)
            if(!updatedCampaign) throw new HttpError(404, 'Campaign not found')

            res.json(updatedCampaign);
        } catch (error) {
            next(error)
        }
    }

    delete: Handler = async (req, res, next) => {
        try {
            const id = Number(req.params.id)

            const deletedCampaign = await this.campaignsRepository.deleteById(id)
            if(!deletedCampaign) throw new HttpError(404, 'Campaign not found')

            res.json(deletedCampaign)
        } catch (error) {
            next(error)
        }
    }
}