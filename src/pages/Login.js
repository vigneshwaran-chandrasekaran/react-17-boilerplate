import { Card, Col, Row } from 'antd';
import { LoginForm } from 'forms';
import React from 'react';

function Login(props) {
	return (
		<Row justify="space-around" align="middle">
			<Col span={9}></Col>
			<Col span={6}>
				<Card>
					<LoginForm />
				</Card>
			</Col>
			<Col span={9}></Col>
		</Row>
	);
}

Login.propTypes = {};

export default Login;
