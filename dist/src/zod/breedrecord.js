"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports._BreedRecordModel = void 0;
const tslib_1 = require("tslib");
const z = tslib_1.__importStar(require("zod"));
exports._BreedRecordModel = z.object({
    id: z.string(),
    breedDate: z.date(),
    description: z.string().nullish(),
    sireId: z.string().nullish(),
    damId: z.string().nullish(),
    damWeight: z.string(),
    testDate: z.date().nullish(),
    expectedKindleDate: z.date().nullish(),
    nestBoxDate: z.date().nullish(),
    kindleDate: z.date().nullish(),
    noKits: z.boolean().nullish(),
    weanDate: z.date().nullish(),
    noWean: z.boolean().nullish(),
    weightMF: z.string().nullish(),
    createdAt: z.date(),
    updateAt: z.date(),
});
/**
 * BreedRecordModel contains all relations on your model in addition to the scalars
 *
 * NOTE: Lazy required in case of potential circular dependencies within schema
 */
// export const BreedRecordModel: z.ZodSchema<CompleteBreedRecord> = z.lazy(() => _BreedRecordModel.extend({
//   Sire: RabbitModel.nullish(),
//   Dam: RabbitModel.nullish(),
// }))
//# sourceMappingURL=breedrecord.js.map