import { redirectToLogin } from 'api/authentication';
import { useAuth } from 'hooks';
import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Redirect, Route, useLocation } from 'react-router-dom';
import { setRecentUrl } from 'store/appSlice';

function useQuery() {
	return new URLSearchParams(useLocation().search);
}

function PrivateRoute({ children, history, location = {}, ...rest }) {
	const dispatch = useDispatch();
	const pathData = useLocation();
	const userData = useAuth();
	const query = useQuery();

	const { pathname = null } = location;

	useEffect(() => {
		return () => {
			/**
			 * to set last visited page url in redux store
			 */
			if (pathname) {
				dispatch(setRecentUrl(pathname));
			}
		};
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [pathname]);

	if (query.has(process.env.REACT_APP_AUTH_KEY)) {
		return (
			<Redirect
				to={{
					pathname: pathData.pathname,
				}}
			/>
		);
	}

	if (userData && userData?._id) {
		return <Route {...rest}>{children}</Route>;
	} else {
		redirectToLogin();
		return false;
	}
}

export default PrivateRoute;
