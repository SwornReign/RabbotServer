import * as z from 'zod';
import { CompleteRabbit } from './index';
export declare const _BreedTypeModel: z.ZodObject<{
    id: z.ZodString;
    name: z.ZodString;
    createdAt: z.ZodDate;
    updateAt: z.ZodDate;
}, "strip", z.ZodTypeAny, {
    id?: string;
    name?: string;
    createdAt?: Date;
    updateAt?: Date;
}, {
    id?: string;
    name?: string;
    createdAt?: Date;
    updateAt?: Date;
}>;
export interface CompleteBreedType extends z.infer<typeof _BreedTypeModel> {
    Rabbit: CompleteRabbit[];
}
/**
 * BreedTypeModel contains all relations on your model in addition to the scalars
 *
 * NOTE: Lazy required in case of potential circular dependencies within schema
 */
