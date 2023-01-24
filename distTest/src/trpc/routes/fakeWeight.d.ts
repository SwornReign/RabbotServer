export declare const fakeWeightRouter: import("@trpc/server").CreateRouterInner<import("@trpc/server").RootConfig<{
    ctx: object;
    meta: object;
    errorShape: never;
    transformer: import("@trpc/server").DataTransformerOptions;
}>, {
    toggleError: import("@trpc/server").BuildProcedure<"mutation", {
        _config: import("@trpc/server").RootConfig<{
            ctx: object;
            meta: object;
            errorShape: never;
            transformer: import("@trpc/server").DataTransformerOptions;
        }>;
        _meta: object;
        _ctx_out: object;
        _input_in: boolean;
        _input_out: boolean;
        _output_in: typeof import("@trpc/server").unsetMarker;
        _output_out: typeof import("@trpc/server").unsetMarker;
    }, void>;
    getToggleError: import("@trpc/server").BuildProcedure<"query", {
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
    }, boolean>;
    setWeight: import("@trpc/server").BuildProcedure<"mutation", {
        _config: import("@trpc/server").RootConfig<{
            ctx: object;
            meta: object;
            errorShape: never;
            transformer: import("@trpc/server").DataTransformerOptions;
        }>;
        _meta: object;
        _ctx_out: object;
        _input_in: string;
        _input_out: string;
        _output_in: typeof import("@trpc/server").unsetMarker;
        _output_out: typeof import("@trpc/server").unsetMarker;
    }, void>;
    startWeight: import("@trpc/server").BuildProcedure<"mutation", {
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
        isOk: boolean;
        weight: string;
    }>;
    getWeight: import("@trpc/server").BuildProcedure<"query", {
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
    }, string>;
}>;
