"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

exports.default = function (_ref) {
  var t = _ref.types;

  return {
    visitor: _defineProperty({
      // replace simple arrow functions
      ArrowFunctionExpression: function ArrowFunctionExpression(path) {
        var newFunction = t.classMethod("method", t.identifier(path.parent.key.name), path.node.params, path.node.body);

        path.parentPath.replaceWith(newFunction);
      }
    }, "ArrowFunctionExpression", function ArrowFunctionExpression(path) {})
  };
};

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
//# sourceMappingURL=index.js.map