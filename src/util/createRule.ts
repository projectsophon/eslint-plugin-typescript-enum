import { ESLintUtils } from "@typescript-eslint/experimental-utils";

const { version } = require("../../package.json");

const createRule = ESLintUtils.RuleCreator(
  (name) =>
    `https://github.com/projectsophon/eslint-plugin-typescript-enum/blob/v${version}/docs/rules/${name}.md`
);

export { createRule };
