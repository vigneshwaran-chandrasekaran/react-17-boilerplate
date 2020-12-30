import { Col, message, Row } from 'antd';
import { Formik } from 'formik';
import { Checkbox, DatePicker, Form, Input, Radio, Select } from 'formik-antd';
import { FormActionButtons } from 'forms';
import { labelOptions, priorityTypes, typeOptions } from 'helpers/enum';
import React from 'react';
import { useDispatch } from 'react-redux';
import { addNewTask } from 'store/taskSlice';
import * as Yup from 'yup';

const { Option } = Select;

const FormSchema = Yup.object({
	title: Yup.string().required().label('Title'),
	description: Yup.string().required().label('Description'),
	dueDate: Yup.string().required().label('Due Date'),
	type: Yup.number().required().label('Type'),
	priority: Yup.number().required().label('Priority'),
	label: Yup.array()
		.required('Label required')
		.min(1, 'Min one label required'),
});

let initialValues = {
	title: undefined,
	description: undefined,
	dueDate: undefined,
	type: undefined,
	priority: undefined,
	label: undefined,
};

function TaskForm() {
	const dispatch = useDispatch();

	function handleSubmit(values, { setErrors, resetForm, setSubmitting }) {
		/**
		 * below two keys no needed for post call
		 */

		console.log('values', values);

		dispatch(addNewTask(values, setErrors))
			.then((response) => {
				message.success('Task added successfully');
				resetForm();
			})
			.catch((e) => {
				console.log('Task form catch', e);
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
			{({ setFieldValue, isSubmitting, resetForm }) => (
				<Form layout="vertical" hideRequiredMark>
					<div>
						<Row gutter={8} justify="space-between">
							<Col span={24}>
								<Form.Item
									name="title"
									label="Title"
									hasFeedback={false}
									showValidateSuccess={false}
								>
									<Input name="title" placeholder="Title" />
								</Form.Item>
							</Col>
						</Row>
						<Row gutter={8} justify="space-between">
							<Col span={24}>
								<Form.Item
									name="description"
									label="Description"
									hasFeedback={false}
									showValidateSuccess={false}
								>
									<Input.TextArea
										name="description"
										placeholder="Description"
										rows={4}
									/>
								</Form.Item>
							</Col>
						</Row>

						<Row gutter={8} justify="space-between">
							<Col span={12}>
								<Form.Item
									name="dueDate"
									label="Due date"
									hasFeedback={false}
									showValidateSuccess={false}
								>
									<DatePicker
										name="dueDate"
										placeholder="Due date"
										format="DD-MM-YYYY"
										allowClear={false}
										showNow={false}
									/>
								</Form.Item>
							</Col>
							<Col span={12}>
								<Form.Item
									name="type"
									label="Type"
									hasFeedback={false}
									showValidateSuccess={false}
								>
									<Radio.Group
										name="type"
										options={typeOptions}
										onChange={(e) => {
											setFieldValue(
												'type',
												e.target.value
											);
										}}
									/>
								</Form.Item>
							</Col>
						</Row>

						<Row gutter={8}>
							<Col span={12}>
								<Form.Item
									name="priority"
									label="Priority"
									hasFeedback={false}
									showValidateSuccess={false}
								>
									<Select
										showSearch
										name="priority"
										style={{ width: '100%' }}
										placeholder={'Priority'}
										allowClear={true}
									>
										{priorityTypes?.map(
											({ value, label }) => (
												<Option
													key={value}
													value={value}
												>
													{label}
												</Option>
											)
										)}
									</Select>
								</Form.Item>
							</Col>

							<Col span={12}>
								<Form.Item
									name="label"
									label="Label"
									hasFeedback={false}
									showValidateSuccess={false}
								>
									<Checkbox.Group
										name="label"
										options={labelOptions}
										style={{ width: '50%' }}
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

export default TaskForm;
