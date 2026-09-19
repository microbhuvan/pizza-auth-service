import { createDefaultEsmPreset } from "ts-jest";

const tsJestTransformCfg = createDefaultEsmPreset().transform;

/** @type {import("jest").Config} */
export default {
  testEnvironment: "node",

  transform: {
    ...tsJestTransformCfg,
  },
  verbose: true,
  extensionsToTreatAsEsm: [".ts"],

  moduleNameMapper: {
    "^(\\.{1,2}/.*)\\.js$": "$1",
  },
};
