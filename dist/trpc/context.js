<<<<<<< HEAD
import { prisma } from "../app";
=======
import { prisma } from "..";
>>>>>>> e0abaca9e7145c6ed4bc11f4e0ffb49245fb4e5a
export function createContext(param) {
    var req = param.req, res = param.res;
    return {
        req: req,
        res: res,
        prisma: prisma
    };
}

//# sourceMappingURL=context.js.map