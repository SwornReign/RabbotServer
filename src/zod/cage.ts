import * as z from 'zod';
import { CageType } from '@prisma/client';
import { CompleteRabbit } from './index';

export const _CageModel = z.object({
  id: z.string(),
  name: z.string(),
  description: z.string().nullish(),
  cageType: z.nativeEnum(CageType),
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

export interface CompleteCage extends z.infer<typeof _CageModel> {
  Rabbit: CompleteRabbit[];
  Kitten: CompleteRabbit[];
}

// /**
//  * CageModel contains all relations on your model in addition to the scalars
//  *
//  * NOTE: Lazy required in case of potential circular dependencies within schema
//  */
// export const CageModel: z.ZodSchema<CompleteCage> = z.lazy(() =>
//   _CageModel.extend({
//     Rabbit: RabbitModel.array(),
//     Kitten: RabbitModel.array(),
//   }),
// );
