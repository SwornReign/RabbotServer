import { Gpio as gpio } from 'onoff'
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

const waterPin = new gpio(24, "out");

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

const runMotor = async () => {
  for (var s = 0; s < 50; s++) {
    for (var pin = 0; pin < 9; pin++) {
      await step(pin);
    }
  }
};

const runWater = async (interval: number) => {
  waterPin.writeSync(0);

  await new Promise((res) =>
    setTimeout(() => {
      waterPin.writeSync(1);
      res(undefined);
    }, interval || waterTimeout)
  );
};

export {
    runMotor,
    step,
    runWater
}