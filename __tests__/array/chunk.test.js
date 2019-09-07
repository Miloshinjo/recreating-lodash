import chunk from '../../array/chunk';

const testArray = [2, 4, 6, 7, 'john'];

let result;

beforeEach(() => {
  result = chunk(testArray, 2);
});

test('returns chunked array', () => {
  expect(result).toEqual([[2, 4], [6, 7], ['john']]);
});

test('returns empty array if size is 0', () => {
  result = chunk(testArray, 0);
  expect(result).toEqual([]);
});

test('returns the empty array if size is negative', () => {
  result = chunk(testArray, -5);
  expect(result).toEqual([]);
});

test('does not mutate the original array', () => {
  expect(testArray.length).toBe(5);
});
