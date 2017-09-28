export default function({ types: t }) {
  return {
    visitor: {
      // replace simple arrow functions
      ArrowFunctionExpression(path) {
        const newFunction = t.classMethod(
          "method",
          t.identifier(path.parent.key.name),
          path.node.params,
          path.node.body
        );

        path.parentPath.replaceWith(newFunction);
      },

      // replace function which returns an object
      ArrowFunctionExpression(path) {}
    }
  };
}
