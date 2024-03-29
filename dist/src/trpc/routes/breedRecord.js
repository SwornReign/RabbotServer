"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.breedRecordRouter = void 0;
const tslib_1 = require("tslib");
const __1 = require("..");
const zod_1 = require("zod");
const app_1 = require("../../app");
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
        description: zod_1.z.string().optional(),
    }))
        .mutation(({ input }) => {
        return app_1.prisma[model].create({
            data: {
                breedDate: (0, dayjs_1.default)(input.breedDate).toDate(),
                expectedKindleDate: (0, dayjs_1.default)(input.expectedKindleDate).toDate(),
                nestBoxDate: (0, dayjs_1.default)(input.nestBoxDate).toDate(),
                kindleDate: (0, dayjs_1.default)(input.kindleDate).toDate(),
                weanDate: (0, dayjs_1.default)(input.weanDate).toDate(),
                damWeight: input.damWeight,
                description: input.description,
            },
        });
    }),
    list: __1.publicProcedure.query(() => {
        return app_1.prisma[model].findMany({});
    }),
    getOne: __1.publicProcedure
        .input(zod_1.z.object({
        id: zod_1.z.string().uuid(),
    }))
        .query(({ input }) => {
        return app_1.prisma[model].findFirst({
            where: {
                id: input.id,
            },
        });
    }),
    delete: __1.publicProcedure
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
    update: __1.publicProcedure
        .input(zod_1.z.object({
        id: zod_1.z.string().uuid().optional(),
        breedDate: zod_1.z.date().optional(),
        expectedKindleDate: zod_1.z.date().optional(),
        nestBoxDate: zod_1.z.date().optional(),
        kindleDate: zod_1.z.date().optional(),
        weanDate: zod_1.z.date().optional(),
        description: zod_1.z.string().optional(),
    }))
        .mutation(({ input }) => {
        let recordId = input.id;
        delete input.id;
        return app_1.prisma[model].update({
            where: {
                id: recordId,
            },
            data: input,
        });
    }),
});
//# sourceMappingURL=breedRecord.js.map