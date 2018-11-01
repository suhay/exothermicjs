console.log('here')
module.exports = {
  testRegex: "/.*(__tests__\\/.*)|(.*(test|spec))\\.jsx?$",
  testPathIgnorePatterns: [
    "node_modules",
    ".cache",
    "__snapshots__",
    "public",
    "dist"
  ],
  testEnvironment: "node",
  moduleNameMapper: {
    "Components(.*)$": "<rootDir>/src/components/$1",
    "Modules(.*)$": "<rootDir>/src/components/$1",
    "Root(.*)$": "<rootDir>/$1",
    "\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$": "<rootDir>/__mocks__/fileMock.js",
    "\\.(css|less)$": "<rootDir>/__mocks__/styleMock.js"
  },
  coverageDirectory: "./demo/coverage"
};