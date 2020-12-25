import { createSlice } from '@reduxjs/toolkit';
import { message as toaster } from 'antd';
import { API } from 'api';
import jsSha512 from 'js-sha512';

const initialState = {
	userFormVisible: false,
	editableUser: {},
	me: {},
};

export const userSlice = createSlice({
	name: 'user', // name of the reducer
	initialState,
	reducers: {
		setUserFormVisible: (state, payload) => {
			let data = state.userFormVisible;
			state.userFormVisible = !data;
		},
		setSelectedUser: (state, { payload }) => {
			console.log(payload);
			state.editableUser = payload;
		},

		setUser: (state, { payload }) => {
			state.me = payload;
		},
	},
});

export const {
	setUserFormVisible,
	setSelectedUser,
	setUser,
} = userSlice.actions;

export const getUser = () => async (dispatch, getState) => {
	const CREDENTIALS = {
		url: `/users/me`,
	};
	return await API.common(CREDENTIALS).then((response) => {
		dispatch(setUser(response.data));
		return response;
	});
};

export const updateUser = (
	values,
	setErrors,
	isNotProfileUpdate = false
) => async (dispatch) => {
	let url = isNotProfileUpdate ? `/users/${values?.id}` : 'users/me';

	const { password, ...rest } = values;
	let newVal;

	if (password) {
		newVal = {
			password: jsSha512(password),
			...rest,
		};
	} else {
		newVal = {
			...rest,
		};
	}

	const CREDENTIALS = {
		url,
		method: 'put',
		data: newVal,
		setErrors,
	};
	return await API.common(CREDENTIALS).then((response) => {
		dispatch(setUser(response.data));
		let text = isNotProfileUpdate
			? `'User updated successfully`
			: 'Profile updated successfully';
		toaster.success(text);
		return response;
	});
};

console.log('userSlice inside', userSlice);

export default userSlice.reducer;
