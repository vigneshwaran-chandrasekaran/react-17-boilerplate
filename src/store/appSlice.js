import { createSlice } from '@reduxjs/toolkit';

const initialState = {
	loading: false,
	recentlyVisitedUrl: '/home',
};

export const appSlice = createSlice({
	name: 'app', // name of the reducer
	initialState,
	reducers: {
		showLoader: (state) => {
			state.loading = true;
		},
		hideLoader: (state) => {
			state.loading = false;
		},
		setRecentUrl: (state, { payload }) => {
			state.recentlyVisitedUrl = payload;
		},
	},
});

export const { showLoader, hideLoader, setRecentUrl } = appSlice.actions;

console.log('appSlice inside', appSlice);

export default appSlice.reducer;
