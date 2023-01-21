"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.breedTypeRouter = void 0;
const __1 = require("..");
const zod_1 = require("zod");
const zod_2 = require("../../zod");
<<<<<<< HEAD
const app_1 = require("../../app");
=======
const __2 = require("../..");
>>>>>>> e0abaca9e7145c6ed4bc11f4e0ffb49245fb4e5a
const model = 'breedType';
exports.breedTypeRouter = (0, __1.router)({
    create: __1.publicProcedure
        .input(zod_2._BreedTypeModel.omit({ id: true }))
        .mutation(({ input }) => {
<<<<<<< HEAD
        return app_1.prisma[model].create({
=======
        return __2.prisma[model].create({
>>>>>>> e0abaca9e7145c6ed4bc11f4e0ffb49245fb4e5a
            data: input
        });
    }),
    list: __1.publicProcedure.query(() => {
<<<<<<< HEAD
        return app_1.prisma[model].findMany();
=======
        return __2.prisma[model].findMany();
>>>>>>> e0abaca9e7145c6ed4bc11f4e0ffb49245fb4e5a
    }),
    delete: __1.publicProcedure
        .input(zod_1.z.object({
        id: zod_1.z.string().uuid()
    }))
        .mutation(({ input }) => {
<<<<<<< HEAD
        return app_1.prisma[model].delete({
=======
        return __2.prisma[model].delete({
>>>>>>> e0abaca9e7145c6ed4bc11f4e0ffb49245fb4e5a
            where: {
                id: input.id
            }
        });
    }),
    update: __1.publicProcedure
        .input(zod_2._BreedTypeModel).mutation(({ input }) => {
<<<<<<< HEAD
        return app_1.prisma[model].update({
=======
        return __2.prisma[model].update({
>>>>>>> e0abaca9e7145c6ed4bc11f4e0ffb49245fb4e5a
            where: {
                id: input.id
            },
            data: input
        });
    }),
    createFirst: __1.publicProcedure
        .mutation(({ input }) => {
<<<<<<< HEAD
        return app_1.prisma[model].create({
=======
        return __2.prisma[model].create({
>>>>>>> e0abaca9e7145c6ed4bc11f4e0ffb49245fb4e5a
            data: {
                name: 'Palomino',
            }
        });
    }),
});
//# sourceMappingURL=breedType.js.map