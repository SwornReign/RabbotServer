import { router, publicProcedure, Models } from '..';
import { z } from 'zod';
import { _BreedRecordModel } from '../../zod';
import { prisma } from '../../app';
import dayjs from 'dayjs';
import { runMotor, runWater, runWeight } from '../../GPIO/funtions';
import cron from 'node-cron';

let toggleError = true;
let fakeWeight = '0';

export const fakeWeightRouter = router({
  toggleError: publicProcedure.input(z.boolean()).mutation(async ({ input }) => {
    toggleError = input;
  }),
  getToggleError: publicProcedure.query(() => {
    return toggleError;
  }),
  setWeight: publicProcedure.input(z.string()).mutation(async ({ input }) => {
    fakeWeight = input;
  }),
  startWeight: publicProcedure.mutation(async () => {
    const toReturn = `${fakeWeight}.${Math.random().toString().split('.')[1].slice(0, 3)}`;

    await new Promise((res) => setTimeout(res, 5000));

    return {
      isOk: toggleError,
      weight: toReturn,
    };
  }),
  getWeight: publicProcedure.query(async () => {
    return `${fakeWeight}`;
  }),
});
