import { cleanup, render, screen } from '@testing-library/react';
import React from 'react';
import Home from 'pages/Home';

afterEach(cleanup);

// Snapshots allows you to test if your component renders correctly so in your case

// https://jestjs.io/docs/en/snapshot-testing

/**
 * A typical snapshot test case renders a UI component, takes a snapshot,
 * then compares it to a reference snapshot file stored alongside the test.
 */

describe('Home page', () => {
	test('renders Home page component', () => {
		render(<Home />);

		screen.debug();
		expect(screen.getByText('Home page')).toBeInTheDocument();
		expect(screen.getByText(/page/)).toBeInTheDocument();
		// expect(screen.getByRole('button')).toBeInTheDocument();
	});

	it('should take a snapshot', () => {
		const { asFragment } = render(<Home />);
		// console.log('asFragment 123', asFragment.toString());
		expect(asFragment(<Home />)).toMatchSnapshot();
	});
});
