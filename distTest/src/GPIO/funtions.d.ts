declare const step: (stepCounter: number) => Promise<unknown>;
declare const runMotor: () => Promise<void>;
declare const runWater: (interval: number) => Promise<void>;
declare const runWeight: () => Promise<number>;
export { runMotor, step, runWater, runWeight };
