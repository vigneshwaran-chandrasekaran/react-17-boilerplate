import { Card, Col, Row } from 'antd';
import { LoginForm } from 'forms';
import React from 'react';

function Login() {
	return (
		<Row justify="space-around" align="middle">
			<Col span={9}></Col>
			<Col span={6}>
				<Card>
					<LoginForm />
				</Card>
				<div style={{ marginTop: '25px' }}>
					<p>Test login credentials</p>
					<p>
						<strong>Email:</strong> vigneshwaran@gmail.co.in
					</p>
					<p>
						<strong>Password:</strong> admin1234
					</p>
				</div>
			</Col>
			<Col span={9}></Col>
		</Row>
	);
}

Login.propTypes = {};

export default Login;
