"use strict";
var gpio = require("onoff").Gpio;
//use GPIO pin numbers
var stepPins = [17, 22, 27, 23];
var pinNumber = stepPins.length;
var pins = [];
var stepCounter = 0;
var timeout = 100;
var stepCount = 9;
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
            }
            else {
                pins[pin].writeSync(0);
            }
        }
        setTimeout(res, 5);
    });
};
console.log("Motor Starting!!!");
const run = async () => {
    for (var s = 0; s < 50; s++) {
        for (var pin = 0; pin < 9; pin++) {
            await step(pin);
        }
    }
};
module.exports = async function (fastify, opts) {
    fastify.get("/", async function (request, reply) {
        return { root: false };
    });
    fastify.post("/1", async function (request, reply) {
        console.log(request.body);
        return request.body;
    });
    fastify.post("/motor", async function (request, reply) {
        console.log(request.body);
        run();
        return request.body;
    });
    fastify.get("/motor", async function (request, reply) {
        run();
        return request.body;
    });
};
//# sourceMappingURL=root.js.map