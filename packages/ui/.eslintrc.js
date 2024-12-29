/** @type {import("eslint").Linter.Config} */
module.exports = {
  root: true,
  extends: ["@authsmith/eslint-config/react-internal"],
  parser: "@typescript-eslint/parser",
  parserOptions: {
    project: "./tsconfig.lint.json",
    tsconfigRootDir: __dirname,
  },
};
