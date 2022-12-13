module.exports = {
  env: {
    browser: true,
    es6: true
  },
  extends: [
    "plugin:react/recommended",
    "plugin:react-hooks/recommended",
    "airbnb",
    "plugin:@typescript-eslint/recommended",
    "plugin:@typescript-eslint/recommended-requiring-type-checking"
  ],
  parser: "@typescript-eslint/parser",
  parserOptions: {
    ecmaFeatures: {
      jsx: true
    },
    ecmaVersion: 12,
    sourceType: "module",
    project: "./packages/*/tsconfig.json",
    tsconfigRootDir: __dirname
  },
  plugins: [
    "react",
    "@typescript-eslint",
    "react-hooks",
    "import"
  ],
  settings: {
    "import/extensions": [".js", ".jsx", ".ts", ".tsx"],
    "import/parsers": {
      "@typescript-eslint/parser": [".ts", ".tsx"]
    },
    "import/resolver": {
      typescript: {
        project: [
          "packages/*/tsconfig.json",
        ],
      },
      node: {
        extensions: [".js", ".jsx", ".ts", ".tsx"]
      }
    }
  },
  rules: {
    semi: 0,
    "import/prefer-default-export": 0,
    "react/react-in-jsx-scope": 0,
    "react/jsx-filename-extension": [1, {
      extensions: [".js", ".jsx", ".tsx"]
    }],
    "import/no-extraneous-dependencies": 0,
    "react/jsx-props-no-spreading": 0,
    "react/require-default-props": 0,
    "import/no-unresolved": [
      2,
      {
        caseSensitive: false
      }
    ],
    "import/extensions": 0,
    "max-len": 0,
    "no-unused-vars": "off",
    "@typescript-eslint/no-unused-vars": ["error"],
    "no-case-declarations": 0,
    "no-param-reassign": 0,
    quotes: ["warn", "single"],
    "implicit-arrow-linebreak": "off",
    "object-curly-newline": "off",
    "no-confusing-arrow": "off",
    "jsx-quotes": "off",
    "react/jsx-indent": "off",
    indent: "off",
    "function-paren-newline": "off",
    "operator-linebreak": "off",
    "func-call-spacing": "off",
    "no-shadow": "off",
    "@typescript-eslint/no-shadow": "error",
    "import/no-webpack-loader-syntax": "off",
    "import/no-unresolved": "off",
    "react/no-array-index-key": "off",
    "@typescript-eslint/no-misused-promises": "off",
    "react/jsx-no-useless-fragment": "warn",
    "react/jsx-wrap-multilines": ["error", {"declaration": false, "assignment": false}],
    "@typescript-eslint/no-unsafe-call": "off",
    "@typescript-eslint/no-unsafe-member-access": "off",
    "@typescript-eslint/no-unsafe-assignment": "off"
  },
  globals: {
    JSX: "readonly"
  }
}