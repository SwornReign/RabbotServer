import * as z from "zod"
import { CompleteRabbit, RabbitModel } from "./index"

export const _BreedRecordModel = z.object({
  id: z.string(),
  breedDate: z.date(),
  sireId: z.string(),
  damId: z.string(),
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
})

export interface CompleteBreedRecord extends z.infer<typeof _BreedRecordModel> {
  Sire: CompleteRabbit
  Dam: CompleteRabbit
}

/**
 * BreedRecordModel contains all relations on your model in addition to the scalars
 *
 * NOTE: Lazy required in case of potential circular dependencies within schema
 */
export const BreedRecordModel: z.ZodSchema<CompleteBreedRecord> = z.lazy(() => _BreedRecordModel.extend({
  Sire: RabbitModel,
  Dam: RabbitModel,
}))
