export const __esModule: boolean;
export const t: {
    _config: server_1.RootConfig<{
        ctx: object;
        meta: object;
        errorShape: never;
        transformer: server_1.DataTransformerOptions;
    }>;
    procedure: server_1.ProcedureBuilder<{
        _config: server_1.RootConfig<{
            ctx: object;
            meta: object;
            errorShape: never;
            transformer: server_1.DataTransformerOptions;
        }>;
        _ctx_out: object;
        _input_in: typeof server_1.unsetMarker;
        _input_out: typeof server_1.unsetMarker;
        _output_in: typeof server_1.unsetMarker;
        _output_out: typeof server_1.unsetMarker;
        _meta: object;
    }>;
    middleware: <TNewParams extends server_1.ProcedureParams<server_1.AnyRootConfig, unknown, unknown, unknown, unknown, unknown, unknown>>(fn: server_1.MiddlewareFunction<{
        _config: server_1.RootConfig<{
            ctx: object;
            meta: object;
            errorShape: never;
            transformer: server_1.DataTransformerOptions;
        }>;
        _ctx_out: object;
        _input_out: unknown;
        _input_in: unknown;
        _output_in: unknown;
        _output_out: unknown;
        _meta: object;
    }, TNewParams>) => server_1.MiddlewareFunction<{
        _config: server_1.RootConfig<{
            ctx: object;
            meta: object;
            errorShape: never;
            transformer: server_1.DataTransformerOptions;
        }>;
        _ctx_out: object;
        _input_out: unknown;
        _input_in: unknown;
        _output_in: unknown;
        _output_out: unknown;
        _meta: object;
    }, TNewParams>;
    router: <TProcRouterRecord extends server_1.ProcedureRouterRecord>(procedures: TProcRouterRecord) => server_1.CreateRouterInner<server_1.RootConfig<{
        ctx: object;
        meta: object;
        errorShape: never;
        transformer: server_1.DataTransformerOptions;
    }>, TProcRouterRecord>;
    mergeRouters: typeof server_1.mergeRoutersGeneric;
};
export const appRouter: server_1.CreateRouterInner<server_1.RootConfig<{
    ctx: object;
    meta: object;
    errorShape: never;
    transformer: server_1.DataTransformerOptions;
}>, {
    cage: server_1.CreateRouterInner<server_1.RootConfig<{
        ctx: object;
        meta: object;
        errorShape: never;
        transformer: server_1.DataTransformerOptions;
    }>, {
        create: server_1.BuildProcedure<"mutation", {
            _config: server_1.RootConfig<{
                ctx: object;
                meta: object;
                errorShape: never;
                transformer: server_1.DataTransformerOptions;
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
            _output_in: typeof server_1.unsetMarker;
            _output_out: typeof server_1.unsetMarker;
        }, import(".prisma/client").Cage>;
        list: server_1.BuildProcedure<"query", {
            _config: server_1.RootConfig<{
                ctx: object;
                meta: object;
                errorShape: never;
                transformer: server_1.DataTransformerOptions;
            }>;
            _ctx_out: object;
            _input_in: typeof server_1.unsetMarker;
            _input_out: typeof server_1.unsetMarker;
            _output_in: typeof server_1.unsetMarker;
            _output_out: typeof server_1.unsetMarker;
            _meta: object;
        }, (import(".prisma/client").Cage & {
            Rabbit: import(".prisma/client").Rabbit[];
        })[]>;
        getOne: server_1.BuildProcedure<"query", {
            _config: server_1.RootConfig<{
                ctx: object;
                meta: object;
                errorShape: never;
                transformer: server_1.DataTransformerOptions;
            }>;
            _meta: object;
            _ctx_out: object;
            _input_in: {
                id?: string;
            };
            _input_out: {
                id?: string;
            };
            _output_in: typeof server_1.unsetMarker;
            _output_out: typeof server_1.unsetMarker;
        }, import(".prisma/client").Cage & {
            Rabbit: import(".prisma/client").Rabbit[];
        }>;
        delete: server_1.BuildProcedure<"mutation", {
            _config: server_1.RootConfig<{
                ctx: object;
                meta: object;
                errorShape: never;
                transformer: server_1.DataTransformerOptions;
            }>;
            _meta: object;
            _ctx_out: object;
            _input_in: {
                id?: string;
            };
            _input_out: {
                id?: string;
            };
            _output_in: typeof server_1.unsetMarker;
            _output_out: typeof server_1.unsetMarker;
        }, import(".prisma/client").Cage>;
        update: server_1.BuildProcedure<"mutation", {
            _config: server_1.RootConfig<{
                ctx: object;
                meta: object;
                errorShape: never;
                transformer: server_1.DataTransformerOptions;
            }>;
            _meta: object;
            _ctx_out: object;
            _input_in: {
                id?: string;
                name?: string;
                description?: string;
                cageType?: "Breeder" | "Pen";
                AutoFeed?: boolean;
                feedTime?: string[];
            };
            _input_out: {
                id?: string;
                name?: string;
                description?: string;
                cageType?: "Breeder" | "Pen";
                AutoFeed?: boolean;
                feedTime?: string[];
            };
            _output_in: typeof server_1.unsetMarker;
            _output_out: typeof server_1.unsetMarker;
        }, import(".prisma/client").Cage>;
        RabbitToCage: server_1.BuildProcedure<"mutation", {
            _config: server_1.RootConfig<{
                ctx: object;
                meta: object;
                errorShape: never;
                transformer: server_1.DataTransformerOptions;
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
            _output_in: typeof server_1.unsetMarker;
            _output_out: typeof server_1.unsetMarker;
        }, import(".prisma/client").Cage>;
        listCage: server_1.BuildProcedure<"query", {
            _config: server_1.RootConfig<{
                ctx: object;
                meta: object;
                errorShape: never;
                transformer: server_1.DataTransformerOptions;
            }>;
            _meta: object;
            _ctx_out: object;
            _input_in: {
                type?: "Breeder" | "Pen";
            };
            _input_out: {
                type?: "Breeder" | "Pen";
            };
            _output_in: typeof server_1.unsetMarker;
            _output_out: typeof server_1.unsetMarker;
        }, (import(".prisma/client").Cage & {
            Rabbit: import(".prisma/client").Rabbit[];
        })[]>;
    }>;
    rabbit: server_1.CreateRouterInner<server_1.RootConfig<{
        ctx: object;
        meta: object;
        errorShape: never;
        transformer: server_1.DataTransformerOptions;
    }>, {
        create: server_1.BuildProcedure<"mutation", {
            _config: server_1.RootConfig<{
                ctx: object;
                meta: object;
                errorShape: never;
                transformer: server_1.DataTransformerOptions;
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
                birthDate?: Date;
                deceaseDate?: Date;
                statusDate?: Date;
            };
            _input_out: {
                name?: string;
                description?: string;
                status?: string;
                weight?: string;
                gender?: "Sire" | "Dam";
                breedTypeId?: string;
                birthDate?: Date;
                deceaseDate?: Date;
                statusDate?: Date;
            };
            _output_in: typeof server_1.unsetMarker;
            _output_out: typeof server_1.unsetMarker;
        }, import(".prisma/client").Rabbit>;
        list: server_1.BuildProcedure<"query", {
            _config: server_1.RootConfig<{
                ctx: object;
                meta: object;
                errorShape: never;
                transformer: server_1.DataTransformerOptions;
            }>;
            _ctx_out: object;
            _input_in: typeof server_1.unsetMarker;
            _input_out: typeof server_1.unsetMarker;
            _output_in: typeof server_1.unsetMarker;
            _output_out: typeof server_1.unsetMarker;
            _meta: object;
        }, import(".prisma/client").Rabbit[]>;
        getOne: server_1.BuildProcedure<"query", {
            _config: server_1.RootConfig<{
                ctx: object;
                meta: object;
                errorShape: never;
                transformer: server_1.DataTransformerOptions;
            }>;
            _meta: object;
            _ctx_out: object;
            _input_in: {
                id?: string;
            };
            _input_out: {
                id?: string;
            };
            _output_in: typeof server_1.unsetMarker;
            _output_out: typeof server_1.unsetMarker;
        }, import(".prisma/client").Rabbit & {
            BreedType: import(".prisma/client").BreedType;
            Cage: import(".prisma/client").Cage;
        }>;
        delete: server_1.BuildProcedure<"mutation", {
            _config: server_1.RootConfig<{
                ctx: object;
                meta: object;
                errorShape: never;
                transformer: server_1.DataTransformerOptions;
            }>;
            _meta: object;
            _ctx_out: object;
            _input_in: {
                id?: string;
            };
            _input_out: {
                id?: string;
            };
            _output_in: typeof server_1.unsetMarker;
            _output_out: typeof server_1.unsetMarker;
        }, import(".prisma/client").Rabbit>;
        update: server_1.BuildProcedure<"mutation", {
            _config: server_1.RootConfig<{
                ctx: object;
                meta: object;
                errorShape: never;
                transformer: server_1.DataTransformerOptions;
            }>;
            _meta: object;
            _ctx_out: object;
            _input_in: {
                id?: string;
                name?: string;
                description?: string;
                status?: string;
                weight?: string;
                gender?: "Sire" | "Dam";
                breedTypeId?: string;
                cageId?: string;
            };
            _input_out: {
                id?: string;
                name?: string;
                description?: string;
                status?: string;
                weight?: string;
                gender?: "Sire" | "Dam";
                breedTypeId?: string;
                cageId?: string;
            };
            _output_in: typeof server_1.unsetMarker;
            _output_out: typeof server_1.unsetMarker;
        }, import(".prisma/client").Rabbit>;
        putToCage: server_1.BuildProcedure<"mutation", {
            _config: server_1.RootConfig<{
                ctx: object;
                meta: object;
                errorShape: never;
                transformer: server_1.DataTransformerOptions;
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
            _output_in: typeof server_1.unsetMarker;
            _output_out: typeof server_1.unsetMarker;
        }, import(".prisma/client").Rabbit>;
    }>;
    breedType: server_1.CreateRouterInner<server_1.RootConfig<{
        ctx: object;
        meta: object;
        errorShape: never;
        transformer: server_1.DataTransformerOptions;
    }>, {
        create: server_1.BuildProcedure<"mutation", {
            _config: server_1.RootConfig<{
                ctx: object;
                meta: object;
                errorShape: never;
                transformer: server_1.DataTransformerOptions;
            }>;
            _meta: object;
            _ctx_out: object;
            _input_in: {
                name?: string;
            };
            _input_out: {
                name?: string;
            };
            _output_in: typeof server_1.unsetMarker;
            _output_out: typeof server_1.unsetMarker;
        }, import(".prisma/client").BreedType>;
        list: server_1.BuildProcedure<"query", {
            _config: server_1.RootConfig<{
                ctx: object;
                meta: object;
                errorShape: never;
                transformer: server_1.DataTransformerOptions;
            }>;
            _ctx_out: object;
            _input_in: typeof server_1.unsetMarker;
            _input_out: typeof server_1.unsetMarker;
            _output_in: typeof server_1.unsetMarker;
            _output_out: typeof server_1.unsetMarker;
            _meta: object;
        }, import(".prisma/client").BreedType[]>;
        delete: server_1.BuildProcedure<"mutation", {
            _config: server_1.RootConfig<{
                ctx: object;
                meta: object;
                errorShape: never;
                transformer: server_1.DataTransformerOptions;
            }>;
            _meta: object;
            _ctx_out: object;
            _input_in: {
                id?: string;
            };
            _input_out: {
                id?: string;
            };
            _output_in: typeof server_1.unsetMarker;
            _output_out: typeof server_1.unsetMarker;
        }, import(".prisma/client").BreedType>;
        update: server_1.BuildProcedure<"mutation", {
            _config: server_1.RootConfig<{
                ctx: object;
                meta: object;
                errorShape: never;
                transformer: server_1.DataTransformerOptions;
            }>;
            _meta: object;
            _ctx_out: object;
            _input_in: {
                id?: string;
                name?: string;
                createdAt?: Date;
                updateAt?: Date;
            };
            _input_out: {
                id?: string;
                name?: string;
                createdAt?: Date;
                updateAt?: Date;
            };
            _output_in: typeof server_1.unsetMarker;
            _output_out: typeof server_1.unsetMarker;
        }, import(".prisma/client").BreedType>;
        createFirst: server_1.BuildProcedure<"mutation", {
            _config: server_1.RootConfig<{
                ctx: object;
                meta: object;
                errorShape: never;
                transformer: server_1.DataTransformerOptions;
            }>;
            _ctx_out: object;
            _input_in: typeof server_1.unsetMarker;
            _input_out: typeof server_1.unsetMarker;
            _output_in: typeof server_1.unsetMarker;
            _output_out: typeof server_1.unsetMarker;
            _meta: object;
        }, import(".prisma/client").BreedType>;
    }>;
    breedRecord: server_1.CreateRouterInner<server_1.RootConfig<{
        ctx: object;
        meta: object;
        errorShape: never;
        transformer: server_1.DataTransformerOptions;
    }>, {
        create: server_1.BuildProcedure<"mutation", {
            _config: server_1.RootConfig<{
                ctx: object;
                meta: object;
                errorShape: never;
                transformer: server_1.DataTransformerOptions;
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
            _output_in: typeof server_1.unsetMarker;
            _output_out: typeof server_1.unsetMarker;
        }, import(".prisma/client").BreedRecord>;
        list: server_1.BuildProcedure<"query", {
            _config: server_1.RootConfig<{
                ctx: object;
                meta: object;
                errorShape: never;
                transformer: server_1.DataTransformerOptions;
            }>;
            _ctx_out: object;
            _input_in: typeof server_1.unsetMarker;
            _input_out: typeof server_1.unsetMarker;
            _output_in: typeof server_1.unsetMarker;
            _output_out: typeof server_1.unsetMarker;
            _meta: object;
        }, import(".prisma/client").BreedRecord[]>;
        getOne: server_1.BuildProcedure<"query", {
            _config: server_1.RootConfig<{
                ctx: object;
                meta: object;
                errorShape: never;
                transformer: server_1.DataTransformerOptions;
            }>;
            _meta: object;
            _ctx_out: object;
            _input_in: {
                id?: string;
            };
            _input_out: {
                id?: string;
            };
            _output_in: typeof server_1.unsetMarker;
            _output_out: typeof server_1.unsetMarker;
        }, import(".prisma/client").BreedRecord>;
        delete: server_1.BuildProcedure<"mutation", {
            _config: server_1.RootConfig<{
                ctx: object;
                meta: object;
                errorShape: never;
                transformer: server_1.DataTransformerOptions;
            }>;
            _meta: object;
            _ctx_out: object;
            _input_in: {
                id?: string;
            };
            _input_out: {
                id?: string;
            };
            _output_in: typeof server_1.unsetMarker;
            _output_out: typeof server_1.unsetMarker;
        }, import(".prisma/client").BreedRecord>;
        update: server_1.BuildProcedure<"mutation", {
            _config: server_1.RootConfig<{
                ctx: object;
                meta: object;
                errorShape: never;
                transformer: server_1.DataTransformerOptions;
            }>;
            _meta: object;
            _ctx_out: object;
            _input_in: {
                id?: string;
                description?: string;
                breedDate?: Date;
                expectedKindleDate?: Date;
                nestBoxDate?: Date;
                kindleDate?: Date;
                weanDate?: Date;
            };
            _input_out: {
                id?: string;
                description?: string;
                breedDate?: Date;
                expectedKindleDate?: Date;
                nestBoxDate?: Date;
                kindleDate?: Date;
                weanDate?: Date;
            };
            _output_in: typeof server_1.unsetMarker;
            _output_out: typeof server_1.unsetMarker;
        }, import(".prisma/client").BreedRecord>;
    }>;
    gpio: server_1.CreateRouterInner<server_1.RootConfig<{
        ctx: object;
        meta: object;
        errorShape: never;
        transformer: server_1.DataTransformerOptions;
    }>, {
        feed: server_1.BuildProcedure<"mutation", {
            _config: server_1.RootConfig<{
                ctx: object;
                meta: object;
                errorShape: never;
                transformer: server_1.DataTransformerOptions;
            }>;
            _ctx_out: object;
            _input_in: typeof server_1.unsetMarker;
            _input_out: typeof server_1.unsetMarker;
            _output_in: typeof server_1.unsetMarker;
            _output_out: typeof server_1.unsetMarker;
            _meta: object;
        }, {
            ok: boolean;
        }>;
        water: server_1.BuildProcedure<"mutation", {
            _config: server_1.RootConfig<{
                ctx: object;
                meta: object;
                errorShape: never;
                transformer: server_1.DataTransformerOptions;
            }>;
            _meta: object;
            _ctx_out: object;
            _input_in: {
                interval?: number;
            };
            _input_out: {
                interval?: number;
            };
            _output_in: typeof server_1.unsetMarker;
            _output_out: typeof server_1.unsetMarker;
        }, {
            ok: boolean;
        }>;
        weight: server_1.BuildProcedure<"mutation", {
            _config: server_1.RootConfig<{
                ctx: object;
                meta: object;
                errorShape: never;
                transformer: server_1.DataTransformerOptions;
            }>;
            _ctx_out: object;
            _input_in: typeof server_1.unsetMarker;
            _input_out: typeof server_1.unsetMarker;
            _output_in: typeof server_1.unsetMarker;
            _output_out: typeof server_1.unsetMarker;
            _meta: object;
        }, {
            ok: boolean;
            weight: number;
        }>;
        autoFeed: server_1.BuildProcedure<"mutation", {
            _config: server_1.RootConfig<{
                ctx: object;
                meta: object;
                errorShape: never;
                transformer: server_1.DataTransformerOptions;
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
            _output_in: typeof server_1.unsetMarker;
            _output_out: typeof server_1.unsetMarker;
        }, {
            ok: boolean;
        }>;
    }>;
    weight: server_1.CreateRouterInner<server_1.RootConfig<{
        ctx: object;
        meta: object;
        errorShape: never;
        transformer: server_1.DataTransformerOptions;
    }>, {
        toggleError: server_1.BuildProcedure<"mutation", {
            _config: server_1.RootConfig<{
                ctx: object;
                meta: object;
                errorShape: never;
                transformer: server_1.DataTransformerOptions;
            }>;
            _meta: object;
            _ctx_out: object;
            _input_in: boolean;
            _input_out: boolean;
            _output_in: typeof server_1.unsetMarker;
            _output_out: typeof server_1.unsetMarker;
        }, void>;
        getToggleError: server_1.BuildProcedure<"query", {
            _config: server_1.RootConfig<{
                ctx: object;
                meta: object;
                errorShape: never;
                transformer: server_1.DataTransformerOptions;
            }>;
            _ctx_out: object;
            _input_in: typeof server_1.unsetMarker;
            _input_out: typeof server_1.unsetMarker;
            _output_in: typeof server_1.unsetMarker;
            _output_out: typeof server_1.unsetMarker;
            _meta: object;
        }, boolean>;
        setWeight: server_1.BuildProcedure<"mutation", {
            _config: server_1.RootConfig<{
                ctx: object;
                meta: object;
                errorShape: never;
                transformer: server_1.DataTransformerOptions;
            }>;
            _meta: object;
            _ctx_out: object;
            _input_in: string;
            _input_out: string;
            _output_in: typeof server_1.unsetMarker;
            _output_out: typeof server_1.unsetMarker;
        }, void>;
        startWeight: server_1.BuildProcedure<"mutation", {
            _config: server_1.RootConfig<{
                ctx: object;
                meta: object;
                errorShape: never;
                transformer: server_1.DataTransformerOptions;
            }>;
            _ctx_out: object;
            _input_in: typeof server_1.unsetMarker;
            _input_out: typeof server_1.unsetMarker;
            _output_in: typeof server_1.unsetMarker;
            _output_out: typeof server_1.unsetMarker;
            _meta: object;
        }, {
            isOk: boolean;
            weight: string;
        }>;
        getWeight: server_1.BuildProcedure<"query", {
            _config: server_1.RootConfig<{
                ctx: object;
                meta: object;
                errorShape: never;
                transformer: server_1.DataTransformerOptions;
            }>;
            _ctx_out: object;
            _input_in: typeof server_1.unsetMarker;
            _input_out: typeof server_1.unsetMarker;
            _output_in: typeof server_1.unsetMarker;
            _output_out: typeof server_1.unsetMarker;
            _meta: object;
        }, string>;
    }>;
}>;
import server_1 = require("@trpc/server");
