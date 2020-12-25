import React from 'react';
import ReactDOM from 'react-dom';
import store from 'store';
import 'styles/style.scss';
import reportWebVitals from './reportWebVitals';
import Router from './Router';

// reportWebVitals(console.log);

console.log('redux store data', store);

ReactDOM.render(
	<React.StrictMode>
		<Router />
	</React.StrictMode>,
	document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
