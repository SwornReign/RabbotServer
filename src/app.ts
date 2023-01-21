
import path from 'path'
import { Gpio as gpio } from 'onoff'
import fastify from 'fastify';
import { fastifyTRPCPlugin } from '@trpc/server/adapters/fastify';
import { appRouter } from './trpc/router';
import fastifyStatic from '@fastify/static';
import { fileURLToPath } from 'url';
import { fastifyCors } from '@fastify/cors';
import fastifyPrismaClient from 'fastify-prisma-client';
import { createContext } from './trpc/context';
import { PrismaClient } from '@prisma/client';

//const __filename = fileURLToPath(import.meta.url);

//const __dirname = path.dirname(__filename);

export const prisma = new PrismaClient()

const server = fastify({
  maxParamLength: 5000,
});

server.register(fastifyPrismaClient, {});

server.register(fastifyCors, () => {
  return (req: any, callback: any) => {
    const corsOptions = {
      // This is NOT recommended for production as it enables reflection exploits
      origin: true
    };

    // do not include CORS headers for requests from localhost
    if (/^localhost$/m.test(req.headers.origin)) {
      corsOptions.origin = false
    }

    // callback expects two parameters: error and options
    callback(null, corsOptions)
  }
})


//use GPIO pin numbers
const stepPins = [17, 22, 27, 23];

//const waterPin = new gpio(24, "out");
const pinNumber = stepPins.length;
let pins: gpio[] = [];
const waterTimeout = 1000;

//waterPin.writeSync(1); // Set to Default

let Seq: number[][] = [];
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



var step = async function (stepCounter: number) {
  return new Promise((res) => {
    for (var pin = 0; pin < 4; pin++) {
      if (Seq[stepCounter][pin] != 0) {
        pins[pin].writeSync(1);
      } else {
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

const runWater = async (interval: number) => {
  //waterPin.writeSync(0);

  await new Promise((res) =>
    setTimeout(() => {
      //waterPin.writeSync(1);
      res(undefined);
    }, interval || waterTimeout)
  );
};

// Routes
// server.register(fastifyStatic, {
//   root: path.join(__dirname, "build"),
//   prefix: "/",
// });

server.get("/", async (request, reply) => {
  return { RabbotServer: true };
});

server.register(fastifyTRPCPlugin, {
  prefix: '/trpc',
  trpcOptions: { router: appRouter, createContext },
});

server.post("/Food", async (request, reply) => {
  await runMotor();
  return { Food: true };
});


server.get("/breed", async (request, reply) => {
  const breed = await prisma.breedType.create({
                data: {
                    name: 'Flemish Giant',
                }
            })
  return breed;
});

server.post("/Water", async (request, reply) => {
  const { interval } = request.body as { interval: number };
  await runWater(interval);
  //waterPin.writeSync(1);
  return { Water: true };
});

// Run the server!
const start = async () => {
  try {
    await server.listen({ port: 5000, host: "0.0.0.0" });
  } catch (err) {
    server.log.error(err);
    process.exit(1);
  }
};
start();
