import _ from 'lodash';

import concat from './array/concat';

const array1 = [1, 2, 3];
const array2 = [4, 5, 6];
const name = 'mike';

console.log('lodash concat', _.concat(array1, array2, name));
console.log('custom concat', concat(array1, array2, name));
