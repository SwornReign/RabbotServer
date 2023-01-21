"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createContext = void 0;
const __1 = require("..");
function createContext({ req, res }) {
    return { req, res, prisma: __1.prisma };
}
exports.createContext = createContext;
//# sourceMappingURL=context.js.map