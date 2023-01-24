import * as z from 'zod';
import { CompleteRabbit } from './index';
export declare const _CageModel: z.ZodObject<{
    id: z.ZodString;
    name: z.ZodString;
    description: z.ZodNullable<z.ZodOptional<z.ZodString>>;
    cageType: z.ZodNativeEnum<{
        Breeder: "Breeder";
        Pen: "Pen";
    }>;
    AutoFeed: z.ZodNullable<z.ZodOptional<z.ZodBoolean>>;
    waterInterval: z.ZodNumber;
    foodInterval: z.ZodNumber;
    feedTime: z.ZodArray<z.ZodString, "many">;
    feedCount: z.ZodNumber;
    waterGpio: z.ZodNumber;
    foodGpio: z.ZodArray<z.ZodNumber, "many">;
    weightGpio: z.ZodArray<z.ZodNumber, "many">;
    createdAt: z.ZodDate;
    updateAt: z.ZodDate;
}, "strip", z.ZodTypeAny, {
    id?: string;
    name?: string;
    description?: string;
    cageType?: "Breeder" | "Pen";
    AutoFeed?: boolean;
    waterInterval?: number;
    foodInterval?: number;
    feedTime?: string[];
    feedCount?: number;
    waterGpio?: number;
    foodGpio?: number[];
    weightGpio?: number[];
    createdAt?: Date;
    updateAt?: Date;
}, {
    id?: string;
    name?: string;
    description?: string;
    cageType?: "Breeder" | "Pen";
    AutoFeed?: boolean;
    waterInterval?: number;
    foodInterval?: number;
    feedTime?: string[];
    feedCount?: number;
    waterGpio?: number;
    foodGpio?: number[];
    weightGpio?: number[];
    createdAt?: Date;
    updateAt?: Date;
}>;
export interface CompleteCage extends z.infer<typeof _CageModel> {
    Rabbit: CompleteRabbit[];
    Kitten: CompleteRabbit[];
}
