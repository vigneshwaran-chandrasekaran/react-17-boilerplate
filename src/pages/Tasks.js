import { Card, Col, Row } from 'antd';
import { TaskForm } from 'forms';
import React from 'react';

function Tasks(props) {
	return (
		<Row justify="space-around" align="middle">
			<Col span={9}></Col>
			<Col span={6}>
				<Card>
					<TaskForm />
				</Card>
			</Col>
			<Col span={9}></Col>
		</Row>
	);
}

Tasks.propTypes = {};

export default Tasks;
