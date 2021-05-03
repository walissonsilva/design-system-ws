"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Container = void 0;

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _templateObject;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var Container = _styledComponents.default.button(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n  cursor: pointer;\n  background-color: #0000dd;\n  padding: 10px 20px;\n  border-radius: 5px;\n  color: white;\n  border: 0;\n  font-size: 1rem;\n  font-weight: 600;\n"])));

exports.Container = Container;