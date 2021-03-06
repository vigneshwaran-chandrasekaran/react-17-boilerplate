import { useAuth } from 'hooks';
import React from 'react';
import { Redirect, Route } from 'react-router-dom';

function AuthRoute({ children, ...rest }) {
	const userData = useAuth();

	if (userData && userData?._id && userData?.status === 1) {
		return (
			<Redirect
				to={{
					pathname: '/tasks',
				}}
			/>
		);
	} else {
		return <Route {...rest}>{children}</Route>;
	}
}

export default AuthRoute;
