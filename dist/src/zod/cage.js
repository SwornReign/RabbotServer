"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CageModel = exports._CageModel = void 0;
const tslib_1 = require("tslib");
const z = tslib_1.__importStar(require("zod"));
const client_1 = require("@prisma/client");
const index_1 = require("./index");
exports._CageModel = z.object({
    id: z.string(),
    name: z.string(),
    description: z.string().nullish(),
    cageType: z.nativeEnum(client_1.CageType),
    AutoFeed: z.boolean().nullish(),
    waterInterval: z.number().int(),
    foodInterval: z.number().int(),
    feedTime: z.string().array(),
    feedCount: z.number().int(),
    waterGpio: z.number().int(),
    foodGpio: z.number().int().array(),
    weightGpio: z.number().int().array(),
    createdAt: z.date(),
    updateAt: z.date(),
});
/**
 * CageModel contains all relations on your model in addition to the scalars
 *
 * NOTE: Lazy required in case of potential circular dependencies within schema
 */
exports.CageModel = z.lazy(() => exports._CageModel.extend({
    Rabbit: index_1.RabbitModel.array(),
    Kitten: index_1.RabbitModel.array(),
}));
//# sourceMappingURL=cage.js.map