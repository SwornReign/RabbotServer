"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.prisma = void 0;
const tslib_1 = require("tslib");
const fastify_1 = tslib_1.__importDefault(require("fastify"));
const fastify_2 = require("@trpc/server/adapters/fastify");
const router_1 = require("./trpc/router");
const cors_1 = require("@fastify/cors");
const fastify_prisma_client_1 = tslib_1.__importDefault(require("fastify-prisma-client"));
const context_1 = require("./trpc/context");
const client_1 = require("@prisma/client");
//const __filename = fileURLToPath(import.meta.url);
//const __dirname = path.dirname(__filename);
exports.prisma = new client_1.PrismaClient();
const server = (0, fastify_1.default)({
    maxParamLength: 5000,
});
server.register(fastify_prisma_client_1.default, {});
server.register(cors_1.fastifyCors, () => {
    return (req, callback) => {
        const corsOptions = {
            // This is NOT recommended for production as it enables reflection exploits
            origin: true
        };
        // do not include CORS headers for requests from localhost
        if (/^localhost$/m.test(req.headers.origin)) {
            corsOptions.origin = false;
        }
        // callback expects two parameters: error and options
        callback(null, corsOptions);
    };
});
//use GPIO pin numbers
const stepPins = [17, 22, 27, 23];
//const waterPin = new gpio(24, "out");
const pinNumber = stepPins.length;
let pins = [];
const waterTimeout = 1000;
//waterPin.writeSync(1); // Set to Default
let Seq = [];
Seq[0] = [1, 0, 0, 0];
Seq[1] = [1, 1, 0, 0];
Seq[2] = [0, 1, 0, 0];
Seq[3] = [0, 1, 1, 0];
Seq[4] = [0, 0, 1, 0];
Seq[5] = [0, 0, 1, 1];
Seq[6] = [0, 0, 0, 1];
Seq[7] = [1, 0, 0, 1];
Seq[8] = [0, 0, 0, 0];
// for (var i = 0; i < pinNumber; i++) {
//   pins[i] = new gpio(stepPins[i], "out");
// }
var step = async function (stepCounter) {
    return new Promise((res) => {
        for (var pin = 0; pin < 4; pin++) {
            if (Seq[stepCounter][pin] != 0) {
                pins[pin].writeSync(1);
            }
            else {
                pins[pin].writeSync(0);
            }
        }
        setTimeout(res, 5);
    });
};
const runMotor = async () => {
    for (var s = 0; s < 50; s++) {
        for (var pin = 0; pin < 9; pin++) {
            await step(pin);
        }
    }
};
const runWater = async (interval) => {
    //waterPin.writeSync(0);
    await new Promise((res) => setTimeout(() => {
        //waterPin.writeSync(1);
        res(undefined);
    }, interval || waterTimeout));
};
// Routes
// server.register(fastifyStatic, {
//   root: path.join(__dirname, "build"),
//   prefix: "/",
// });
server.get("/", async (request, reply) => {
    return { RabbotServer: true };
});
server.register(fastify_2.fastifyTRPCPlugin, {
    prefix: '/trpc',
    trpcOptions: { router: router_1.appRouter, createContext: context_1.createContext },
});
server.post("/Food", async (request, reply) => {
    await runMotor();
    return { Food: true };
});
server.get("/breed", async (request, reply) => {
    const breed = await exports.prisma.breedType.create({
        data: {
            name: 'Flemish Giant',
        }
    });
    return breed;
});
server.post("/Water", async (request, reply) => {
    const { interval } = request.body;
    await runWater(interval);
    //waterPin.writeSync(1);
    return { Water: true };
});
// Run the server!
const start = async () => {
    try {
        await server.listen({ port: 5000, host: "0.0.0.0" });
    }
    catch (err) {
        server.log.error(err);
        process.exit(1);
    }
};
start();
//# sourceMappingURL=app.js.map