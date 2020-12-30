import { Layout, Menu } from 'antd';
import { AuthRoute, Loader, PrivateRoute } from 'components/common';
import * as Pages from 'pages';
import React from 'react';
import { BrowserRouter, Link, Route, Switch } from 'react-router-dom';

const { Header, Content } = Layout;

export default function Router() {
	return (
		<BrowserRouter>
			<Loader />
			<Layout style={{ minHeight: '100vh' }}>
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
						<Menu.Item key="4">
							<Link to="/tasks" className="link">
								Tasks
							</Link>
						</Menu.Item>
						<Menu.Item key="5">
							<Link to="/dashboard" className="link">
								Dashboard
							</Link>
						</Menu.Item>
					</Menu>
				</Header>
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
