var React = require('react');
var ReactDOM = require('react-dom');
function init() {
    var content = document.querySelector(".content");
    console.log('content');
    console.log(content);
    ReactDOM.render(React.createElement("div", null, "Hello world"), content);
}
module.exports = init;
//# sourceMappingURL=App.js.map