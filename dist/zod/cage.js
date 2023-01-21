import * as z from "zod";
import { CageType } from "@prisma/client";
import { RabbitModel } from "./index";
export var _CageModel = z.object({
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
    updateAt: z.date()
});
/**
 * CageModel contains all relations on your model in addition to the scalars
 *
 * NOTE: Lazy required in case of potential circular dependencies within schema
 */ export var CageModel = z.lazy(function() {
    return _CageModel.extend({
        Rabbit: RabbitModel.array(),
        Kitten: RabbitModel.array()
    });
});

//# sourceMappingURL=cage.js.map