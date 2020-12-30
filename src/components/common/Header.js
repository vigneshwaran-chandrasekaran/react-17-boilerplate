import { Layout, Menu } from 'antd';
import { useAuth } from 'hooks';
import React from 'react';
import { Link } from 'react-router-dom';

const { Header } = Layout;

function HeaderCustom() {
	const userData = useAuth();

	if (userData && userData?._id) {
		return (
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
		);
	}

	return (
		<Header className="header">
			<Menu theme="dark" mode="horizontal" defaultSelectedKeys={['2']}>
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
	);
}

export default HeaderCustom;
