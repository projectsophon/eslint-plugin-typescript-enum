import { createRule } from "../util";

const onlyConstEnum = createRule({
  name: "no-const-enum",
  meta: {
    type: "problem",
    docs: {
      description: "Only allow the use of const enums",
      recommended: "error",
    },
    messages: {
      message: "Unexpected non-const enum.",
    },
    schema: [],
  },
  defaultOptions: [],
  create: (context) => ({
    TSEnumDeclaration: (node) => {
      if (node.const === false) {
        context.report({
          node,
          messageId: "message",
        });
      }
    },
  }),
});

export default onlyConstEnum;
