import type { FastifyInstance } from "fastify";
import { LanguageSchema } from "../schemas/language";
import { LANGUAGES } from "../../src/data/languages";

export default async function (fastify: FastifyInstance) {
  fastify.get("/languages", {
    schema: {
      response: {
        200: {
          type: "array",
          items: LanguageSchema,
        },
      },
    },
  }, async () => {
    return LANGUAGES;
  });
}