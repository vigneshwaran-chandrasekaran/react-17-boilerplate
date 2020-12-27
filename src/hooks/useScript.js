import { useEffect } from 'react';

// https://stackoverflow.com/a/34425083/3882241
const useScript = (url) => {
	useEffect(() => {
		const script = document.createElement('script');

		script.src = url;
		script.async = true;

		document.body.appendChild(script);

		return () => {
			document.body.removeChild(script);
		};
	}, [url]);
};

export default useScript;
