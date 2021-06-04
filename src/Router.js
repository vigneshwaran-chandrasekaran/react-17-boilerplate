import { Layout } from 'antd';
import { AuthRoute, Header, Loader, PrivateRoute } from 'components/common';
import * as Pages from 'pages';
import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

const { Content } = Layout;

export default function Router() {
	return (
		<BrowserRouter basename={process.env.PUBLIC_URL}>
			<Loader />
			<Layout style={{ minHeight: '100vh' }}>
				<Header />
				<Content style={{ padding: '25px' }}>
					<Switch>
						{/* Unauth routes start here*/}
						<Route exact path={['/home', '/']}>
							<Pages.Home />
						</Route>
						{/* Unauth routes ends here*/}
						<AuthRoute exact path="/login">
							<Pages.Login />
						</AuthRoute>
						<AuthRoute exact path="/signup">
							<Pages.Signup />
						</AuthRoute>
						{/* authenticated pages starts*/}
						<PrivateRoute exact path="/tasks">
							<Pages.Tasks />
						</PrivateRoute>
						<PrivateRoute path="/dashboard">
							<Pages.Dashboard />
						</PrivateRoute>
						<PrivateRoute path="/tasks-list">
							<Pages.TasksList />
						</PrivateRoute>
						{/* authenticated pages ends*/}
						<Route path="*">
							<Pages.NotFound />
						</Route>
					</Switch>
				</Content>
			</Layout>
		</BrowserRouter>
	);
}
