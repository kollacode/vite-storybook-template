module.exports = {
  preset: 'vite-jest',

  testMatch: [
    '**/*.test.ts?(x)',
    '**/__tests__/*.ts?(x)'
  ],
  testEnvironment: 'jest-environment-jsdom'
}