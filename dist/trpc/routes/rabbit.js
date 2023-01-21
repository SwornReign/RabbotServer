import { router, publicProcedure } from "../../trpc";
import { z } from "zod";
import { _RabbitModel } from "../../zod";
import { prisma } from "../..";
var model = "rabbit";
export var rabbitRouter = router({
    create: publicProcedure.input(_RabbitModel.omit({
        id: true,
        birthDate: true,
        breedGeo: true
    })).mutation(function(param) {
        var input = param.input;
        return prisma[model].create({
            data: input
        });
    }),
    list: publicProcedure.query(function() {
        return prisma[model].findMany({});
    }),
    getOne: publicProcedure.input(z.object({
        id: z.string().uuid()
    })).query(function(param) {
        var input = param.input;
        return prisma[model].findFirst({
            where: {
                id: input.id
            },
            include: {
                Cage: true,
                BreedType: true
            }
        });
    }),
    delete: publicProcedure.input(z.object({
        id: z.string().uuid()
    })).mutation(function(param) {
        var input = param.input;
        return prisma[model].delete({
            where: {
                id: input.id
            }
        });
    }),
    update: publicProcedure.input(z.object({
        id: z.string().uuid().optional(),
        breedTypeId: z.string().uuid().optional(),
        cageId: z.string().uuid().optional(),
        status: z.string().optional(),
        gender: z.enum([
            "Sire",
            "Dam"
        ]).optional(),
        name: z.string().optional(),
        description: z.string().optional(),
        weight: z.string().optional()
    })).mutation(function(param) {
        var input = param.input;
        var rabbitId = input.id;
        delete input.id;
        return prisma[model].update({
            where: {
                id: rabbitId
            },
            data: input
        });
    }),
    putToCage: publicProcedure.input(z.object({
        rabbitId: z.string().uuid(),
        cageId: z.string().uuid()
    })).mutation(function(param) {
        var input = param.input;
        return prisma[model].update({
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
    })
});

//# sourceMappingURL=rabbit.js.map