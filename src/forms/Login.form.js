import { Col, Row } from 'antd';
import { Formik } from 'formik';
import { Form, Input } from 'formik-antd';
import React from 'react';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import * as Yup from 'yup';
import { userLogin } from 'store/userSlice';
import { FormActionButtons } from 'forms';

const FormSchema = Yup.object({
	email: Yup.string().email().required().label('Email'),
	password: Yup.string().required().label('Password'),
});

let initialValues = {
	email: undefined,
	password: undefined,
};

if (process.env.NODE_ENV === 'development') {
	/**
	 * On development set login form details prefilled with data
	 */
	initialValues = {
		email: 'vigneshwaran@gmail.co.in',
		password: 'admin1234',
	};
}

function LoginForm() {
	const dispatch = useDispatch();
	const history = useHistory();

	// console.log('store initialValues', initialValues);
	function handleSubmit(values, { setErrors, resetForm, setSubmitting }) {
		/**
		 * below two keys no needed for post call
		 */

		console.log('values', values);

		dispatch(userLogin(values, setErrors))
			.then(() => {
				setSubmitting(false);
				resetForm();
				history.push('/tasks');
			})
			.catch((e) => {
				setSubmitting(false);
				console.log('Login form catch', e);
			})
			.finally(() => {
				// setSubmitting(false);
			});
	}

	return (
		<Formik
			enableReinitialize
			initialValues={initialValues}
			validationSchema={FormSchema}
			onSubmit={handleSubmit}
		>
			{({ isSubmitting, resetForm }) => (
				<Form layout="vertical" hideRequiredMark>
					<div
						style={{
							maxHeight: '350px',
							overflowY: 'auto',
							overflowX: 'hidden',
							padding: '10px',
						}}
					>
						<Row gutter={8} justify="space-between">
							<Col span={24}>
								<Form.Item
									name="email"
									hasFeedback={false}
									showValidateSuccess={false}
								>
									<Input name="email" placeholder="Email" />
								</Form.Item>
							</Col>
						</Row>

						<Row gutter={8} justify="space-between" className="mt-30">
							<Col span={24}>
								<Form.Item
									name="password"
									hasFeedback={false}
									showValidateSuccess={false}
								>
									<Input.Password name="password" placeholder="Password" />
								</Form.Item>
							</Col>
						</Row>
					</div>
					<FormActionButtons
						resetForm={resetForm}
						isSubmitting={isSubmitting}
						showDebug={false}
						saveText="Login"
						cancelText="Reset"
					/>
				</Form>
			)}
		</Formik>
	);
}

export default LoginForm;
