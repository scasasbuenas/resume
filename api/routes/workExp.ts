import { FastifyInstance } from 'fastify';
import { WORK_EXPERIENCE } from '../../src/data/workExp';
import { WorkExperienceSchema } from '../schemas/workExp';
import { createDataRoute } from './utils';

export async function workExperienceRoutes(fastify: FastifyInstance) {
    createDataRoute(fastify, {
      path: '/work-experience',
      tag: 'Work Experience',
      summary: 'Get work experience history',
      description: 'Returns a list of work experience history',
      data: WORK_EXPERIENCE.filter(w => !w.isHidden),
      schema: WorkExperienceSchema,
    });
  } 