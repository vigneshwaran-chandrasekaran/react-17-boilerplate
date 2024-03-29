import { Table, Tag } from 'antd';
import moment from 'moment';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { labelOptions, priorityTypes, typeOptions } from 'helpers/enum';
import { DeleteRecord, EditRecord } from 'components/pages/tasks';
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

const tagColors = {
	1: 'red',
	2: 'gold',
	3: 'green',
};

const pagination = {
	limit: 5,
	showSizeChanger: true,
	pageSizeOptions: ['5', '10', '25', '50', '100'],
};

function TasksList() {
	const dispatch = useDispatch();
	const { tasks = [] } = useSelector((state) => state?.task);

	useEffect(() => {
		dispatch(getTasks());
	}, [dispatch]);

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
			render: (type) => <Tag color={tagColors[type]}>{getType(type) || 'NA'}</Tag>,
		},
		{
			title: 'Priority',
			dataIndex: 'priority', // to get data from api
			key: 'priority', // for column sorting key
			render: (priority) => (
				<Tag color={tagColors[priority]}>{getPriority(priority) || 'NA'}</Tag>
			),
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

			render: (dueDate) => moment(dueDate).local().format('DD MMM YYYY'),
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
				pagination={pagination}
			/>
		</div>
	);
}

export default TasksList;
