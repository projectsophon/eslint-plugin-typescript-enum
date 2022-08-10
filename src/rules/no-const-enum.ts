import { createRule } from "../util";

const noConstEnum = createRule({
  name: "no-const-enum",
  meta: {
    type: "problem",
    docs: {
      description: "Disallow the use of const enums",
      recommended: "error",
    },
    messages: {
      message: "Unexpected const enum.",
    },
    schema: [],
  },
  defaultOptions: [],
  create: (context) => ({
    TSEnumDeclaration: (node) => {
      if (node.const === true) {
        context.report({
          node,
          messageId: "message",
        });
      }
    },
  }),
});

export default noConstEnum;
