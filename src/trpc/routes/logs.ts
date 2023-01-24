import { router, publicProcedure, Models } from '..';
import { z } from 'zod';
import { _BreedRecordModel } from '../../zod';
import { prisma } from '../../app';
import dayjs from 'dayjs';

const model: Models = 'logs';

export const logsRouter = router({
  list: publicProcedure
    .input(
      z.object({
        cageId: z.string().uuid(),
        type: z.enum(['Feed', 'Water']),
      }),
    )
    .query(({ input: { cageId, type } }) => {
      return prisma[model].findMany({
        where: {
          cageId,
          type,
        },
      });
    }),
});
