"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

exports.default = function (_ref) {
  var t = _ref.types;

  return {
    visitor: {
      ArrowFunctionExpression: function ArrowFunctionExpression(path, state) {
        var newFunction = t.classMethod("method", t.identifier(path.parent.key.name), path.node.params, path.node.body);

        path.parentPath.replaceWith(newFunction);
      }
    }
  };
};
//# sourceMappingURL=index.js.map