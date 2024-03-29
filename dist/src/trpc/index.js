"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.publicProcedure = exports.router = exports.middleware = void 0;
const server_1 = require("@trpc/server");
const t = server_1.initTRPC.create();
exports.middleware = t.middleware;
exports.router = t.router;
exports.publicProcedure = t.procedure;
//# sourceMappingURL=index.js.map