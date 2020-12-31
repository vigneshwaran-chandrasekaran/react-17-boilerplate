import { Table } from 'antd';
import { labelOptions, priorityTypes, typeOptions } from 'helpers/enum';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getTasks } from 'store/taskSlice';

function getLabel(id) {
	return labelOptions.find((item) => item.value === id)?.label;
}

function getPriority(id) {
	console.log('getPriority id', id);
	return priorityTypes.find((item) => item.value === id)?.label;
}

function getType(id) {
	return typeOptions.find((item) => item.value === id)?.label;
}

function TasksList() {
	const dispatch = useDispatch();
	const { tasks = [] } = useSelector((state) => state?.task);

	useEffect(() => {
		dispatch(getTasks());
	}, []);

	const columns = [
		{
			title: 'Title',
			dataIndex: 'title',
			key: 'title',
		},
		{
			title: 'Description',
			dataIndex: 'description',
			key: 'description',
		},
		{
			title: 'Type',
			dataIndex: 'type', // to get data from api
			key: 'type', // for column sorting key
			render: (type) => getType(type) || 'NA',
		},
		{
			title: 'Priority',
			dataIndex: 'priority', // to get data from api
			key: 'priority', // for column sorting key
			render: (priority) => getPriority(priority) || 'NA',
		},
		{
			title: 'Label',
			dataIndex: 'priority', // to get data from api
			key: 'priority', // for column sorting key
			render: (priority) => getPriority(priority) || 'NA',
		},
		{
			title: 'DueDate',
			dataIndex: 'dueDate',
			key: 'dueDate',
		},
	];

	return (
		<div>
			<Table
				dataSource={tasks}
				columns={columns}
				rowKey={(record) => record?._id}
			/>
			;
		</div>
	);
}

export default TasksList;
