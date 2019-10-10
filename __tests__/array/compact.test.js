import compact from '../../array/compact';

const testArray = [0, 1, 2, null, '', undefined, 3, false, NaN];

test('returns compacted array', () => {
  const result = compact(testArray);
  expect(result).toEqual([1, 2, 3]);
});
