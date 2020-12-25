import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import store from 'store';
import { ThemeProvider } from 'styled-components';
import 'styles/style.scss';
import reportWebVitals from './reportWebVitals';
import Router from './Router';

// reportWebVitals(console.log);

console.log('redux store data', store);

const theme = {
	main: 'mediumseagreen',
	gray_1: '#989989',
	red: 'red',
};

console.log('theme store data', theme);

ReactDOM.render(
	<React.StrictMode>
		<Provider store={store}>
			<ThemeProvider theme={theme}>
				<Router />
			</ThemeProvider>
		</Provider>
	</React.StrictMode>,
	document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
