import { Col, Row } from 'antd';
import { LoginForm } from 'forms';
import React from 'react';

function Login(props) {
	return (
		<Row justify="space-around" align="middle">
			<Col span={12}>
				<LoginForm />
			</Col>
			<Col span={12}>
				<LoginForm />
			</Col>
		</Row>
	);
}

Login.propTypes = {};

export default Login;
