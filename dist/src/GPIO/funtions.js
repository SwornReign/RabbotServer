"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.runWeight = exports.runWater = exports.step = exports.runMotor = void 0;
const tslib_1 = require("tslib");
const onoff_1 = require("onoff");
const hx711_1 = tslib_1.__importDefault(require("@ataberkylmz/hx711"));
//Weight
const WeightSCLK = 7;
const WeightDATA = 0;
const WeightSystem = new hx711_1.default(WeightSCLK, WeightDATA);
//use GPIO pin numbers
const stepPins = [17, 22, 27, 23];
//const waterPin = new gpio(24, "out");
let pins = [];
const waterTimeout = 1000;
let Seq = []; // New
Seq[0] = [1, 0, 0, 0];
Seq[1] = [1, 1, 0, 0];
Seq[2] = [0, 1, 0, 0];
Seq[3] = [0, 1, 1, 0];
Seq[4] = [0, 0, 1, 0];
Seq[5] = [0, 0, 1, 1];
Seq[6] = [0, 0, 0, 1];
Seq[7] = [1, 0, 0, 1];
Seq[8] = [0, 0, 0, 0];
let Seq1 = []; // New
Seq1[0] = [0, 0, 0, 1];
Seq1[1] = [0, 0, 1, 1];
Seq1[2] = [0, 0, 1, 0];
Seq1[3] = [0, 1, 1, 0];
Seq1[4] = [0, 1, 0, 0];
Seq1[5] = [1, 1, 0, 0];
Seq1[6] = [1, 0, 0, 0];
Seq1[7] = [1, 0, 0, 1];
Seq1[8] = [0, 0, 0, 0];
//let Seq = []; // Old
//Seq[0] = [1, 0, 0, 0];
//Seq[1] = [1, 1, 0, 0];
//Seq[2] = [0, 1, 0, 0];
//Seq[3] = [0, 1, 1, 0];
//Seq[4] = [0, 0, 1, 0];
//Seq[5] = [0, 0, 1, 1];
//Seq[6] = [0, 0, 0, 1];
//Seq[7] = [1, 0, 0, 1];
//Seq[8] = [0, 0, 0, 0];
// Cache Motor Pin
for (var i = 0; i < 4; i++) {
    pins[i] = new onoff_1.Gpio(stepPins[i], 'out');
}
// Water
const waterPin = new onoff_1.Gpio(24, 'out');
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
const step1 = async function (stepCounter) {
    return new Promise((res) => {
        for (var pin = 0; pin < 4; pin++) {
            if (Seq1[stepCounter][pin] != 0) {
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
        for (var pin = 0; pin < Seq.length; pin++) {
            await step(pin);
        }
    }
    for (var s = 0; s < 50; s++) {
        for (var pin = 0; pin < Seq1.length; pin++) {
            await step1(pin);
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
const runWeight = async () => {
    WeightSystem.powerUp();
    let WeightInput = WeightSystem.getScale();
    console.log('Grams: ' + WeightInput);
    return new Promise((res) => {
        WeightSystem.powerDown();
        setTimeout(res, 5);
    });
};
exports.runWeight = runWeight;
waterPin.writeSync(1); // Set to Default Water
WeightSystem.tare();
let WeightInput = WeightSystem.getScale();
console.log('Grams: ' + WeightInput);
let units = WeightSystem.getUnits();
console.log('Units: ' + units);
let offset = WeightSystem.getOffset();
console.log('Offset: ' + offset);
WeightSystem.powerDown(); // Set to Default Weight
//# sourceMappingURL=funtions.js.map