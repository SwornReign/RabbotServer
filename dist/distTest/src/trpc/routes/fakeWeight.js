"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.fakeWeightRouter = void 0;
const __1 = require("..");
const zod_1 = require("zod");
let toggleError = true;
let fakeWeight = '0';
exports.fakeWeightRouter = (0, __1.router)({
    toggleError: __1.publicProcedure.input(zod_1.z.boolean()).mutation(async ({ input }) => {
        toggleError = input;
    }),
    getToggleError: __1.publicProcedure.query(() => {
        return toggleError;
    }),
    setWeight: __1.publicProcedure.input(zod_1.z.string()).mutation(async ({ input }) => {
        fakeWeight = input;
    }),
    startWeight: __1.publicProcedure.mutation(async () => {
        const toReturn = `${fakeWeight}.${Math.random().toString().split('.')[1].slice(0, 3)}`;
        await new Promise((res) => setTimeout(res, 5000));
        return {
            isOk: toggleError,
            weight: toReturn,
        };
    }),
    getWeight: __1.publicProcedure.query(async () => {
        return `${fakeWeight}`;
    }),
});
//# sourceMappingURL=fakeWeight.js.map