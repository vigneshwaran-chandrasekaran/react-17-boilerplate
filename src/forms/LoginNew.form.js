import { Col, Row } from 'antd';
import { Formik } from 'formik';
import { Form, Input } from 'formik-antd';
import { FormActionButtons } from 'forms';
import React from 'react';
import * as Yup from 'yup';

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

function LoginNewForm({ onSubmit }) {
	return (
		<Formik
			enableReinitialize
			initialValues={initialValues}
			validationSchema={FormSchema}
			onSubmit={onSubmit}
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

export default LoginNewForm;
