import { Table } from 'antd';
import { DeleteRecord, EditRecord } from 'components/pages/tasks';
import { labelOptions, priorityTypes, typeOptions } from 'helpers/enum';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getTasks } from 'store/taskSlice';

function getLabel(data) {
	return labelOptions
		.filter((item) => data.includes(item.value))
		.map((item) => item.label)
		.join(', ');
}

function getPriority(data) {
	return priorityTypes.find((item) => item.value === data)?.label;
}

function getType(data) {
	return typeOptions.find((item) => item.value === data)?.label;
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
			dataIndex: 'label', // to get data from api
			key: 'label', // for column sorting key
			render: (priority) => getLabel(priority) || 'NA',
		},
		{
			title: 'Due Date',
			dataIndex: 'dueDate',
			key: 'dueDate',
		},
		{
			title: 'Edit',
			dataIndex: '_id', // to get data from api
			key: '_id', // for column sorting key
			render: (_id, record) => <EditRecord data={record} />,
		},
		{
			title: 'Delete',
			dataIndex: '_id', // to get data from api
			key: '_id', // for column sorting key
			render: (_id, record) => <DeleteRecord data={record} />,
		},
	];

	return (
		<div>
			<Table
				size="small"
				dataSource={tasks}
				columns={columns}
				rowKey={(record) => record?._id}
			/>
			;
		</div>
	);
}

export default TasksList;
