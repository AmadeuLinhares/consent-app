module.exports = {
  testEnvironment: 'jsdom', // Sets the testing environment to jsdom
  setupFilesAfterEnv: ["<rootDir>/setupTests.ts"], // Extends Jest with custom matchers
  transform: {
    // Transform files with babel-jest
  '^.+\\.jsx?$': 'babel-jest',
  '^.+\\.tsx?$': 'ts-jest',
  },
  moduleNameMapper: {    // Handle module aliases (if you use them in your project)
    '^@components/(.*)$': '<rootDir>/src/components/$1',
    '^@pages/(.*)$': '<rootDir>/src/pages/$1',
    '^@router/(.*)$': '<rootDir>/src/router/$1',
    '^@api/(.*)$': '<rootDir>/src/api/$1',
    '^@storage/(.*)$': '<rootDir>/src/storage/$1',
    '^@layouts/(.*)$': '<rootDir>/src/layouts/$1',
    '^@theme/(.*)$': '<rootDir>/src/theme/$1',
    '^@configs/(.*)$': '<rootDir>/src/configs/$1',
    '^@axios/(.*)$': '<rootDir>/src/axios/$1',
    "^.+\\.svg$": "jest-svg-transformer",
    "^.+\\.(css|less|scss)$": "identity-obj-proxy"
  },
}
