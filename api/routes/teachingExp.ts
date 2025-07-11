import { FastifyInstance } from 'fastify';
import { TEACHING } from '../../src/data/teachingExp';
import { TeachingSchema } from '../schemas/teachingExp';
import { createDataRoute } from './utils';

export async function teachingRoutes(fastify: FastifyInstance) {
  createDataRoute(fastify, {
    path: '/teaching',
    tag: 'Teaching',
    summary: 'Get teaching experience',
    description: 'Returns a list of teaching experience and positions',
    data: TEACHING.filter(t => !t.isHidden),
    schema: TeachingSchema,
  });
} 