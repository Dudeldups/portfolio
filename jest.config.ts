import type { Config } from "jest";

export default async (): Promise<Config> => {
  return {
    preset: "ts-jest",
    testEnvironment: "jsdom",
    setupFilesAfterEnv: ["<rootDir>/__test__/jest.setup.ts"],
    moduleNameMapper: {
      "\\.(css|less|sass|scss)$": "identity-obj-proxy",
      "^.+\\.svg$": "jest-transformer-svg",
    },
    transform: {
      "^.+\\.(ts|tsx)$": ["ts-jest", { tsconfig: "tsconfig.app.json" }],
    },
    testMatch: ["**/?(*.)+(spec|test).[tj]s?(x)"],
  };
};
