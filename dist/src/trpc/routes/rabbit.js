"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.rabbitRouter = void 0;
const trpc_1 = require("../../trpc");
const zod_1 = require("zod");
const zod_2 = require("../../zod");
<<<<<<< HEAD
const app_1 = require("../../app");
=======
const __1 = require("../..");
>>>>>>> e0abaca9e7145c6ed4bc11f4e0ffb49245fb4e5a
const model = 'rabbit';
exports.rabbitRouter = (0, trpc_1.router)({
    create: trpc_1.publicProcedure
        .input(zod_2._RabbitModel.omit({ id: true, birthDate: true, breedGeo: true }))
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
        return app_1.prisma[model].findMany({});
=======
        return __1.prisma[model].findMany({});
>>>>>>> e0abaca9e7145c6ed4bc11f4e0ffb49245fb4e5a
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
                Cage: true,
                BreedType: true
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
        breedTypeId: zod_1.z.string().uuid().optional(),
        cageId: zod_1.z.string().uuid().optional(),
        status: zod_1.z.string().optional(),
        gender: zod_1.z.enum(["Sire", "Dam"]).optional(),
        name: zod_1.z.string().optional(),
        description: zod_1.z.string().optional(),
        weight: zod_1.z.string().optional(),
    })).mutation(({ input }) => {
        let rabbitId = input.id;
        delete input.id;
<<<<<<< HEAD
        return app_1.prisma[model].update({
=======
        return __1.prisma[model].update({
>>>>>>> e0abaca9e7145c6ed4bc11f4e0ffb49245fb4e5a
            where: {
                id: rabbitId
            },
            data: input
        });
    }),
    putToCage: trpc_1.publicProcedure
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
                id: input.rabbitId
            },
            data: {
                Cage: {
                    connect: {
                        id: input.cageId
                    }
                }
            }
        });
    }),
});
//# sourceMappingURL=rabbit.js.map