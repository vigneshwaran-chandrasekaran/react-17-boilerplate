import { Card, Col, Row } from 'antd';
import React from 'react';
import { TaskForm } from 'forms';

function Tasks() {
	return (
		<Row justify="space-around" align="middle">
			<Col span={6}></Col>
			<Col span={12}>
				<Card>
					<TaskForm />
				</Card>
			</Col>
			<Col span={6}></Col>
		</Row>
	);
}

export default Tasks;
