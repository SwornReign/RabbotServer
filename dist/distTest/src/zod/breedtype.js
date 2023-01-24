"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports._BreedTypeModel = void 0;
const tslib_1 = require("tslib");
const z = tslib_1.__importStar(require("zod"));
exports._BreedTypeModel = z.object({
    id: z.string(),
    name: z.string(),
    createdAt: z.date(),
    updateAt: z.date(),
});
//# sourceMappingURL=breedtype.js.map