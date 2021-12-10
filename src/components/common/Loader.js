// import spinner from 'assets/spinner.json';
// import loading from 'assets/loading.json';
// import wheels from 'assets/wheels.json';
import React from 'react';
import Lottie from 'react-lottie';
import { useSelector } from 'react-redux';
import kiteLoader from 'assets/kite-loader.json';

const defaultOptions = {
	loop: true,
	autoplay: true,
	animationData: kiteLoader,
	rendererSettings: {
		preserveAspectRatio: 'xMidYMid slice',
	},
};

export default function Loader() {
	const loader = useSelector((state) => state?.app?.loading) || false;
	// const loader = true;

	return (
		<div>
			{loader && (
				<div className="loaderbox">
					<Lottie options={defaultOptions} height={128} width={128} />
				</div>
			)}
		</div>
	);
}
