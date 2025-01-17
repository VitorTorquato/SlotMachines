import type { Config } from '@jest/types';

const config: Config.InitialOptions = {
  testEnvironment: "jsdom",
  transform: {
    "^.+\\.[tj]sx?$": ['ts-jest', {
      tsconfig: {
        esModuleInterop: true,
        jsx: 'react-jsx'
      }
    }]
  },
  moduleNameMapper: {
   '\\.(png|jpg|jpeg|gif|svg)$': '<rootDir>/.jest/mocks/fileMock.js',
    '\\.(css|less|sass|scss)$': 'identity-obj-proxy',
  },
  setupFilesAfterEnv: ['<rootDir>/setupTests.ts'],
};

export default config;