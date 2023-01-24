"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.logsRouter = void 0;
const __1 = require("..");
const zod_1 = require("zod");
const app_1 = require("../../app");
const model = 'logs';
exports.logsRouter = (0, __1.router)({
    list: __1.publicProcedure
        .input(zod_1.z.object({
        cageId: zod_1.z.string().uuid(),
        type: zod_1.z.enum(['Feed', 'Water']),
    }))
        .query(({ input: { cageId, type } }) => {
        return app_1.prisma[model].findMany({
            where: {
                cageId,
                type,
            },
        });
    }),
});
//# sourceMappingURL=logs.js.map