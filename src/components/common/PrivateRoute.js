import { redirectToLogin } from 'api/authentication';
import { getUserData } from 'helpers/data-parser';
import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Redirect, Route, useLocation } from 'react-router-dom';
import { setRecentUrl } from 'store/appSlice';

function useQuery() {
	return new URLSearchParams(useLocation().search);
}

function PrivateRoute({ children, history, location = {}, ...rest }) {
	console.log('location 111', location);
	const dispatch = useDispatch();
	const pathData = useLocation();
	const { pathname = null } = location;
	let userData = getUserData();
	const query = useQuery();

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

	if (query.has('userInfo')) {
		return (
			<Redirect
				to={{
					pathname: pathData.pathname,
				}}
			/>
		);
	}

	if (userData && userData.id) {
		return <Route {...rest}>{children}</Route>;
	} else {
		redirectToLogin();
		return false;
	}
}

export default PrivateRoute;
