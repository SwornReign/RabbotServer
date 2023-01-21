import * as z from "zod";
import { RabbitModel } from "./index";
export var _BreedTypeModel = z.object({
    id: z.string(),
    name: z.string(),
    createdAt: z.date(),
    updateAt: z.date()
});
/**
 * BreedTypeModel contains all relations on your model in addition to the scalars
 *
 * NOTE: Lazy required in case of potential circular dependencies within schema
 */ export var BreedTypeModel = z.lazy(function() {
    return _BreedTypeModel.extend({
        Rabbit: RabbitModel.array()
    });
});

//# sourceMappingURL=breedtype.js.map