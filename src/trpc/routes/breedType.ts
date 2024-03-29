import { router, publicProcedure, Models } from '..';
import { z } from 'zod';
import { _BreedTypeModel } from '../../zod';
import { prisma } from '../../app';

const model: Models = 'breedType';

export const breedTypeRouter = router({
  create: publicProcedure
    .input(_BreedTypeModel.omit({ id: true, createdAt: true, updateAt: true }))
    .mutation(({ input }) => {
      return prisma[model].create({
        data: {
          name: input.name,
        },
      });
    }),
  list: publicProcedure.query(() => {
    return prisma[model].findMany();
  }),
  delete: publicProcedure
    .input(
      z.object({
        id: z.string().uuid(),
      }),
    )
    .mutation(({ input }) => {
      return prisma[model].delete({
        where: {
          id: input.id,
        },
      });
    }),
  update: publicProcedure.input(_BreedTypeModel).mutation(({ input }) => {
    return prisma[model].update({
      where: {
        id: input.id,
      },
      data: input,
    });
  }),
  createFirst: publicProcedure.mutation(({ input }) => {
    return prisma[model].create({
      data: {
        name: 'Palomino',
      },
    });
  }),
});
