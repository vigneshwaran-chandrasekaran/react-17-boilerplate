import { DeleteOutlined } from '@ant-design/icons';
import { Button, message, Popconfirm } from 'antd';
import React from 'react';
import { useDispatch } from 'react-redux';
import PropTypes from 'prop-types';
import { deleteTask } from 'store/taskSlice';

function DeleteRecord({ data }) {
	const dispatch = useDispatch();

	function handleDelete() {
		dispatch(deleteTask(data?._id))
			.then(() => {
				message.success('Task deleted successfully');
			})
			.catch((e) => {
				console.log('Task delete catch', e);
			});
	}
	return (
		<div>
			<Popconfirm
				title="Are you sure to delete this task?"
				onConfirm={handleDelete}
				okText="Yes"
				cancelText="No"
			>
				<Button danger icon={<DeleteOutlined />} />
			</Popconfirm>
		</div>
	);
}

DeleteRecord.propTypes = {
	data: PropTypes.object,
};

export default DeleteRecord;
