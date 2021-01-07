import { renderHook } from '@testing-library/react-hooks';
import useAuth from 'hooks/useAuth';

test('should use useAuth', () => {
	const { result } = renderHook(() => useAuth());
	console.log('result', result);
	console.log('result.current', result.current);
	//   expect(result.current.count).toBe(0)
	//   expect(typeof result.current.increment).toBe('function')
});
