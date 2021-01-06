import { render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { LoginForm } from 'forms';
import React from 'react';
import { Provider } from 'react-redux';
// import { createStore } from 'redux'

test('rendering and submiting a basic Formik form', async () => {
	const handleSubmit = jest.fn();
	render(
		<Provider store={store}>
			<LoginForm onSubmit={handleSubmit} />
		</Provider>
	);

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
