"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Title = Title;

var _react = _interopRequireDefault(require("react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function Title(_ref) {
  var _ref$color = _ref.color,
      color = _ref$color === void 0 ? 'default' : _ref$color,
      children = _ref.children;
  return /*#__PURE__*/_react.default.createElement("h1", {
    style: {
      color: color
    }
  }, children);
}