import { DeleteOutlined } from '@ant-design/icons';
import { Button, message, Tooltip } from 'antd';
import React from 'react';
import { useDispatch } from 'react-redux';
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
			<Tooltip title="Click to delete the record">
				<Button
					danger
					icon={<DeleteOutlined />}
					onClick={handleDelete}
				/>
			</Tooltip>
		</div>
	);
}

DeleteRecord.propTypes = {};

export default DeleteRecord;
