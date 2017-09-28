export default function({ types: t }) {
  return {
    visitor: {
      ArrowFunctionExpression(path, state) {
        const newFunction = t.classMethod(
          "method",
          t.identifier(path.parent.key.name),
          path.node.params,
          path.node.body
        );

        path.parentPath.replaceWith(newFunction);
      }
    }
  };
}
