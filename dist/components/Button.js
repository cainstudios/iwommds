"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _react = _interopRequireDefault(require("react"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
var Button = function Button(props) {
  return /*#__PURE__*/_react.default.createElement("button", {
    className: "wtfiwommds",
    style: {
      backgroundColor: '#eb4c89',
      color: 'white',
      border: 'none',
      padding: '10px 20px',
      textDecoration: 'none',
      cursor: 'pointer',
      borderRadius: '10px'
    }
  }, props.label);
};
var _default = Button;
exports.default = _default;