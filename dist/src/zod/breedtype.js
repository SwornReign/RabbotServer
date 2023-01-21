"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports._BreedTypeModel = void 0;
const tslib_1 = require("tslib");
const z = tslib_1.__importStar(require("zod"));
exports._BreedTypeModel = z.object({
    id: z.string(),
    name: z.string(),
    createdAt: z.date(),
    updateAt: z.date(),
});
/**
 * BreedTypeModel contains all relations on your model in addition to the scalars
 *
 * NOTE: Lazy required in case of potential circular dependencies within schema
 */
// export const BreedTypeModel: z.ZodSchema<CompleteBreedType> = z.lazy(() =>
//   _BreedTypeModel.extend({
//     Rabbit: RabbitModel.array(),
//   }),
// );
//# sourceMappingURL=breedtype.js.map