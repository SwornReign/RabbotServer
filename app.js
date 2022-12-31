"use strict";

const path = require("path");
const gpio = require("onoff").Gpio;
const fastify = require("fastify")({ logger: true });

//use GPIO pin numbers
const stepPins = [17, 22, 27, 23];
const waterPin = new gpio(24, "out");
const pinNumber = stepPins.length;
let pins = [];
const waterTimeout = 1000;
waterPin.writeSync(1); // default off

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

for (var i = 0; i < pinNumber; i++) {
  pins[i] = new gpio(stepPins[i], "out");
}

var step = async function (stepCounter) {
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

const runWater = async (interval) => {
  waterPin.writeSync(0);

  // await new Promise((res) => setTimeout(() => {

  //   res()
  // }, ))

  await new Promise((res) =>
    setTimeout(() => {
      waterPin.writeSync(1);
      res();
    }, interval || waterTimeout)
  );
};

// Routes
fastify.register(require("@fastify/static"), {
  root: path.join(__dirname, "build"),
  prefix: "/",
});

fastify.post("/Food", async (request, reply) => {
  await runMotor();
  return { Food: true };
});

fastify.post("/Water", async (request, reply) => {
  const { interval } = request.body;
  await runWater(interval);
  //waterPin.writeSync(1);
  return { Water: true };
});

// Run the server!
const start = async () => {
  try {
    await fastify.listen({ port: 80, host: "0.0.0.0" });
  } catch (err) {
    fastify.log.error(err);
    process.exit(1);
  }
};
start();
