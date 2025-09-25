import { z } from "zod";
import { HideableSchema } from "./hideable";

export type ProfessionalSummary = z.infer<typeof ProfessionalSummarySchema>;

export const ProfessionalSummarySchema = z.object({
  ...HideableSchema.shape,
  content: z.string(),
});