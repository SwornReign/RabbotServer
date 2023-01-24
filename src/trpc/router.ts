import { initTRPC } from '@trpc/server';
import * as z from 'zod';
import { prisma } from '../app';
import { breedRecordRouter, breedTypeRouter, cageRouter, rabbitRouter } from './routes';
import { fakeWeightRouter } from './routes/fakeWeight';
import { gpioRouter } from './routes/gpio';
import { logsRouter } from './routes/logs';
export const t = initTRPC.create();
export const appRouter = t.router({
  cage: cageRouter,
  rabbit: rabbitRouter,
  breedType: breedTypeRouter,
  breedRecord: breedRecordRouter,
  gpio: gpioRouter,
  weight: fakeWeightRouter,
  logs: logsRouter,
});
// export type definition of API
export type AppRouter = typeof appRouter;
