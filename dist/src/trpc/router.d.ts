export declare const t: {
    _config: import("@trpc/server").RootConfig<{
        ctx: object;
        meta: object;
        errorShape: never;
        transformer: import("@trpc/server").DataTransformerOptions;
    }>;
    procedure: import("@trpc/server").ProcedureBuilder<{
        _config: import("@trpc/server").RootConfig<{
            ctx: object;
            meta: object;
            errorShape: never;
            transformer: import("@trpc/server").DataTransformerOptions;
        }>;
        _ctx_out: object;
        _input_in: typeof import("@trpc/server").unsetMarker;
        _input_out: typeof import("@trpc/server").unsetMarker;
        _output_in: typeof import("@trpc/server").unsetMarker;
        _output_out: typeof import("@trpc/server").unsetMarker;
        _meta: object;
    }>;
    middleware: <TNewParams extends import("@trpc/server").ProcedureParams<import("@trpc/server").AnyRootConfig, unknown, unknown, unknown, unknown, unknown, unknown>>(fn: import("@trpc/server").MiddlewareFunction<{
        _config: import("@trpc/server").RootConfig<{
            ctx: object;
            meta: object;
            errorShape: never;
            transformer: import("@trpc/server").DataTransformerOptions;
        }>;
        _ctx_out: object;
        _input_out: unknown;
        _input_in: unknown;
        _output_in: unknown;
        _output_out: unknown;
        _meta: object;
    }, TNewParams>) => import("@trpc/server").MiddlewareFunction<{
        _config: import("@trpc/server").RootConfig<{
            ctx: object;
            meta: object;
            errorShape: never;
            transformer: import("@trpc/server").DataTransformerOptions;
        }>;
        _ctx_out: object;
        _input_out: unknown;
        _input_in: unknown;
        _output_in: unknown;
        _output_out: unknown;
        _meta: object;
    }, TNewParams>;
    router: <TProcRouterRecord extends import("@trpc/server").ProcedureRouterRecord>(procedures: TProcRouterRecord) => import("@trpc/server").CreateRouterInner<import("@trpc/server").RootConfig<{
        ctx: object;
        meta: object;
        errorShape: never;
        transformer: import("@trpc/server").DataTransformerOptions;
    }>, TProcRouterRecord>;
    mergeRouters: typeof import("@trpc/server").mergeRoutersGeneric;
};
export declare const appRouter: import("@trpc/server").CreateRouterInner<import("@trpc/server").RootConfig<{
    ctx: object;
    meta: object;
    errorShape: never;
    transformer: import("@trpc/server").DataTransformerOptions;
}>, {
    cage: import("@trpc/server").CreateRouterInner<import("@trpc/server").RootConfig<{
        ctx: object;
        meta: object;
        errorShape: never;
        transformer: import("@trpc/server").DataTransformerOptions;
    }>, {
        create: import("@trpc/server").BuildProcedure<"mutation", {
            _config: import("@trpc/server").RootConfig<{
                ctx: object;
                meta: object;
                errorShape: never;
                transformer: import("@trpc/server").DataTransformerOptions;
            }>;
            _meta: object;
            _ctx_out: object;
            _input_in: {
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
            };
            _input_out: {
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
            };
            _output_in: typeof import("@trpc/server").unsetMarker;
            _output_out: typeof import("@trpc/server").unsetMarker;
        }, import(".prisma/client").Cage>;
        list: import("@trpc/server").BuildProcedure<"query", {
            _config: import("@trpc/server").RootConfig<{
                ctx: object;
                meta: object;
                errorShape: never;
                transformer: import("@trpc/server").DataTransformerOptions;
            }>;
            _ctx_out: object;
            _input_in: typeof import("@trpc/server").unsetMarker;
            _input_out: typeof import("@trpc/server").unsetMarker;
            _output_in: typeof import("@trpc/server").unsetMarker;
            _output_out: typeof import("@trpc/server").unsetMarker;
            _meta: object;
        }, (import(".prisma/client").Cage & {
            Rabbit: import(".prisma/client").Rabbit[];
        })[]>;
        getOne: import("@trpc/server").BuildProcedure<"query", {
            _config: import("@trpc/server").RootConfig<{
                ctx: object;
                meta: object;
                errorShape: never;
                transformer: import("@trpc/server").DataTransformerOptions;
            }>;
            _meta: object;
            _ctx_out: object;
            _input_in: {
                id?: string;
            };
            _input_out: {
                id?: string;
            };
            _output_in: typeof import("@trpc/server").unsetMarker;
            _output_out: typeof import("@trpc/server").unsetMarker;
        }, import(".prisma/client").Cage & {
            Rabbit: import(".prisma/client").Rabbit[];
        }>;
        delete: import("@trpc/server").BuildProcedure<"mutation", {
            _config: import("@trpc/server").RootConfig<{
                ctx: object;
                meta: object;
                errorShape: never;
                transformer: import("@trpc/server").DataTransformerOptions;
            }>;
            _meta: object;
            _ctx_out: object;
            _input_in: {
                id?: string;
            };
            _input_out: {
                id?: string;
            };
            _output_in: typeof import("@trpc/server").unsetMarker;
            _output_out: typeof import("@trpc/server").unsetMarker;
        }, import(".prisma/client").Cage>;
        update: import("@trpc/server").BuildProcedure<"mutation", {
            _config: import("@trpc/server").RootConfig<{
                ctx: object;
                meta: object;
                errorShape: never;
                transformer: import("@trpc/server").DataTransformerOptions;
            }>;
            _meta: object;
            _ctx_out: object;
            _input_in: {
                name?: string;
                id?: string;
                description?: string;
                cageType?: "Breeder" | "Pen";
                AutoFeed?: boolean;
            };
            _input_out: {
                name?: string;
                id?: string;
                description?: string;
                cageType?: "Breeder" | "Pen";
                AutoFeed?: boolean;
            };
            _output_in: typeof import("@trpc/server").unsetMarker;
            _output_out: typeof import("@trpc/server").unsetMarker;
        }, import(".prisma/client").Cage>;
        RabbitToCage: import("@trpc/server").BuildProcedure<"mutation", {
            _config: import("@trpc/server").RootConfig<{
                ctx: object;
                meta: object;
                errorShape: never;
                transformer: import("@trpc/server").DataTransformerOptions;
            }>;
            _meta: object;
            _ctx_out: object;
            _input_in: {
                cageId?: string;
                rabbitId?: string;
            };
            _input_out: {
                cageId?: string;
                rabbitId?: string;
            };
            _output_in: typeof import("@trpc/server").unsetMarker;
            _output_out: typeof import("@trpc/server").unsetMarker;
        }, import(".prisma/client").Cage>;
        listCage: import("@trpc/server").BuildProcedure<"query", {
            _config: import("@trpc/server").RootConfig<{
                ctx: object;
                meta: object;
                errorShape: never;
                transformer: import("@trpc/server").DataTransformerOptions;
            }>;
            _meta: object;
            _ctx_out: object;
            _input_in: {
                type?: "Breeder" | "Pen";
            };
            _input_out: {
                type?: "Breeder" | "Pen";
            };
            _output_in: typeof import("@trpc/server").unsetMarker;
            _output_out: typeof import("@trpc/server").unsetMarker;
        }, (import(".prisma/client").Cage & {
            Rabbit: import(".prisma/client").Rabbit[];
        })[]>;
    }>;
    rabbit: import("@trpc/server").CreateRouterInner<import("@trpc/server").RootConfig<{
        ctx: object;
        meta: object;
        errorShape: never;
        transformer: import("@trpc/server").DataTransformerOptions;
    }>, {
        create: import("@trpc/server").BuildProcedure<"mutation", {
            _config: import("@trpc/server").RootConfig<{
                ctx: object;
                meta: object;
                errorShape: never;
                transformer: import("@trpc/server").DataTransformerOptions;
            }>;
            _meta: object;
            _ctx_out: object;
            _input_in: {
                name?: string;
                description?: string;
                status?: string;
                weight?: string;
                gender?: "Sire" | "Dam";
                breedTypeId?: string;
                deceaseDate?: Date;
                lastBreedDate?: Date;
                cageId?: string;
                motherId?: string;
                fatherId?: string;
                kittenCageId?: string;
                statusDate?: Date;
            };
            _input_out: {
                name?: string;
                description?: string;
                status?: string;
                weight?: string;
                gender?: "Sire" | "Dam";
                breedTypeId?: string;
                deceaseDate?: Date;
                lastBreedDate?: Date;
                cageId?: string;
                motherId?: string;
                fatherId?: string;
                kittenCageId?: string;
                statusDate?: Date;
            };
            _output_in: typeof import("@trpc/server").unsetMarker;
            _output_out: typeof import("@trpc/server").unsetMarker;
        }, import(".prisma/client").Rabbit>;
        list: import("@trpc/server").BuildProcedure<"query", {
            _config: import("@trpc/server").RootConfig<{
                ctx: object;
                meta: object;
                errorShape: never;
                transformer: import("@trpc/server").DataTransformerOptions;
            }>;
            _ctx_out: object;
            _input_in: typeof import("@trpc/server").unsetMarker;
            _input_out: typeof import("@trpc/server").unsetMarker;
            _output_in: typeof import("@trpc/server").unsetMarker;
            _output_out: typeof import("@trpc/server").unsetMarker;
            _meta: object;
        }, import(".prisma/client").Rabbit[]>;
        getOne: import("@trpc/server").BuildProcedure<"query", {
            _config: import("@trpc/server").RootConfig<{
                ctx: object;
                meta: object;
                errorShape: never;
                transformer: import("@trpc/server").DataTransformerOptions;
            }>;
            _meta: object;
            _ctx_out: object;
            _input_in: {
                id?: string;
            };
            _input_out: {
                id?: string;
            };
            _output_in: typeof import("@trpc/server").unsetMarker;
            _output_out: typeof import("@trpc/server").unsetMarker;
        }, import(".prisma/client").Rabbit & {
            Cage: import(".prisma/client").Cage;
            BreedType: import(".prisma/client").BreedType;
        }>;
        delete: import("@trpc/server").BuildProcedure<"mutation", {
            _config: import("@trpc/server").RootConfig<{
                ctx: object;
                meta: object;
                errorShape: never;
                transformer: import("@trpc/server").DataTransformerOptions;
            }>;
            _meta: object;
            _ctx_out: object;
            _input_in: {
                id?: string;
            };
            _input_out: {
                id?: string;
            };
            _output_in: typeof import("@trpc/server").unsetMarker;
            _output_out: typeof import("@trpc/server").unsetMarker;
        }, import(".prisma/client").Rabbit>;
        update: import("@trpc/server").BuildProcedure<"mutation", {
            _config: import("@trpc/server").RootConfig<{
                ctx: object;
                meta: object;
                errorShape: never;
                transformer: import("@trpc/server").DataTransformerOptions;
            }>;
            _meta: object;
            _ctx_out: object;
            _input_in: {
                name?: string;
                id?: string;
                description?: string;
                status?: string;
                weight?: string;
                gender?: "Sire" | "Dam";
                breedTypeId?: string;
                cageId?: string;
            };
            _input_out: {
                name?: string;
                id?: string;
                description?: string;
                status?: string;
                weight?: string;
                gender?: "Sire" | "Dam";
                breedTypeId?: string;
                cageId?: string;
            };
            _output_in: typeof import("@trpc/server").unsetMarker;
            _output_out: typeof import("@trpc/server").unsetMarker;
        }, import(".prisma/client").Rabbit>;
        putToCage: import("@trpc/server").BuildProcedure<"mutation", {
            _config: import("@trpc/server").RootConfig<{
                ctx: object;
                meta: object;
                errorShape: never;
                transformer: import("@trpc/server").DataTransformerOptions;
            }>;
            _meta: object;
            _ctx_out: object;
            _input_in: {
                cageId?: string;
                rabbitId?: string;
            };
            _input_out: {
                cageId?: string;
                rabbitId?: string;
            };
            _output_in: typeof import("@trpc/server").unsetMarker;
            _output_out: typeof import("@trpc/server").unsetMarker;
        }, import(".prisma/client").Rabbit>;
    }>;
    breedType: import("@trpc/server").CreateRouterInner<import("@trpc/server").RootConfig<{
        ctx: object;
        meta: object;
        errorShape: never;
        transformer: import("@trpc/server").DataTransformerOptions;
    }>, {
        create: import("@trpc/server").BuildProcedure<"mutation", {
            _config: import("@trpc/server").RootConfig<{
                ctx: object;
                meta: object;
                errorShape: never;
                transformer: import("@trpc/server").DataTransformerOptions;
            }>;
            _meta: object;
            _ctx_out: object;
            _input_in: {
                name?: string;
                createdAt?: Date;
                updateAt?: Date;
            };
            _input_out: {
                name?: string;
                createdAt?: Date;
                updateAt?: Date;
            };
            _output_in: typeof import("@trpc/server").unsetMarker;
            _output_out: typeof import("@trpc/server").unsetMarker;
        }, import(".prisma/client").BreedType>;
        list: import("@trpc/server").BuildProcedure<"query", {
            _config: import("@trpc/server").RootConfig<{
                ctx: object;
                meta: object;
                errorShape: never;
                transformer: import("@trpc/server").DataTransformerOptions;
            }>;
            _ctx_out: object;
            _input_in: typeof import("@trpc/server").unsetMarker;
            _input_out: typeof import("@trpc/server").unsetMarker;
            _output_in: typeof import("@trpc/server").unsetMarker;
            _output_out: typeof import("@trpc/server").unsetMarker;
            _meta: object;
        }, import(".prisma/client").BreedType[]>;
        delete: import("@trpc/server").BuildProcedure<"mutation", {
            _config: import("@trpc/server").RootConfig<{
                ctx: object;
                meta: object;
                errorShape: never;
                transformer: import("@trpc/server").DataTransformerOptions;
            }>;
            _meta: object;
            _ctx_out: object;
            _input_in: {
                id?: string;
            };
            _input_out: {
                id?: string;
            };
            _output_in: typeof import("@trpc/server").unsetMarker;
            _output_out: typeof import("@trpc/server").unsetMarker;
        }, import(".prisma/client").BreedType>;
        update: import("@trpc/server").BuildProcedure<"mutation", {
            _config: import("@trpc/server").RootConfig<{
                ctx: object;
                meta: object;
                errorShape: never;
                transformer: import("@trpc/server").DataTransformerOptions;
            }>;
            _meta: object;
            _ctx_out: object;
            _input_in: {
                name?: string;
                id?: string;
                createdAt?: Date;
                updateAt?: Date;
            };
            _input_out: {
                name?: string;
                id?: string;
                createdAt?: Date;
                updateAt?: Date;
            };
            _output_in: typeof import("@trpc/server").unsetMarker;
            _output_out: typeof import("@trpc/server").unsetMarker;
        }, import(".prisma/client").BreedType>;
        createFirst: import("@trpc/server").BuildProcedure<"mutation", {
            _config: import("@trpc/server").RootConfig<{
                ctx: object;
                meta: object;
                errorShape: never;
                transformer: import("@trpc/server").DataTransformerOptions;
            }>;
            _ctx_out: object;
            _input_in: typeof import("@trpc/server").unsetMarker;
            _input_out: typeof import("@trpc/server").unsetMarker;
            _output_in: typeof import("@trpc/server").unsetMarker;
            _output_out: typeof import("@trpc/server").unsetMarker;
            _meta: object;
        }, import(".prisma/client").BreedType>;
    }>;
    breedRecord: import("@trpc/server").CreateRouterInner<import("@trpc/server").RootConfig<{
        ctx: object;
        meta: object;
        errorShape: never;
        transformer: import("@trpc/server").DataTransformerOptions;
    }>, {
        create: import("@trpc/server").BuildProcedure<"mutation", {
            _config: import("@trpc/server").RootConfig<{
                ctx: object;
                meta: object;
                errorShape: never;
                transformer: import("@trpc/server").DataTransformerOptions;
            }>;
            _meta: object;
            _ctx_out: object;
            _input_in: {
                description?: string;
                breedDate?: string;
                damWeight?: string;
                expectedKindleDate?: string;
                nestBoxDate?: string;
                kindleDate?: string;
                weanDate?: string;
            };
            _input_out: {
                description?: string;
                breedDate?: string;
                damWeight?: string;
                expectedKindleDate?: string;
                nestBoxDate?: string;
                kindleDate?: string;
                weanDate?: string;
            };
            _output_in: typeof import("@trpc/server").unsetMarker;
            _output_out: typeof import("@trpc/server").unsetMarker;
        }, import(".prisma/client").BreedRecord>;
        list: import("@trpc/server").BuildProcedure<"query", {
            _config: import("@trpc/server").RootConfig<{
                ctx: object;
                meta: object;
                errorShape: never;
                transformer: import("@trpc/server").DataTransformerOptions;
            }>;
            _ctx_out: object;
            _input_in: typeof import("@trpc/server").unsetMarker;
            _input_out: typeof import("@trpc/server").unsetMarker;
            _output_in: typeof import("@trpc/server").unsetMarker;
            _output_out: typeof import("@trpc/server").unsetMarker;
            _meta: object;
        }, import(".prisma/client").BreedRecord[]>;
        getOne: import("@trpc/server").BuildProcedure<"query", {
            _config: import("@trpc/server").RootConfig<{
                ctx: object;
                meta: object;
                errorShape: never;
                transformer: import("@trpc/server").DataTransformerOptions;
            }>;
            _meta: object;
            _ctx_out: object;
            _input_in: {
                id?: string;
            };
            _input_out: {
                id?: string;
            };
            _output_in: typeof import("@trpc/server").unsetMarker;
            _output_out: typeof import("@trpc/server").unsetMarker;
        }, import(".prisma/client").BreedRecord>;
        delete: import("@trpc/server").BuildProcedure<"mutation", {
            _config: import("@trpc/server").RootConfig<{
                ctx: object;
                meta: object;
                errorShape: never;
                transformer: import("@trpc/server").DataTransformerOptions;
            }>;
            _meta: object;
            _ctx_out: object;
            _input_in: {
                id?: string;
            };
            _input_out: {
                id?: string;
            };
            _output_in: typeof import("@trpc/server").unsetMarker;
            _output_out: typeof import("@trpc/server").unsetMarker;
        }, import(".prisma/client").BreedRecord>;
        update: import("@trpc/server").BuildProcedure<"mutation", {
            _config: import("@trpc/server").RootConfig<{
                ctx: object;
                meta: object;
                errorShape: never;
                transformer: import("@trpc/server").DataTransformerOptions;
            }>;
            _meta: object;
            _ctx_out: object;
            _input_in: {
                id?: string;
                description?: string;
                createdAt?: Date;
                updateAt?: Date;
                breedDate?: Date;
                sireId?: string;
                damId?: string;
                damWeight?: string;
                testDate?: Date;
                expectedKindleDate?: Date;
                nestBoxDate?: Date;
                kindleDate?: Date;
                noKits?: boolean;
                weanDate?: Date;
                noWean?: boolean;
                weightMF?: string;
            };
            _input_out: {
                id?: string;
                description?: string;
                createdAt?: Date;
                updateAt?: Date;
                breedDate?: Date;
                sireId?: string;
                damId?: string;
                damWeight?: string;
                testDate?: Date;
                expectedKindleDate?: Date;
                nestBoxDate?: Date;
                kindleDate?: Date;
                noKits?: boolean;
                weanDate?: Date;
                noWean?: boolean;
                weightMF?: string;
            };
            _output_in: typeof import("@trpc/server").unsetMarker;
            _output_out: typeof import("@trpc/server").unsetMarker;
        }, import(".prisma/client").BreedRecord>;
    }>;
    gpio: import("@trpc/server").CreateRouterInner<import("@trpc/server").RootConfig<{
        ctx: object;
        meta: object;
        errorShape: never;
        transformer: import("@trpc/server").DataTransformerOptions;
    }>, {
        feed: import("@trpc/server").BuildProcedure<"mutation", {
            _config: import("@trpc/server").RootConfig<{
                ctx: object;
                meta: object;
                errorShape: never;
                transformer: import("@trpc/server").DataTransformerOptions;
            }>;
            _ctx_out: object;
            _input_in: typeof import("@trpc/server").unsetMarker;
            _input_out: typeof import("@trpc/server").unsetMarker;
            _output_in: typeof import("@trpc/server").unsetMarker;
            _output_out: typeof import("@trpc/server").unsetMarker;
            _meta: object;
        }, {
            ok: boolean;
        }>;
        water: import("@trpc/server").BuildProcedure<"mutation", {
            _config: import("@trpc/server").RootConfig<{
                ctx: object;
                meta: object;
                errorShape: never;
                transformer: import("@trpc/server").DataTransformerOptions;
            }>;
            _meta: object;
            _ctx_out: object;
            _input_in: {
                interval?: number;
            };
            _input_out: {
                interval?: number;
            };
            _output_in: typeof import("@trpc/server").unsetMarker;
            _output_out: typeof import("@trpc/server").unsetMarker;
        }, {
            ok: boolean;
        }>;
        autoFeed: import("@trpc/server").BuildProcedure<"mutation", {
            _config: import("@trpc/server").RootConfig<{
                ctx: object;
                meta: object;
                errorShape: never;
                transformer: import("@trpc/server").DataTransformerOptions;
            }>;
            _meta: object;
            _ctx_out: object;
            _input_in: {
                hour?: string;
                min?: string;
                enable?: boolean;
            };
            _input_out: {
                hour?: string;
                min?: string;
                enable?: boolean;
            };
            _output_in: typeof import("@trpc/server").unsetMarker;
            _output_out: typeof import("@trpc/server").unsetMarker;
        }, {
            ok: boolean;
        }>;
    }>;
}>;
export type AppRouter = typeof appRouter;
