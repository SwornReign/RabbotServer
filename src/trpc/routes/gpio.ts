import { router, publicProcedure, Models } from '..';
import { z } from 'zod';
import { _BreedRecordModel } from '../../zod';
import { prisma } from '../../app';
import dayjs from 'dayjs';
import { runMotor, runWater, runWeight } from '../../GPIO/funtions';
import cron from 'node-cron';

const model: Models = 'breedRecord';

export const gpioRouter = router({
  feed: publicProcedure.mutation(async () => {
    console.log('GPIO Feed');
    try {
      await runMotor();

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
      }),
    )
    .mutation(async ({ input: { interval } }) => {
      console.log('GPIO Water');
      try {
        await runWater(interval);

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
      await runWeight();

      return {
        ok: true,
      };
    } catch (error) {
      return {
        ok: false,
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
