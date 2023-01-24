"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports._RabbitModel = void 0;
const tslib_1 = require("tslib");
const z = tslib_1.__importStar(require("zod"));
const client_1 = require("@prisma/client");
const literalSchema = z.union([z.string(), z.number(), z.boolean()]);
const jsonSchema = z.lazy(() => z.union([literalSchema, z.array(jsonSchema), z.record(jsonSchema)]));
exports._RabbitModel = z.object({
    id: z.string(),
    name: z.string(),
    weight: z.string(),
    gender: z.nativeEnum(client_1.RabbitGender),
    description: z.string().nullish(),
    breedTypeId: z.string(),
    birthDate: z.date(),
    deceaseDate: z.date().nullish(),
    lastBreedDate: z.date().nullish(),
    breedGeo: jsonSchema,
    cageId: z.string().nullish(),
    motherId: z.string().nullish(),
    fatherId: z.string().nullish(),
    kittenCageId: z.string().nullish(),
    status: z.string().nullish(),
    statusDate: z.date().nullish(),
});
/**
 * RabbitModel contains all relations on your model in addition to the scalars
 *
 * NOTE: Lazy required in case of potential circular dependencies within schema
 */
// export const RabbitModel: z.ZodSchema<CompleteRabbit> = z.lazy(() => _RabbitModel.extend({
//   BreedType: BreedTypeModel,
//   Cage: CageModel.nullish(),
//   Mother: RabbitModel.nullish(),
//   Father: RabbitModel.nullish(),
//   RabbitMother: RabbitModel.array(),
//   RabbitFather: RabbitModel.array(),
//   SireBreedRecord: BreedRecordModel.array(),
//   DamBreedRecord: BreedRecordModel.array(),
//   CageKiiten: CageModel.nullish(),
// }))
//# sourceMappingURL=rabbit.js.map