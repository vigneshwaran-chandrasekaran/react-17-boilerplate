import { Card, Col, Row } from 'antd';
import { SignupForm } from 'forms';
import React from 'react';

function Signup(props) {
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
