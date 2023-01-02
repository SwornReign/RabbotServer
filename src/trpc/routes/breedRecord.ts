import { router, publicProcedure, Models } from '..';
import { z } from 'zod';
import { _BreedRecordModel } from '../../zod';
import { prisma } from '../..';

const model: Models = 'breedRecord'

export const breedRecordRouter = router({
    create: publicProcedure
        .input(_BreedRecordModel.omit({ id: true }))
        .mutation(({ input }) => {
            return prisma[model].create({
                data: input
            })
        }),
    list: publicProcedure.query(() => {
        return prisma.cage.findMany({});
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
        .input(_BreedRecordModel).mutation(({ input }) => {
            return prisma[model].update({
                where: {
                    id: input.id
                },
                data: input
            });
        }),
});