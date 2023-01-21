"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.breedRecordRouter = void 0;
const tslib_1 = require("tslib");
const __1 = require("..");
const zod_1 = require("zod");
const zod_2 = require("../../zod");
<<<<<<< HEAD
const app_1 = require("../../app");
=======
const __2 = require("../..");
>>>>>>> e0abaca9e7145c6ed4bc11f4e0ffb49245fb4e5a
const dayjs_1 = tslib_1.__importDefault(require("dayjs"));
const model = 'breedRecord';
exports.breedRecordRouter = (0, __1.router)({
    create: __1.publicProcedure
        .input(zod_1.z.object({
        breedDate: zod_1.z.string(),
        expectedKindleDate: zod_1.z.string().optional(),
        nestBoxDate: zod_1.z.string().optional(),
        kindleDate: zod_1.z.string().optional(),
        weanDate: zod_1.z.string().optional(),
        damWeight: zod_1.z.string(),
        description: zod_1.z.string().optional()
    }))
        .mutation(({ input }) => {
<<<<<<< HEAD
        return app_1.prisma[model].create({
=======
        return __2.prisma[model].create({
>>>>>>> e0abaca9e7145c6ed4bc11f4e0ffb49245fb4e5a
            data: {
                breedDate: (0, dayjs_1.default)(input.breedDate).toDate(),
                expectedKindleDate: (0, dayjs_1.default)(input.expectedKindleDate).toDate(),
                nestBoxDate: (0, dayjs_1.default)(input.nestBoxDate).toDate(),
                kindleDate: (0, dayjs_1.default)(input.kindleDate).toDate(),
                weanDate: (0, dayjs_1.default)(input.weanDate).toDate(),
                damWeight: input.damWeight,
                description: input.description
            }
        });
    }),
    list: __1.publicProcedure.query(() => {
<<<<<<< HEAD
        return app_1.prisma[model].findMany({});
=======
        return __2.prisma[model].findMany({});
>>>>>>> e0abaca9e7145c6ed4bc11f4e0ffb49245fb4e5a
    }),
    getOne: __1.publicProcedure.input(zod_1.z.object({
        id: zod_1.z.string().uuid()
    })).query(({ input }) => {
<<<<<<< HEAD
        return app_1.prisma[model].findFirst({
=======
        return __2.prisma[model].findFirst({
>>>>>>> e0abaca9e7145c6ed4bc11f4e0ffb49245fb4e5a
            where: {
                id: input.id
            },
        });
    }),
    delete: __1.publicProcedure
        .input(zod_1.z.object({
        id: zod_1.z.string().uuid()
    })).mutation(({ input }) => {
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
        .input(zod_2._BreedRecordModel).mutation(({ input }) => {
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
});
//# sourceMappingURL=breedRecord.js.map