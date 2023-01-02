import * as z from "zod"
import { CompleteRabbit, RabbitModel } from "./index"

export const _BreedTypeModel = z.object({
  id: z.string(),
  name: z.string(),
  createdAt: z.date(),
  updateAt: z.date(),
})

export interface CompleteBreedType extends z.infer<typeof _BreedTypeModel> {
  Rabbit: CompleteRabbit[]
}

/**
 * BreedTypeModel contains all relations on your model in addition to the scalars
 *
 * NOTE: Lazy required in case of potential circular dependencies within schema
 */
export const BreedTypeModel: z.ZodSchema<CompleteBreedType> = z.lazy(() => _BreedTypeModel.extend({
  Rabbit: RabbitModel.array(),
}))
