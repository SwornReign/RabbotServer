"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.runWater = exports.step = exports.runMotor = void 0;
const onoff_1 = require("onoff");
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
const waterPin = new onoff_1.Gpio(24, "out");
const step = async function (stepCounter) {
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
exports.step = step;
const runMotor = async () => {
    for (var s = 0; s < 50; s++) {
        for (var pin = 0; pin < 9; pin++) {
            await step(pin);
        }
    }
};
exports.runMotor = runMotor;
const runWater = async (interval) => {
    waterPin.writeSync(0);
    await new Promise((res) => setTimeout(() => {
        waterPin.writeSync(1);
        res(undefined);
    }, interval || waterTimeout));
};
exports.runWater = runWater;
//# sourceMappingURL=funtions.js.map