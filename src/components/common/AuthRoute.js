import { getUserData } from 'helpers/data-parser';
import React from 'react';
// import { useSelector } from 'react-redux';
import { Redirect, Route } from 'react-router-dom';

function AuthRoute({ children, ...rest }) {
	let userData = getUserData();

	if (userData && userData.id && userData.status === 1) {
		return (
			<Redirect
				to={{
					pathname: '/dashboard',
				}}
			/>
		);
	} else {
		return <Route {...rest}>{children}</Route>;
	}
}

export default AuthRoute;
