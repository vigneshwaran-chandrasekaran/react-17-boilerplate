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

export const getTasks = () => async (dispatch, getState) => {
	const CREDENTIALS = {
		url: `/tasks`,
	};
	return await API.common(CREDENTIALS).then((response) => {
		dispatch(setTasks(response.data));
		return response;
	});
};

export const addNewTask = (values, setErrors) => async (dispatch, getState) => {
	const CREDENTIALS = {
		url: `/tasks`,
		method: 'post',
		data: values,
		setErrors,
	};

	return await API.common(CREDENTIALS).then((response) => {
		dispatch(getTasks());
		return response;
	});
};

// console.log('taskSlice inside', taskSlice);

export default taskSlice.reducer;
