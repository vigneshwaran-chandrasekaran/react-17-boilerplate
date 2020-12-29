import { Col, Row } from 'antd';
import { Formik } from 'formik';
import { Form, Input } from 'formik-antd';
import { FormActionButtons } from 'forms';
import React from 'react';
import { useDispatch } from 'react-redux';
import { userSignup } from 'store/userSlice';
import * as Yup from 'yup';

const FormSchema = Yup.object({
	firstName: Yup.string().required().label('Firstname'),
	lastName: Yup.string().required().label('Lastname'),
	email: Yup.string().email().required().label('Email'),
	password: Yup.string().required().label('Password'),
});

let initialValues = {
	firstName: undefined,
	lastName: undefined,
	email: undefined,
	password: undefined,
};

function SignupForm() {
	const dispatch = useDispatch();

	function handleSubmit(values, { setErrors, resetForm, setSubmitting }) {
		/**
		 * below two keys no needed for post call
		 */

		console.log('values', values);

		dispatch(userSignup(values, setErrors))
			.then((response) => {
				resetForm();
			})
			.catch((e) => {
				console.log('Signup form catch', e);
			})
			.finally(() => {
				setSubmitting(false);
			});
	}

	return (
		<Formik
			enableReinitialize
			initialValues={initialValues}
			validationSchema={FormSchema}
			onSubmit={handleSubmit}
		>
			{({ values, isSubmitting, resetForm }) => (
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
									name="firstName"
									hasFeedback={false}
									showValidateSuccess={false}
								>
									<Input
										name="firstName"
										placeholder="Firstname"
									/>
								</Form.Item>
							</Col>
						</Row>
						<Row gutter={8} justify="space-between">
							<Col span={24}>
								<Form.Item
									name="lastName"
									hasFeedback={false}
									showValidateSuccess={false}
								>
									<Input
										name="lastName"
										placeholder="Lastname"
									/>
								</Form.Item>
							</Col>
						</Row>

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

						<Row
							gutter={8}
							justify="space-between"
							className="mt-30"
						>
							<Col span={24}>
								<Form.Item
									name="password"
									hasFeedback={false}
									showValidateSuccess={false}
								>
									<Input.Password
										name="password"
										placeholder="Password"
									/>
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

export default SignupForm;
