import { FastifyInstance } from "fastify";
import { educationRoutes } from "./education";
import { personalInfoRoutes } from "./personalInfo";

export async function registerRoutes(fastify: FastifyInstance) {
    await fastify.register(educationRoutes);
    await fastify.register(personalInfoRoutes);
}

