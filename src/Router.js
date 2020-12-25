import { Layout } from 'antd';
import { AuthRoute, Loader, PrivateRoute } from 'components/common';
import * as Pages from 'pages';
import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

const { Content } = Layout;

export default function Router() {
	return (
		<BrowserRouter>
			<Switch>
				<Route exact path={['/home', '/']}>
					<Pages.Home />
				</Route>
				<AuthRoute exact path="/login">
					<Pages.Login />
				</AuthRoute>
				<AuthRoute exact path="/signup">
					<Pages.Signup />
				</AuthRoute>
				<Layout style={{ minHeight: '100vh' }}>
					<Loader />
					<Layout>
						<Content style={{ padding: '25px' }}>
							<Switch>
								{/* authenticated pages starts*/}
								<PrivateRoute path="/dashboard">
									<Pages.Dashboard />
								</PrivateRoute>
								{/* authenticated pages ends*/}
								<Route path="*">
									<Pages.NotFound />
								</Route>
							</Switch>
						</Content>
					</Layout>
				</Layout>
			</Switch>
		</BrowserRouter>
	);
}
