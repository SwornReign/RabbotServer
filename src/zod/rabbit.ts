import * as z from "zod"
import { RabbitGender } from "@prisma/client"
import { CompleteBreedType, BreedTypeModel, CompleteCage, CageModel, CompleteBreedRecord, BreedRecordModel } from "./index"

// Helper schema for JSON fields
type Literal = boolean | number | string
type Json = Literal | { [key: string]: Json } | Json[]
const literalSchema = z.union([z.string(), z.number(), z.boolean()])
const jsonSchema: z.ZodSchema<Json> = z.lazy(() => z.union([literalSchema, z.array(jsonSchema), z.record(jsonSchema)]))

export const _RabbitModel = z.object({
  id: z.string(),
  name: z.string(),
  weight: z.string(),
  gender: z.nativeEnum(RabbitGender),
  breedTypeId: z.string(),
  birthDate: z.date(),
  deceaseDate: z.date().optional(),
  lastBreedDate: z.date().optional(),
  breedGeo: jsonSchema.optional(),
  cageId: z.string().optional(),
  motherId: z.string().optional(),
  fatherId: z.string().optional(),
  kittenCageId: z.string().optional(),
  status: z.string().optional(),
  statusDate: z.date().optional(),
})

export interface CompleteRabbit extends z.infer<typeof _RabbitModel> {
  BreedType: CompleteBreedType
  Cage?: CompleteCage | null
  Mother?: CompleteRabbit | null
  Father?: CompleteRabbit | null
  RabbitMother?: CompleteRabbit | null
  RabbitFather?: CompleteRabbit | null
  SireBreedRecord: CompleteBreedRecord[]
  DamBreedRecord: CompleteBreedRecord[]
  CageKiiten?: CompleteCage | null
}

/**
 * RabbitModel contains all relations on your model in addition to the scalars
 *
 * NOTE: Lazy required in case of potential circular dependencies within schema
 */
export const RabbitModel: z.ZodSchema<CompleteRabbit> = z.lazy(() => _RabbitModel.extend({
  BreedType: BreedTypeModel,
  Cage: CageModel.nullish(),
  Mother: RabbitModel.nullish(),
  Father: RabbitModel.nullish(),
  RabbitMother: RabbitModel.nullish(),
  RabbitFather: RabbitModel.nullish(),
  SireBreedRecord: BreedRecordModel.array(),
  DamBreedRecord: BreedRecordModel.array(),
  CageKiiten: CageModel.nullish(),
}))
