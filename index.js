import _ from 'lodash';

import chunk from './array/chunk';

export const testArray = [1, 2, 3, 4, 5, 6, 7];

console.log('lodash chunk', _.chunk(testArray, 3));
console.log('custom chunk', chunk(testArray, 3));
