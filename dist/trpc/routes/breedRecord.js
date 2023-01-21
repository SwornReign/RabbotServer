import { router, publicProcedure } from "..";
import { z } from "zod";
import { _BreedRecordModel } from "../../zod";
<<<<<<< HEAD
import { prisma } from "../../app";
=======
import { prisma } from "../..";
>>>>>>> e0abaca9e7145c6ed4bc11f4e0ffb49245fb4e5a
import dayjs from "dayjs";
var model = "breedRecord";
export var breedRecordRouter = router({
    create: publicProcedure.input(z.object({
        breedDate: z.string(),
        expectedKindleDate: z.string().optional(),
        nestBoxDate: z.string().optional(),
        kindleDate: z.string().optional(),
        weanDate: z.string().optional(),
        damWeight: z.string(),
        description: z.string().optional()
    })).mutation(function(param) {
        var input = param.input;
        return prisma[model].create({
            data: {
                breedDate: dayjs(input.breedDate).toDate(),
                expectedKindleDate: dayjs(input.expectedKindleDate).toDate(),
                nestBoxDate: dayjs(input.nestBoxDate).toDate(),
                kindleDate: dayjs(input.kindleDate).toDate(),
                weanDate: dayjs(input.weanDate).toDate(),
                damWeight: input.damWeight,
                description: input.description
            }
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
    update: publicProcedure.input(_BreedRecordModel).mutation(function(param) {
        var input = param.input;
        return prisma[model].update({
            where: {
                id: input.id
            },
            data: input
        });
    })
});

//# sourceMappingURL=breedRecord.js.map