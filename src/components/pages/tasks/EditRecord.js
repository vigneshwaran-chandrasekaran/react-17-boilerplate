import { EditOutlined } from '@ant-design/icons';
import { Button, Tooltip } from 'antd';
import { useQueryParams } from 'hooks';
import React from 'react';

function EditRecord({ data }) {
	const { history } = useQueryParams();

	function handleEdit() {
		history.push('/tasks');

		history.push({
			pathname: '/tasks',
			search: `?_id=${data?._id}`,
		});
	}

	return (
		<div>
			<Tooltip title="Click to edit the record">
				<Button
					type="primary"
					icon={<EditOutlined />}
					onClick={handleEdit}
				/>
			</Tooltip>
		</div>
	);
}

EditRecord.propTypes = {};

export default EditRecord;
