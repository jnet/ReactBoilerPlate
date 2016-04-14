
import React = require('react');
import ReactDOM = require('react-dom');
import Button = require('./components/button');

function init() {
    var content = document.querySelector(".content");
    ReactDOM.render(<Button Text="hello" />, content);
}

export = init;


