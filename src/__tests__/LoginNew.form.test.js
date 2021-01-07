import { render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { LoginNewForm } from 'forms';
import React from 'react';

beforeAll(() => {
	Object.defineProperty(window, 'matchMedia', {
		writable: true,
		value: jest.fn().mockImplementation((query) => ({
			matches: false,
			media: query,
			onchange: null,
			addListener: jest.fn(), // deprecated
			removeListener: jest.fn(), // deprecated
			addEventListener: jest.fn(),
			removeEventListener: jest.fn(),
			dispatchEvent: jest.fn(),
		})),
	});

	// Object.defineProperty(window, 'matchMedia', {
	// 	value: jest.fn(() => {
	// 		return {
	// 			matches: true,
	// 			addListener: jest.fn(),
	// 			removeListener: jest.fn(),
	// 		};
	// 	}),
	// });
});

test.skip('rendering and submiting a basic Formik form', async () => {
	const handleSubmit = jest.fn();
	render(<LoginNewForm onSubmit={handleSubmit} />);

	userEvent.type(screen.getByLabelText(/first name/i), 'Jhon');
	userEvent.type(screen.getByLabelText(/last name/i), 'Dee');
	userEvent.type(screen.getByLabelText(/email/i), 'jhon.dee@someemail.com');

	userEvent.click(screen.getByRole('button', { name: /submit/i }));

	await waitFor(() =>
		expect(handleSubmit).toHaveBeenCalledWith({
			email: 'jhon.dee@someemail.com',
			firstName: 'Jhon',
			lastName: 'Dee',
		})
	);
});
