import { initTRPC } from "@trpc/server";
import { breedRecordRouter, breedTypeRouter, cageRouter, rabbitRouter } from "./routes";
import { gpioRouter } from "./routes/gpio";
export var t = initTRPC.create();
export var appRouter = t.router({
    cage: cageRouter,
    rabbit: rabbitRouter,
    breedType: breedTypeRouter,
    breedRecord: breedRecordRouter,
    gpio: gpioRouter
});

//# sourceMappingURL=router.js.map