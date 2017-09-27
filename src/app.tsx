
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import Routes from './Routes';
import './app.css';

/**
 * render react router when window loads
 */
window.onload = () => {
   ReactDOM.render(<Routes />, document.querySelector('.app'));
};