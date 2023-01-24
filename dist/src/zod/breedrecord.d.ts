import * as z from 'zod';
import { CompleteRabbit } from './index';
export declare const _BreedRecordModel: z.ZodObject<{
    id: z.ZodString;
    breedDate: z.ZodDate;
    description: z.ZodNullable<z.ZodOptional<z.ZodString>>;
    sireId: z.ZodNullable<z.ZodOptional<z.ZodString>>;
    damId: z.ZodNullable<z.ZodOptional<z.ZodString>>;
    damWeight: z.ZodString;
    testDate: z.ZodNullable<z.ZodOptional<z.ZodDate>>;
    expectedKindleDate: z.ZodNullable<z.ZodOptional<z.ZodDate>>;
    nestBoxDate: z.ZodNullable<z.ZodOptional<z.ZodDate>>;
    kindleDate: z.ZodNullable<z.ZodOptional<z.ZodDate>>;
    noKits: z.ZodNullable<z.ZodOptional<z.ZodBoolean>>;
    weanDate: z.ZodNullable<z.ZodOptional<z.ZodDate>>;
    noWean: z.ZodNullable<z.ZodOptional<z.ZodBoolean>>;
    weightMF: z.ZodNullable<z.ZodOptional<z.ZodString>>;
    createdAt: z.ZodDate;
    updateAt: z.ZodDate;
}, "strip", z.ZodTypeAny, {
    id?: string;
    createdAt?: Date;
    updateAt?: Date;
    breedDate?: Date;
    expectedKindleDate?: Date;
    nestBoxDate?: Date;
    kindleDate?: Date;
    weanDate?: Date;
    damWeight?: string;
    description?: string;
    testDate?: Date;
    noKits?: boolean;
    noWean?: boolean;
    weightMF?: string;
    sireId?: string;
    damId?: string;
}, {
    id?: string;
    createdAt?: Date;
    updateAt?: Date;
    breedDate?: Date;
    expectedKindleDate?: Date;
    nestBoxDate?: Date;
    kindleDate?: Date;
    weanDate?: Date;
    damWeight?: string;
    description?: string;
    testDate?: Date;
    noKits?: boolean;
    noWean?: boolean;
    weightMF?: string;
    sireId?: string;
    damId?: string;
}>;
export interface CompleteBreedRecord extends z.infer<typeof _BreedRecordModel> {
    Sire?: CompleteRabbit | null;
    Dam?: CompleteRabbit | null;
}
/**
 * BreedRecordModel contains all relations on your model in addition to the scalars
 *
 * NOTE: Lazy required in case of potential circular dependencies within schema
 */
