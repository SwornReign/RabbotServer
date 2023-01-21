import { initTRPC } from '@trpc/server';
import * as z from 'zod';
import { prisma } from '../app';
import { breedRecordRouter, breedTypeRouter, cageRouter, rabbitRouter } from './routes';
import { gpioRouter } from './routes/gpio';
export const t = initTRPC.create();
export const appRouter = t.router({
    cage: cageRouter,
    rabbit: rabbitRouter,
    breedType: breedTypeRouter,
    breedRecord: breedRecordRouter,
    gpio: gpioRouter
});
// export type definition of API
export type AppRouter = typeof appRouter;