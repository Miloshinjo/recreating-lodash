import chunk from '../../array/chunk';

const testArray = [2, 4, 6, 7, 'john'];

let result;

beforeEach(() => {
  result = chunk(testArray, 2);
});

test('returns chunked array', () => {
  expect(result).toEqual([[2, 4], [6, 7], ['john']]);
});

test('does not mutate the original array', () => {
  expect(testArray.length).toBe(5);
});
