import * as z from "zod";
import { RabbitGender } from "@prisma/client";
import { BreedTypeModel, CageModel, BreedRecordModel } from "./index";
var literalSchema = z.union([
    z.string(),
    z.number(),
    z.boolean()
]);
var jsonSchema = z.lazy(function() {
    return z.union([
        literalSchema,
        z.array(jsonSchema),
        z.record(jsonSchema)
    ]);
});
export var _RabbitModel = z.object({
    id: z.string(),
    name: z.string(),
    weight: z.string(),
    gender: z.nativeEnum(RabbitGender),
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
    statusDate: z.date().nullish()
});
/**
 * RabbitModel contains all relations on your model in addition to the scalars
 *
 * NOTE: Lazy required in case of potential circular dependencies within schema
 */ export var RabbitModel = z.lazy(function() {
    return _RabbitModel.extend({
        BreedType: BreedTypeModel,
        Cage: CageModel.nullish(),
        Mother: RabbitModel.nullish(),
        Father: RabbitModel.nullish(),
        RabbitMother: RabbitModel.array(),
        RabbitFather: RabbitModel.array(),
        SireBreedRecord: BreedRecordModel.array(),
        DamBreedRecord: BreedRecordModel.array(),
        CageKiiten: CageModel.nullish()
    });
});

//# sourceMappingURL=rabbit.js.map