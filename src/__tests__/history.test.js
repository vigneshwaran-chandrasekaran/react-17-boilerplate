import { sortObjectByKey } from 'helpers/history';

const params = '_id=22&a=apple&z=zoo&b=ball&d=dog';

test('String params test', () => {
	expect(sortObjectByKey(params)).toEqual(params);
});
