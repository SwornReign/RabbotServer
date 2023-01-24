"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.gpioRouter = void 0;
const __1 = require("..");
const zod_1 = require("zod");
const app_1 = require("../../app");
const funtions_1 = require("../../GPIO/funtions");
const model = 'logs';
exports.gpioRouter = (0, __1.router)({
    feed: __1.publicProcedure
        .input(zod_1.z.object({
        cageId: zod_1.z.string().uuid(),
    }))
        .mutation(async ({ input: { cageId } }) => {
        console.log('GPIO Feed');
        try {
            await (0, funtions_1.runMotor)();
            await app_1.prisma[model].create({
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
        }
        catch (error) {
            return {
                ok: false,
            };
        }
    }),
    water: __1.publicProcedure
        .input(zod_1.z.object({
        interval: zod_1.z.number().optional().default(2000),
        cageId: zod_1.z.string().uuid(),
    }))
        .mutation(async ({ input: { interval, cageId } }) => {
        console.log('GPIO Water');
        try {
            await (0, funtions_1.runWater)(interval);
            await app_1.prisma[model].create({
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
        }
        catch (error) {
            return {
                ok: false,
            };
        }
    }),
    weight: __1.publicProcedure.mutation(async () => {
        console.log('GPIO Weight');
        try {
            const value = await (0, funtions_1.runWeight)();
            return {
                ok: true,
                weight: value,
            };
        }
        catch (error) {
            return {
                ok: false,
                weight: 0,
            };
        }
    }),
    autoFeed: __1.publicProcedure
        .input(zod_1.z.object({
        hour: zod_1.z.string().optional(),
        min: zod_1.z.string().optional(),
        enable: zod_1.z.boolean(),
    }))
        .mutation(async ({ input: { enable } }) => {
        try {
            return {
                ok: true,
            };
        }
        catch (error) {
            return {
                ok: false,
            };
        }
    }),
});
//# sourceMappingURL=gpio.js.map