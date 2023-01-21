"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.cageRouter = void 0;
const tslib_1 = require("tslib");
const trpc_1 = require("../../trpc");
const zod_1 = require("zod");
const zod_2 = require("../../zod");
<<<<<<< HEAD
const app_1 = require("../../app");
=======
const __1 = require("../..");
>>>>>>> e0abaca9e7145c6ed4bc11f4e0ffb49245fb4e5a
const node_cron_1 = tslib_1.__importDefault(require("node-cron"));
const funtions_1 = require("../../GPIO/funtions");
const dayjs_1 = tslib_1.__importDefault(require("dayjs"));
const model = 'cage';
let cronFeed = [];
exports.cageRouter = (0, trpc_1.router)({
    create: trpc_1.publicProcedure
        .input(zod_2._CageModel.omit({ id: true, updateAt: true, createdAt: true }))
        .mutation(({ input }) => {
<<<<<<< HEAD
        return app_1.prisma[model].create({
=======
        return __1.prisma[model].create({
>>>>>>> e0abaca9e7145c6ed4bc11f4e0ffb49245fb4e5a
            data: input
        });
    }),
    list: trpc_1.publicProcedure.query(() => {
<<<<<<< HEAD
        return app_1.prisma[model].findMany({
=======
        return __1.prisma[model].findMany({
>>>>>>> e0abaca9e7145c6ed4bc11f4e0ffb49245fb4e5a
            include: {
                Rabbit: true
            }
        });
    }),
    getOne: trpc_1.publicProcedure.input(zod_1.z.object({
        id: zod_1.z.string().uuid()
    })).query(({ input }) => {
<<<<<<< HEAD
        return app_1.prisma[model].findFirst({
=======
        return __1.prisma[model].findFirst({
>>>>>>> e0abaca9e7145c6ed4bc11f4e0ffb49245fb4e5a
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
<<<<<<< HEAD
        return app_1.prisma[model].delete({
=======
        return __1.prisma[model].delete({
>>>>>>> e0abaca9e7145c6ed4bc11f4e0ffb49245fb4e5a
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
<<<<<<< HEAD
        const data = await app_1.prisma[model].update({
=======
        const data = await __1.prisma[model].update({
>>>>>>> e0abaca9e7145c6ed4bc11f4e0ffb49245fb4e5a
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
<<<<<<< HEAD
        return app_1.prisma[model].update({
=======
        return __1.prisma[model].update({
>>>>>>> e0abaca9e7145c6ed4bc11f4e0ffb49245fb4e5a
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
<<<<<<< HEAD
        return app_1.prisma.$transaction(async (ctx) => {
=======
        return __1.prisma.$transaction(async (ctx) => {
>>>>>>> e0abaca9e7145c6ed4bc11f4e0ffb49245fb4e5a
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