"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.rabbitRouter = void 0;
const trpc_1 = require("../../trpc");
const zod_1 = require("zod");
const zod_2 = require("../../zod");
const app_1 = require("../../app");
const model = 'rabbit';
exports.rabbitRouter = (0, trpc_1.router)({
    create: trpc_1.publicProcedure
        .input(zod_2._RabbitModel.omit({
        id: true,
        createdAt: true,
        updateAt: true,
        fatherId: true,
        cageId: true,
        kittenCageId: true,
        motherId: true,
        breedGeo: true,
        lastBreedDate: true,
        BreedType: true,
        birthDate: true,
    }))
        .mutation(({ input }) => {
        return app_1.prisma[model].create({
            data: {
                name: input.name,
                gender: input.gender,
                weight: input.weight,
                breedTypeId: input.breedTypeId,
            },
        });
    }),
    list: trpc_1.publicProcedure.query(() => {
        return app_1.prisma[model].findMany({});
    }),
    getOne: trpc_1.publicProcedure
        .input(zod_1.z.object({
        id: zod_1.z.string().uuid(),
    }))
        .query(({ input }) => {
        return app_1.prisma[model].findFirst({
            where: {
                id: input.id,
            },
            include: {
                Cage: true,
                BreedType: true,
            },
        });
    }),
    delete: trpc_1.publicProcedure
        .input(zod_1.z.object({
        id: zod_1.z.string().uuid(),
    }))
        .mutation(({ input }) => {
        return app_1.prisma[model].delete({
            where: {
                id: input.id,
            },
        });
    }),
    update: trpc_1.publicProcedure
        .input(zod_1.z.object({
        id: zod_1.z.string().uuid().optional(),
        breedTypeId: zod_1.z.string().uuid().optional(),
        cageId: zod_1.z.string().uuid().optional(),
        status: zod_1.z.string().optional(),
        gender: zod_1.z.enum(['Sire', 'Dam']).optional(),
        name: zod_1.z.string().optional(),
        description: zod_1.z.string().optional(),
        weight: zod_1.z.string().optional(),
    }))
        .mutation(({ input }) => {
        let rabbitId = input.id;
        delete input.id;
        return app_1.prisma[model].update({
            where: {
                id: rabbitId,
            },
            data: input,
        });
    }),
    putToCage: trpc_1.publicProcedure
        .input(zod_1.z.object({
        rabbitId: zod_1.z.string().uuid(),
        cageId: zod_1.z.string().uuid(),
    }))
        .mutation(({ input }) => {
        return app_1.prisma[model].update({
            where: {
                id: input.rabbitId,
            },
            data: {
                Cage: {
                    connect: {
                        id: input.cageId,
                    },
                },
            },
        });
    }),
});
//# sourceMappingURL=rabbit.js.map