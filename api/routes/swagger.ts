import { FastifyInstance } from "fastify";
import swagger from "@fastify/swagger";
import swaggerUi from "@fastify/swagger-ui";

export async function registerSwagger(fastify: FastifyInstance) {
    await fastify.register(swagger, {
        swagger: {
            info: {
                title: "resume-api",
                description: "API for Santiago Casasbuenas\'s resume information",
                version: "1.0.0",
            },
            host: "localhost:8003",
            schemes: ["http"],
            consumes: ["application/json"],
            produces: ["application/json"],
            tags: [
                { name: "Personal Information", description: "Personal contact information endpoints" },
                { name: "Education", description: "Education information endpoints" },
                { name: "Languages", description: "Languages endpoints" },
                { name: "Work Experience", description: "Work experience information endpoints" },
                { name: "Teaching Experience", description: "Teaching experience information endpoints" },
            ],
        },
        uiConfig: {}
    });

    await fastify.register(swaggerUi, {
        exposeRoute: true,
        uiConfig: {
            docExpansion: "full",
            deepLinking: true,
        },
        uiHooks: {
            onRequest: function (request, reply, next) {
                next();
            },
            preHandler: function (request, reply, next) {
                next();
            },
        },
        staticCSP: true,
        transformStaticCSP: (header) => header,
        transformSpecification: (swaggerObject) => {return swaggerObject;},
        transformSpecificationClone: true,
    });
}