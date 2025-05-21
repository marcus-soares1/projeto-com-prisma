import { Campaigns, Groups, Leads, LeadStatus } from "../generated/prisma"

export type LeadsCampaignsStatus = "New" | "Engaged" | "Folloup_Scheduled" | "Contacted" | "Converted" | "Unresponsive" | "Disqualified" | "Re_Engaged" | "Opted_Out" 

export interface ICreateCampaignAttributes {
    name: string
    description: string
    startDate: Date
    endDate?: Date
}

export interface ICampaignsRepository {
    find: () => Promise<Campaigns[]>
    findById: (id: number) => Promise<Campaigns | null>
    create: (attributes: ICreateCampaignAttributes) => Promise<Campaigns>
    updateById: (id: number, attributes: Partial<ICreateCampaignAttributes>) => Promise<Campaigns | null>
    deleteById: (id: number) => Promise<Campaigns | null>
    addLead: (campaignId: number, leadId: number, leadStatus?: LeadsCampaignsStatus) => Promise<void>
    updateLeadStatus: (campaignId: number, leadId: number, leadStatus: LeadsCampaignsStatus) => Promise<void>
    removeLead: (campaignId: number, leadId: number) => Promise<void>
}