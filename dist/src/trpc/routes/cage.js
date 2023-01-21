"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.cageRouter = void 0;
const tslib_1 = require("tslib");
const trpc_1 = require("../../trpc");
const zod_1 = require("zod");
const zod_2 = require("../../zod");
const app_1 = require("../../app");
const node_cron_1 = tslib_1.__importDefault(require("node-cron"));
const funtions_1 = require("../../GPIO/funtions");
const dayjs_1 = tslib_1.__importDefault(require("dayjs"));
const model = 'cage';
let cronFeed = [];
exports.cageRouter = (0, trpc_1.router)({
    create: trpc_1.publicProcedure
        .input(zod_2._CageModel.omit({ id: true, updateAt: true, createdAt: true }))
        .mutation(({ input }) => {
        return app_1.prisma[model].create({
            data: input
        });
    }),
    list: trpc_1.publicProcedure.query(() => {
        return app_1.prisma[model].findMany({
            include: {
                Rabbit: true
            }
        });
    }),
    getOne: trpc_1.publicProcedure.input(zod_1.z.object({
        id: zod_1.z.string().uuid()
    })).query(({ input }) => {
        return app_1.prisma[model].findFirst({
            where: {
                id: input.id
            },
            include: {
                Rabbit: true,
            }
        });
    }),
    delete: trpc_1.publicProcedure
        .input(zod_1.z.object({
        id: zod_1.z.string().uuid()
    })).mutation(({ input }) => {
        return app_1.prisma[model].delete({
            where: {
                id: input.id
            }
        });
    }),
    update: trpc_1.publicProcedure
        .input(zod_1.z.object({
        id: zod_1.z.string().uuid().optional(),
        name: zod_1.z.string().optional(),
        description: zod_1.z.string().optional(),
        cageType: zod_1.z.enum(["Breeder", "Pen"]).optional(),
        AutoFeed: zod_1.z.boolean().optional(),
    })).mutation(async ({ input }) => {
        let cageId = input.id;
        delete input.id;
        const data = await app_1.prisma[model].update({
            where: {
                id: cageId
            },
            data: input
        });
        const { feedTime } = data;
        if (input.AutoFeed && feedTime && feedTime.length) {
            feedTime.forEach((i) => {
                const hour = (0, dayjs_1.default)(i).get('hour');
                const minute = (0, dayjs_1.default)(i).get('minute');
                const c = node_cron_1.default.schedule(`${minute} ${hour} * * *`, async () => {
                    await (0, funtions_1.runMotor)();
                });
                c.start();
                cronFeed.push(c);
            });
        }
        else {
            cronFeed.forEach((i) => {
                i.stop();
            });
        }
        return data;
    }),
    RabbitToCage: trpc_1.publicProcedure
        .input(zod_1.z.object({
        rabbitId: zod_1.z.string().uuid(),
        cageId: zod_1.z.string().uuid(),
    })).mutation(({ input }) => {
        return app_1.prisma[model].update({
            where: {
                id: input.cageId
            },
            data: {
                Rabbit: {
                    connect: {
                        id: input.rabbitId
                    }
                }
            }
        });
    }),
    listCage: trpc_1.publicProcedure
        .input(zod_1.z.object({
        type: zod_1.z.enum(["Breeder", "Pen"])
    }))
        .query(({ input: { type } }) => {
        return app_1.prisma.$transaction(async (ctx) => {
            const cage = await ctx.cage.findMany({
                where: {
                    cageType: type
                },
                include: {
                    Rabbit: true
                }
            });
            const result = cage.filter((i) => Boolean(i.Rabbit.length));
            return result;
        });
    }),
});
//# sourceMappingURL=cage.js.map