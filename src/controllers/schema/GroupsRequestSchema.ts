import { z } from "zod";
import { LeadStatusSchema } from "./LeadsRequestSchema";

export const CreateGroupsRequestSchema = z.object({
    name: z.string(),
    description: z.string()
})

export const UpdateGroupsRequestSchema =  z.object({
    name: z.string().optional(),
    description: z.string().optional()
})

export const GetGroupsLeadsRequestSchema = z.object({
    page: z.coerce.number().optional(),
    pageSize: z.coerce.number().optional(),
    name: z.string().optional(),
    status: LeadStatusSchema.optional(),
    sortBy: z.enum(["name", "status", "createdAt"]).optional(),
    order: z.enum(["asc", "desc"]).optional()
})

export const AddLeadsGroupRequestSchema = z.object({
    id: z.number()
})