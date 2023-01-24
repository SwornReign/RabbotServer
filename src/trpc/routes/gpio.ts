import { router, publicProcedure, Models } from '..';
import { z } from 'zod';
import { _BreedRecordModel } from '../../zod';
import { prisma } from '../../app';
import dayjs from 'dayjs';
import { runMotor, runWater, runWeight } from '../../GPIO/funtions';
import cron from 'node-cron';

const model: Models = 'logs';

export const gpioRouter = router({
  feed: publicProcedure
    .input(
      z.object({
        cageId: z.string().uuid(),
      }),
    )
    .mutation(async ({ input: { cageId } }) => {
      console.log('GPIO Feed');
      try {
        await runMotor();

        await prisma[model].create({
          data: {
            type: 'Feed',
            Cage: {
              connect: {
                id: cageId,
              },
            },
          },
        });

        return {
          ok: true,
        };
      } catch (error) {
        return {
          ok: false,
        };
      }
    }),
  water: publicProcedure
    .input(
      z.object({
        interval: z.number().optional().default(2000),
        cageId: z.string().uuid(),
      }),
    )
    .mutation(async ({ input: { interval, cageId } }) => {
      console.log('GPIO Water');
      try {
        await runWater(interval);

        await prisma[model].create({
          data: {
            type: 'Water',
            Cage: {
              connect: {
                id: cageId,
              },
            },
          },
        });

        return {
          ok: true,
        };
      } catch (error) {
        return {
          ok: false,
        };
      }
    }),
  weight: publicProcedure.mutation(async () => {
    console.log('GPIO Weight');

    try {
      const value = await runWeight();

      return {
        ok: true,
        weight: value,
      };
    } catch (error) {
      return {
        ok: false,
        weight: 0,
      };
    }
  }),
  autoFeed: publicProcedure
    .input(
      z.object({
        hour: z.string().optional(),
        min: z.string().optional(),
        enable: z.boolean(),
      }),
    )
    .mutation(async ({ input: { enable } }) => {
      try {
        return {
          ok: true,
        };
      } catch (error) {
        return {
          ok: false,
        };
      }
    }),
});
