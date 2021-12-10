import qs from 'qs';
import { useEffect, useState } from 'react';
import { useHistory, useLocation } from 'react-router-dom';

export default function useQueryParams() {
	const [params, setParams] = useState({});
	const location = useLocation();
	const history = useHistory();

	useEffect(() => {
		const data = qs.parse(location.search, {
			ignoreQueryPrefix: true,
		});
		setParams(data);
	}, [location]);

	return { ...params, history };
}
