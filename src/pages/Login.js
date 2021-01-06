import { Card, Col, Row } from 'antd';
import { LoginForm, LoginNewForm } from 'forms';
import React from 'react';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { userLogin } from 'store/userSlice';

function Login() {
	const dispatch = useDispatch();
	const history = useHistory();

	// console.log('store initialValues', initialValues);
	function handleSubmit(values, { setErrors, resetForm, setSubmitting }) {
		/**
		 * below two keys no needed for post call
		 */

		console.log('values', values);

		dispatch(userLogin(values, setErrors))
			.then((response) => {
				resetForm();
				history.push('/tasks');
			})
			.catch((e) => {
				console.log('Login form catch', e);
			})
			.finally(() => {
				setSubmitting(false);
			});
	}

	return (
		<Row justify="space-around" align="middle">
			<Col span={8}>
				<Card>
					<h2 className="center">Login Form with redux</h2>
					<LoginForm />
				</Card>
			</Col>
			<Col span={7} className="center">
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
			<Col span={8}>
				<Card>
					<h2 className="center">Pure Login Form</h2>
					<LoginNewForm handleSubmit={handleSubmit} />
				</Card>
			</Col>
		</Row>
	);
}

Login.propTypes = {};

export default Login;
