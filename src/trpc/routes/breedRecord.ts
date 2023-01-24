import { router, publicProcedure, Models } from '..';
import { z } from 'zod';
import { _BreedRecordModel } from '../../zod';
import { prisma } from '../../app';
import dayjs from 'dayjs';

const model: Models = 'breedRecord';

export const breedRecordRouter = router({
  create: publicProcedure
    .input(
      z.object({
        breedDate: z.string(),
        expectedKindleDate: z.string().optional(),
        nestBoxDate: z.string().optional(),
        kindleDate: z.string().optional(),
        weanDate: z.string().optional(),
        damWeight: z.string(),
        description: z.string().optional(),
      }),
    )
    .mutation(({ input }) => {
      return prisma[model].create({
        data: {
          breedDate: dayjs(input.breedDate).toDate(),
          expectedKindleDate: dayjs(input.expectedKindleDate).toDate(),
          nestBoxDate: dayjs(input.nestBoxDate).toDate(),
          kindleDate: dayjs(input.kindleDate).toDate(),
          weanDate: dayjs(input.weanDate).toDate(),
          damWeight: input.damWeight,
          description: input.description,
        },
      });
    }),
  list: publicProcedure.query(() => {
    return prisma[model].findMany({});
  }),
  getOne: publicProcedure
    .input(
      z.object({
        id: z.string().uuid(),
      }),
    )
    .query(({ input }) => {
      return prisma[model].findFirst({
        where: {
          id: input.id,
        },
      });
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
  update: publicProcedure
    .input(
      z.object({
        id: z.string().uuid().optional(),
        breedDate: z.date().optional(),
        expectedKindleDate: z.date().optional(),
        nestBoxDate: z.date().optional(),
        kindleDate: z.date().optional(),
        weanDate: z.date().optional(),
        description: z.string().optional(),
      }),
    )
    .mutation(({ input }) => {
      let recordId = input.id;
      delete input.id;
      return prisma[model].update({
        where: {
          id: recordId,
        },
        data: input,
      });
    }),
});
