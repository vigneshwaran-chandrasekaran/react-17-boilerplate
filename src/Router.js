import { Layout, Menu } from 'antd';
import { AuthRoute, Loader, PrivateRoute } from 'components/common';
import * as Pages from 'pages';
import React from 'react';
import { BrowserRouter, Link, Route, Switch } from 'react-router-dom';

const { Header, Footer, Sider, Content } = Layout;

export default function Router() {
	return (
		<>
			<BrowserRouter>
				<Loader />
				<Switch>
					{/* Unauth routes start here*/}
					<Layout>
						<Header className="header">
							<Menu
								theme="dark"
								mode="horizontal"
								defaultSelectedKeys={['2']}
							>
								<Menu.Item key="1">
									<Link to="/home" className="link">
										Home
									</Link>
								</Menu.Item>
								<Menu.Item key="2">
									<Link to="/signup" className="link">
										Signup
									</Link>
								</Menu.Item>
								<Menu.Item key="3">
									<Link to="/login" className="link">
										Login
									</Link>
								</Menu.Item>
							</Menu>
						</Header>
						<Content>
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
							</Switch>
						</Content>
					</Layout>
					{/* Unauth routes ends here*/}
					<Layout style={{ minHeight: '100vh' }}>
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
		</>
	);
}
