import { initTRPC } from '@trpc/server';
import * as z from 'zod';
import { prisma } from '..';
import { cageRouter } from './routes';
export const t = initTRPC.create();
export const appRouter = t.router({
    getUser: t.procedure.input(z.string()).query((req) => {
        req.input; // string
        return { id: req.input, name: 'Bilbo' };
    }),
    createUser: t.procedure
        .input(z.object({ name: z.string().min(5) }))
        .mutation(async (req) => {
            // use your ORM of choice

            return 'nothing'
        }),
    cage: cageRouter
});
// export type definition of API
export type AppRouter = typeof appRouter;