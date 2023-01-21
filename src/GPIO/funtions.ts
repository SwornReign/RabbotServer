import { Gpio as gpio } from 'onoff';
import HX711 from '@ataberkylmz/hx711';

//Weight
const WeightSCLK = 7;
const WeightDATA = 0;

const WeightSystem = new HX711(WeightSCLK, WeightDATA);

//use GPIO pin numbers
const stepPins = [17, 22, 27, 23];

//const waterPin = new gpio(24, "out");
let pins: any = [];
const waterTimeout = 1000;

let Seq: any = []; // New
Seq[0] = [1, 0, 0, 0];
Seq[1] = [1, 1, 0, 0];
Seq[2] = [0, 1, 0, 0];
Seq[3] = [0, 1, 1, 0];
Seq[4] = [0, 0, 1, 0];
Seq[5] = [0, 0, 1, 1];
Seq[6] = [0, 0, 0, 1];
Seq[7] = [1, 0, 0, 1];
Seq[8] = [0, 0, 0, 0];

let Seq1: any = []; // New
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
  pins[i] = new gpio(stepPins[i], 'out');
}

// Water
const waterPin = new gpio(24, 'out');

const step = async function (stepCounter: number) {
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

const step1 = async function (stepCounter: number) {
  return new Promise((res) => {
    for (var pin = 0; pin < 4; pin++) {
      if (Seq1[stepCounter][pin] != 0) {
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

const runWater = async (interval: number) => {
  waterPin.writeSync(0);

  await new Promise((res) =>
    setTimeout(() => {
      waterPin.writeSync(1);
      res(undefined);
    }, interval || waterTimeout),
  );
};

const runWeight = async () => {
  WeightSystem.powerUp();
  let WeightInput = WeightSystem.getScale();
  console.log('Grams: ' + WeightInput);
  return new Promise((res) => {
    WeightSystem.powerDown();

    setTimeout(res, 5);
  });
};

waterPin.writeSync(1); // Set to Default Water

WeightSystem.tare();

let WeightInput = WeightSystem.getScale();
console.log('Grams: ' + WeightInput);

let units = WeightSystem.getUnits();
console.log('Units: ' + units);

let offset = WeightSystem.getOffset();
console.log('Offset: ' + offset);

WeightSystem.powerDown(); // Set to Default Weight

export { runMotor, step, runWater, runWeight };
