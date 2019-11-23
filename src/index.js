import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Clock from './Clock'
import * as serviceWorker from './serviceWorker';

ReactDOM.render(<App />, document.getElementById('root'));
//First way - should not use
// function stick() { 
//     ReactDOM.render(<Clock />, document.getElementById('clock'));
// }
// setInterval(stick, 1000);

//Second way - render() function automatically called with setInterval
ReactDOM.render(<Clock />, document.getElementById('clock'));

if (module.hot) {
    module.hot.accept();
}

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
