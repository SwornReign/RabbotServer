import { router, publicProcedure, Models } from '../../trpc';
import { z } from 'zod';
import { _CageModel } from '../../zod';
import { prisma } from '../..';

const model: Models = 'cage'

export const cageRouter = router({
    create: publicProcedure
        .input(_CageModel.omit({ id: true, updateAt: true, createdAt: true }))
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
        .input(_CageModel.omit({ updateAt: true, createdAt: true })).mutation(({ input }) => {
            return prisma[model].update({
                where: {
                    id: input.id
                },
                data: input
            });
        }),
});