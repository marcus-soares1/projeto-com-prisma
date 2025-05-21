import { prisma } from "../../database";
import { Campaigns, Groups } from "../../generated/prisma";
import { ICampaignsRepository, ICreateCampaignAttributes, LeadsCampaignsStatus } from "../CampaignsRepository";

export class PrismaCampaignsRepository implements ICampaignsRepository {
    async find (): Promise<Campaigns[]>{
        return prisma.campaigns.findMany()

    }

    async findById(id: number): Promise<Campaigns | null>{
        return prisma.campaigns.findUnique({ 
            where: { id },
            include: {
                leads: {
                    include: { leads: true }
                }
            }
        })

    }

    async create (attributes: ICreateCampaignAttributes): Promise<Campaigns>{
        return prisma.campaigns.create({data: attributes})

    }

    async updateById (id: number, attributes: Partial<ICreateCampaignAttributes>): Promise<Campaigns | null>{
        const campaignExists = await prisma.campaigns.findUnique({where: { id }})
        if(!campaignExists) return null

        return prisma.campaigns.update({ where: { id }, data: attributes })

    }

    async deleteById (id: number): Promise<Campaigns | null>{
        const campaignExists = await prisma.campaigns.findUnique({where: { id }})
        if(!campaignExists) return null

        return prisma.campaigns.delete({ where: { id } })

    }

    async addLead(campaignId: number, leadId: number, leadStatus?: LeadsCampaignsStatus): Promise<void>{
        await prisma.leadsCampaigns.create({
            data: {
                campaignId,
                leadId,
                status: leadStatus
            }
        })
    }

    async updateLeadStatus(campaignId: number, leadId: number, leadStatus: LeadsCampaignsStatus): Promise<void>{
        await prisma.leadsCampaigns.update({
            data: {
                status: leadStatus
            },
            where: {
                leadId_campaignId: {
                    leadId,
                    campaignId,
                }
            }
        })
    }
    
    async removeLead(campaignId: number, leadId: number): Promise<void>{
        await prisma.leadsCampaigns.delete({
            where: {
                leadId_campaignId: {
                    campaignId,
                    leadId
                }
            }
        })
    }
}