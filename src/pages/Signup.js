import { Card, Col, Row } from 'antd';
import React from 'react';
import { SignupForm } from 'forms';

function Signup() {
	return (
		<Row justify="space-around" align="middle">
			<Col span={9}></Col>
			<Col span={6}>
				<Card>
					<SignupForm />
				</Card>
			</Col>
			<Col span={9}></Col>
		</Row>
	);
}

Signup.propTypes = {};

export default Signup;
