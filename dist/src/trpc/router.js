"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.appRouter = exports.t = void 0;
const server_1 = require("@trpc/server");
const routes_1 = require("./routes");
const fakeWeight_1 = require("./routes/fakeWeight");
const gpio_1 = require("./routes/gpio");
const logs_1 = require("./routes/logs");
exports.t = server_1.initTRPC.create();
exports.appRouter = exports.t.router({
    cage: routes_1.cageRouter,
    rabbit: routes_1.rabbitRouter,
    breedType: routes_1.breedTypeRouter,
    breedRecord: routes_1.breedRecordRouter,
    gpio: gpio_1.gpioRouter,
    weight: fakeWeight_1.fakeWeightRouter,
    logs: logs_1.logsRouter,
});
//# sourceMappingURL=router.js.map