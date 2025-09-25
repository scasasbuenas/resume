import type { FastifyInstance } from "fastify";
import { ProfessionalSummarySchema } from "../schemas/professionalSummary";
import { PROFESSIONAL_SUMMARY } from "../../src/data/professionalSummary";

export default async function (fastify: FastifyInstance) {
  fastify.get("/professional-summary", {
    schema: {
      response: {
        200: ProfessionalSummarySchema,
      },
    },
  }, async () => {
    return PROFESSIONAL_SUMMARY;
  });
}