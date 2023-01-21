import { router, publicProcedure } from "..";
import { z } from "zod";
import { _BreedTypeModel } from "../../zod";
<<<<<<< HEAD
import { prisma } from "../../app";
=======
import { prisma } from "../..";
>>>>>>> e0abaca9e7145c6ed4bc11f4e0ffb49245fb4e5a
var model = "breedType";
export var breedTypeRouter = router({
    create: publicProcedure.input(_BreedTypeModel.omit({
        id: true
    })).mutation(function(param) {
        var input = param.input;
        return prisma[model].create({
            data: input
        });
    }),
    list: publicProcedure.query(function() {
        return prisma[model].findMany();
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
    update: publicProcedure.input(_BreedTypeModel).mutation(function(param) {
        var input = param.input;
        return prisma[model].update({
            where: {
                id: input.id
            },
            data: input
        });
    }),
    createFirst: publicProcedure.mutation(function(param) {
        var input = param.input;
        return prisma[model].create({
            data: {
                name: "Palomino"
            }
        });
    })
});

//# sourceMappingURL=breedType.js.map