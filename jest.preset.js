const nxPreset = require('@nrwl/jest/preset').default;

module.exports = { 
  ...nxPreset,
  transform: {
    '^.+\\.(ts|tsx)$': 'ts-jest',
  },
  moduleFileExtensions: ['ts', 'js', 'tsx'],
  modulePathIgnorePatterns: ['<rootDir>/out/']
}