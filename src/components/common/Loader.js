import animationData from 'assets/kite-loader.json';
import React from 'react';
import Lottie from 'react-lottie';
import { useSelector } from 'react-redux';

export default function Loader() {
	const loader = useSelector((state) => state.app.loading) || false;
	// const loader = true;

	const defaultOptions = {
		loop: true,
		autoplay: true,
		animationData: animationData,
		rendererSettings: {
			preserveAspectRatio: 'xMidYMid slice',
		},
	};

	return (
		<>
			{loader && (
				<div className="loaderbox">
					<Lottie options={defaultOptions} height={128} width={128} />
				</div>
			)}
		</>
	);
}
