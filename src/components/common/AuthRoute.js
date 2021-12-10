import React from 'react';
import { Redirect, Route } from 'react-router-dom';
import PropTypes from 'prop-types';
import { useAuth } from 'hooks';
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
	}
	return <Route {...rest}>{children}</Route>;
}

AuthRoute.propTypes = {
	children: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.node), PropTypes.node]).isRequired,
};

export default AuthRoute;
