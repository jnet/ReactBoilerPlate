webpackHotUpdate(0,{

/***/ 160:
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __extends = (this && this.__extends) || function (d, b) {
	    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	    function __() { this.constructor = d; }
	    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	};
	// a simple example component
	// using react and typescript
	var React = __webpack_require__(2);
	var ButtonActionTypes = __webpack_require__(161);
	var ButtonAction = __webpack_require__(162);
	var ButtonStore = __webpack_require__(163);
	var Dispatcher = __webpack_require__(164);
	var Button = (function (_super) {
	    __extends(Button, _super);
	    function Button(props) {
	        _super.call(this, props);
	        var store = new ButtonStore();
	        store.Subscribe(this);
	        this.state = {
	            SayHello: false
	        };
	    }
	    /**
	    * the notify method takes
	    * a javascript object from
	    * a store that it is subscribed
	    * to, it then updates its state
	    * so the compnent can be re-rendered
	    * @data {object} the new state of the component
	    */
	    Button.prototype.Notify = function (data) {
	        this.setState(data);
	    };
	    Button.prototype.render = function () {
	        return (React.createElement("div", null, React.createElement("a", {href: "#", onClick: this.handleClick.bind(this), className: "btn btn-default"}, "say hello again 7"), React.createElement("div", null, this.state.SayHello ? "Hello!!" : "")));
	    };
	    /**
	    * handles the click event of the anchor
	    * by sending a new action to the application
	    * dispatcher which will then be delivered
	    * to all registered stores
	    */
	    Button.prototype.handleClick = function () {
	        var buttonAction = new ButtonAction({ SayHello: true }, ButtonActionTypes.CLICKED);
	        Dispatcher.dispatch(buttonAction);
	    };
	    return Button;
	}(React.Component));
	module.exports = Button;


/***/ }

})