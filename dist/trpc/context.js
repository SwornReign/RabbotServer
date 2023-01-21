import { prisma } from "../app";
export function createContext(param) {
    var req = param.req, res = param.res;
    return {
        req: req,
        res: res,
        prisma: prisma
    };
}

//# sourceMappingURL=context.js.map