// A '.tsx' file enables JSX support in the TypeScript compiler, 
// for more information see the following page on the TypeScript wiki:
// https://github.com/Microsoft/TypeScript/wiki/JSX
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var React = require('react');
var Button = (function (_super) {
    __extends(Button, _super);
    function Button(props) {
        _super.call(this, props);
    }
    Button.prototype.render = function () {
        return (React.createElement("div", null, "hello"));
    };
    return Button;
})(React.Component);
module.exports = Button;
//# sourceMappingURL=button.js.map