import { PoweroffOutlined } from '@ant-design/icons';
import { Layout, Menu } from 'antd';
import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { Link, useLocation } from 'react-router-dom';
import { useAuth } from 'hooks';
import { userLogout } from 'store/userSlice';

const { Header } = Layout;

export function findUrlPathId(path) {
	switch (path) {
		case '/signup':
			return '2';
		case '/login':
			return '3';
		case '/tasks':
			return '4';
		case '/dashboard':
			return '5';
		case '/tasks-list':
			return '6';
		default:
			return '1';
	}
}

function HeaderCustom() {
	const userData = useAuth();
	const dispatch = useDispatch();
	const [key, setKey] = useState();
	const location = useLocation();

	useEffect(() => {
		const pathId = findUrlPathId(location?.pathname);
		setKey(pathId);
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [location?.pathname, userData, userData?._id]);

	const handleLogout = () => {
		console.log('handle logout called');
		dispatch(userLogout());
	};

	if (userData && userData?._id) {
		return (
			<Header className="header">
				<Menu theme="dark" mode="horizontal" selectedKeys={key}>
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
					<Menu.Item key="6">
						<Link to="/tasks-list" className="link">
							Tasks List
						</Link>
					</Menu.Item>

					<Menu.Item key="99" onClick={handleLogout} className="link">
						<PoweroffOutlined />
						Logout
					</Menu.Item>
				</Menu>
			</Header>
		);
	}

	return (
		<Header className="header">
			<Menu theme="dark" mode="horizontal" selectedKeys={key}>
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
