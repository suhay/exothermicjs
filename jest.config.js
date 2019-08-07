module.exports = {
  transform: {
    "^.+\\.jsx?$": `babel-jest`,
  },
  verbose: true,
  moduleNameMapper: {
    "\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$": `<rootDir>/packages/exothermicjs/__mocks__/fileMock.js`,
    "\\.(css|less)$": `<rootDir>/packages/exothermicjs/__mocks__/styleMock.js`,
  },
  testPathIgnorePatterns: [
    `<rootDir>.*(node_modules)(?!.*exothermicjs.*).*$`,
    `.cache`,
    `__snapshots__`,
    `public`,
    `dist`,
  ],
}
