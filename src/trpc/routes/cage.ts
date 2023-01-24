import { router, publicProcedure, Models } from '../../trpc';
import { z } from 'zod';
import { _CageModel } from '../../zod';
import { prisma } from '../../app';
import cron from 'node-cron';
import { runMotor } from '../../GPIO/funtions';
import dayjs from 'dayjs';

const model: Models = 'cage';

let cronFeed: cron.ScheduledTask[] = [];

export const cageRouter = router({
  create: publicProcedure
    .input(_CageModel.omit({ id: true, updateAt: true, createdAt: true }))
    .mutation(({ input }) => {
      return prisma[model].create({
        data: {
          name: input.name,
          cageType: input.cageType,
          feedCount: input.feedCount,
          waterGpio: input.waterGpio,
          ...input,
        },
      });
    }),
  list: publicProcedure.query(() => {
    return prisma[model].findMany({
      include: {
        Rabbit: true,
      },
    });
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
        include: {
          Rabbit: true,
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
        name: z.string().optional(),
        description: z.string().optional(),
        cageType: z.enum(['Breeder', 'Pen']).optional(),
        AutoFeed: z.boolean().optional(),
        feedTime: z.string().array().optional(),
      }),
    )
    .mutation(async ({ input }) => {
      let cageId = input.id;
      delete input.id;

      const data = await prisma[model].update({
        where: {
          id: cageId,
        },
        data: input,
      });

      const { feedTime } = data;

      if (input.AutoFeed && feedTime && feedTime.length) {
        feedTime.forEach((i) => {
          const hour = dayjs(i).get('hour');

          const minute = dayjs(i).get('minute');

          const c = cron.schedule(`${minute} ${hour} * * *`, async () => {
            await runMotor();
            console.log(`AutoFeed Run [${dayjs().format()}]`);
          });

          c.start();

          cronFeed.push(c);
        });
      } else {
        cronFeed.forEach((i) => {
          i.stop();
        });
      }

      return data;
    }),
  RabbitToCage: publicProcedure
    .input(
      z.object({
        rabbitId: z.string().uuid(),
        cageId: z.string().uuid(),
      }),
    )
    .mutation(({ input }) => {
      return prisma[model].update({
        where: {
          id: input.cageId,
        },
        data: {
          Rabbit: {
            connect: {
              id: input.rabbitId,
            },
          },
        },
      });
    }),
  listCage: publicProcedure
    .input(
      z.object({
        type: z.enum(['Breeder', 'Pen']),
      }),
    )
    .query(({ input: { type } }) => {
      return prisma.$transaction(async (ctx) => {
        const cage = await ctx.cage.findMany({
          where: {
            cageType: type,
          },
          include: {
            Rabbit: true,
          },
        });

        const result = cage.filter((i) => Boolean(i.Rabbit.length));

        return result;
      });
    }),
});
