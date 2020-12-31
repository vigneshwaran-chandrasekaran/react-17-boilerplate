import { Table } from 'antd';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getTasks } from 'store/taskSlice';

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
			title: 'createdAt',
			dataIndex: 'createdAt',
			key: 'createdAt',
		},
	];

	return (
		<div>
			<Table dataSource={tasks} columns={columns} />;
		</div>
	);
}

export default TasksList;
