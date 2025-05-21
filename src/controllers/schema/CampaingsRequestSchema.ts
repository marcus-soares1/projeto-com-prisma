import { z } from "zod";
import { LeadsCampaignsStatus } from "../../generated/prisma";

const LeadsCampaignsStatusSchema = z.enum([
    "New",
    "Engaged",
    "Folloup_Scheduled",
    "Contacted",
    "Converted",
    "Unresponsive",
    "Disqualified",
    "Re_Engaged",
    "Opted_Out"
])

export const CreateCampaignRequestSchema = z.object({
    name: z.string(),
    description: z.string(),
    startDate: z.coerce.date(),
    endDate: z.coerce.date().optional()
})

export const UpdateCampaignRequestSchema = z.object({
    name: z.string().optional(),
    description: z.string().optional(),
    startDate: z.coerce.date().optional(),
    endDate: z.coerce.date().optional()
})

export const GetCampaignsLeadsRequestSchema = z.object({
    page: z.string().optional(),
    pageSize: z.string().optional(),
    name: z.string().optional(),
    status: LeadsCampaignsStatusSchema.optional(),
    sortBy: z.enum(["name", "createdAt"]).optional(),
    order: z.enum(["asc", "desc"]).optional()
})

export const AddLeadsRequestSchema = z.object({
    leadId: z.number(),
    status: LeadsCampaignsStatusSchema.optional()
})

export const UpdateLeadStatusSchema = z.object({
    status: LeadsCampaignsStatusSchema
})