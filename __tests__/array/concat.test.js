import concat from '../../array/concat';

const array1 = [1, 2, 3];
const array2 = [4, 5, 6];

test('returns concated array', () => {
  const result = concat(array1, array2);

  expect(result).toEqual([1, 2, 3, 4, 5, 6]);
});
