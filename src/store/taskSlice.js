import { createSlice } from '@reduxjs/toolkit';
import { API } from 'api';

const initialState = {
	tasks: [],
};

export const taskSlice = createSlice({
	name: 'task', // name of the reducer
	initialState,
	reducers: {
		setTasks: (state, { payload }) => {
			state.tasks = payload;
		},
	},
});

export const { setTasks } = taskSlice.actions;

export const getTasks = () => async (dispatch) => {
	const CREDENTIALS = {
		url: `/tasks`,
		queryParams: {
			all: true,
		},
	};
	await API.common(CREDENTIALS).then((response) => {
		dispatch(setTasks(response?.data));
		return response;
	});
};

export const getTask = (_id) => async () => {
	const CREDENTIALS = {
		url: `/tasks/${_id}`,
	};
	await API.common(CREDENTIALS).then((response) => response?.data);
};

export const addNewTask = (values, _id, setErrors) => async (dispatch) => {
	let method = 'post';
	let url = '/tasks';

	if (_id) {
		method = 'put';
		url = `/tasks/${_id}`;
	}
	const CREDENTIALS = {
		url,
		method,
		data: values,
		setErrors,
	};

	await API.common(CREDENTIALS).then((response) => {
		dispatch(getTasks());
		return response;
	});
};

export const deleteTask = (_id) => async (dispatch) => {
	const CREDENTIALS = {
		url: `/tasks/${_id}`,
		method: 'delete',
	};

	await API.common(CREDENTIALS).then((response) => {
		dispatch(getTasks());
		return response;
	});
};

// console.log('taskSlice inside', taskSlice);

export default taskSlice.reducer;
