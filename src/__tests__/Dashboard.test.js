import { screen } from '@testing-library/dom';
import '@testing-library/jest-dom/extend-expect';
import { render } from '@testing-library/react';
import Dashboard from 'pages/Dashboard';

test('renders Dashboard', () => {
	const { container, getByText } = render(<Dashboard />);
	screen.debug();
	screen.debug(container);
	expect(getByText('Dashboard')).toBeInTheDocument();
	expect(container.firstChild).toMatchInlineSnapshot(`
    <h1>
Dashboard
    </h1>
	`);
});
