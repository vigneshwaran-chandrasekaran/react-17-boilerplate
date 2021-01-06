import { cleanup, render } from '@testing-library/react';
import Home from 'pages/Home';
import React from 'react';

afterEach(cleanup);

// Snapshots allows you to test if your component renders correctly so in your case

// https://jestjs.io/docs/en/snapshot-testing

/**
 * A typical snapshot test case renders a UI component, takes a snapshot,
 * then compares it to a reference snapshot file stored alongside the test.
 */

it('should take a snapshot', () => {
	const { asFragment } = render(<Home />);
	console.log('asFragment 123', asFragment.toString());
	expect(asFragment(<Home />)).toMatchSnapshot();
});
