import { renderHook } from '@testing-library/react-hooks';
import useAuth from 'hooks/useAuth';

test('should use useAuth', () => {
	const { result } = renderHook(() => useAuth());
	console.log('result', result);
	console.log('result.current', result.current);
	//   expect(result.current.count).toBe(0)
	//   expect(typeof result.current.increment).toBe('function')
});

/**
 * https://www.robinwieruch.de/react-testing-library
 */

/**
 * describe-block is the test suite
 */

/**
 * `test` can be named `it`.
 * it === test
 * (it or test) called as `test case`
 */

/**
 * A test suite can have multiple test cases.
 * So describe can have multiple test()
 */

/**
 * test case doesn't have to be in a test suite
 */

/**
 * What we put into the test cases are called assertions (e.g. expect in Jest)
 */

/**
 * If we put this test suite and the test case with its assertions in a test.js file,
 * Jest will automatically pick it up for you when running npm test
 */
describe('true is truthy and false is falsy', () => {
	test('true is truthy', () => {
		expect(true).toBe(true);
	});

	it('false is falsy', () => {
		expect(false).toBe(false);
	});
});
