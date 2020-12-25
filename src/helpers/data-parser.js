export function getUserInfo() {
	return localStorage.getItem('userInfo');
}

export function getUserData() {
	const USER_DATA = getUserInfo();

	if (USER_DATA) {
		return JSON.parse(USER_DATA);
	}

	return {};
}
