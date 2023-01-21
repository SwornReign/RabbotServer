declare const step: (stepCounter: number) => Promise<unknown>;
declare const runMotor: () => Promise<void>;
declare const runWater: (interval: number) => Promise<void>;
export { runMotor, step, runWater };
