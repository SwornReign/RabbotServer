import * as z from 'zod';
import { CompleteCage } from './index';
type Literal = boolean | number | string;
type Json = Literal | {
    [key: string]: Json;
} | Json[];
export declare const _RabbitModel: z.ZodObject<{
    id: z.ZodString;
    name: z.ZodString;
    weight: z.ZodString;
    gender: z.ZodNativeEnum<{
        Sire: "Sire";
        Dam: "Dam";
    }>;
    description: z.ZodNullable<z.ZodOptional<z.ZodString>>;
    breedTypeId: z.ZodString;
    birthDate: z.ZodDate;
    deceaseDate: z.ZodNullable<z.ZodOptional<z.ZodDate>>;
    lastBreedDate: z.ZodNullable<z.ZodOptional<z.ZodDate>>;
    breedGeo: z.ZodType<Json, z.ZodTypeDef, Json>;
    cageId: z.ZodNullable<z.ZodOptional<z.ZodString>>;
    motherId: z.ZodNullable<z.ZodOptional<z.ZodString>>;
    fatherId: z.ZodNullable<z.ZodOptional<z.ZodString>>;
    kittenCageId: z.ZodNullable<z.ZodOptional<z.ZodString>>;
    status: z.ZodNullable<z.ZodOptional<z.ZodString>>;
    statusDate: z.ZodNullable<z.ZodOptional<z.ZodDate>>;
}, "strip", z.ZodTypeAny, {
    id?: string;
    name?: string;
    weight?: string;
    description?: string;
    status?: string;
    cageId?: string;
    gender?: "Sire" | "Dam";
    birthDate?: Date;
    deceaseDate?: Date;
    lastBreedDate?: Date;
    breedGeo?: Json;
    statusDate?: Date;
    breedTypeId?: string;
    motherId?: string;
    fatherId?: string;
    kittenCageId?: string;
}, {
    id?: string;
    name?: string;
    weight?: string;
    description?: string;
    status?: string;
    cageId?: string;
    gender?: "Sire" | "Dam";
    birthDate?: Date;
    deceaseDate?: Date;
    lastBreedDate?: Date;
    breedGeo?: Json;
    statusDate?: Date;
    breedTypeId?: string;
    motherId?: string;
    fatherId?: string;
    kittenCageId?: string;
}>;
export interface CompleteRabbit extends z.infer<typeof _RabbitModel> {
    Cage?: CompleteCage | null;
    Mother?: CompleteRabbit | null;
    Father?: CompleteRabbit | null;
    RabbitMother: CompleteRabbit[];
    RabbitFather: CompleteRabbit[];
    CageKiiten?: CompleteCage | null;
}
export {};
/**
 * RabbitModel contains all relations on your model in addition to the scalars
 *
 * NOTE: Lazy required in case of potential circular dependencies within schema
 */
