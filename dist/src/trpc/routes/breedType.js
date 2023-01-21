"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.breedTypeRouter = void 0;
const __1 = require("..");
const zod_1 = require("zod");
const zod_2 = require("../../zod");
const __2 = require("../..");
const model = 'breedType';
exports.breedTypeRouter = (0, __1.router)({
    create: __1.publicProcedure
        .input(zod_2._BreedTypeModel.omit({ id: true }))
        .mutation(({ input }) => {
        return __2.prisma[model].create({
            data: input
        });
    }),
    list: __1.publicProcedure.query(() => {
        return __2.prisma[model].findMany();
    }),
    delete: __1.publicProcedure
        .input(zod_1.z.object({
        id: zod_1.z.string().uuid()
    }))
        .mutation(({ input }) => {
        return __2.prisma[model].delete({
            where: {
                id: input.id
            }
        });
    }),
    update: __1.publicProcedure
        .input(zod_2._BreedTypeModel).mutation(({ input }) => {
        return __2.prisma[model].update({
            where: {
                id: input.id
            },
            data: input
        });
    }),
    createFirst: __1.publicProcedure
        .mutation(({ input }) => {
        return __2.prisma[model].create({
            data: {
                name: 'Palomino',
            }
        });
    }),
});
//# sourceMappingURL=breedType.js.map