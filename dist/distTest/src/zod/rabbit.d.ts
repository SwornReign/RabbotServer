export const __esModule: boolean;
export const _RabbitModel: Zod.ZodObject<{
    id: Zod.ZodString;
    name: Zod.ZodString;
    weight: Zod.ZodString;
    gender: Zod.ZodNativeEnum<{
        Sire: "Sire";
        Dam: "Dam";
    }>;
    description: Zod.ZodNullable<Zod.ZodOptional<Zod.ZodString>>;
    breedTypeId: Zod.ZodString;
    birthDate: Zod.ZodDate;
    deceaseDate: Zod.ZodNullable<Zod.ZodOptional<Zod.ZodDate>>;
    lastBreedDate: Zod.ZodNullable<Zod.ZodOptional<Zod.ZodDate>>;
    breedGeo: any;
    cageId: Zod.ZodNullable<Zod.ZodOptional<Zod.ZodString>>;
    motherId: Zod.ZodNullable<Zod.ZodOptional<Zod.ZodString>>;
    fatherId: Zod.ZodNullable<Zod.ZodOptional<Zod.ZodString>>;
    kittenCageId: Zod.ZodNullable<Zod.ZodOptional<Zod.ZodString>>;
    status: Zod.ZodNullable<Zod.ZodOptional<Zod.ZodString>>;
    statusDate: Zod.ZodNullable<Zod.ZodOptional<Zod.ZodDate>>;
}, "strip", Zod.ZodTypeAny, {
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
    breedGeo?: any;
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
    breedGeo?: any;
    statusDate?: Date;
    breedTypeId?: string;
    motherId?: string;
    fatherId?: string;
    kittenCageId?: string;
}>;