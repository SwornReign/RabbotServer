import { router, publicProcedure, Models } from '../../trpc';
import { z } from 'zod';
import { _RabbitModel } from '../../zod';
import { prisma } from '../..';

const model: Models = 'rabbit'

export const rabbitRouter = router({
    create: publicProcedure
        .input(_RabbitModel.omit({ id: true }))
        .mutation(({ input }) => {
            return prisma[model].create({
                data: input
            })
        }),
    list: publicProcedure.query(() => {
        return prisma[model].findMany({});
    }),
    delete: publicProcedure
        .input(z.object({
            id: z.string().uuid()
        })).mutation(({ input }) => {
            return prisma[model].delete({
                where: {
                    id: input.id
                }
            });
        }),
    update: publicProcedure
        .input(_RabbitModel).mutation(({ input }) => {
            return prisma[model].update({
                where: {
                    id: input.id
                },
                data: input
            });
        }),
});