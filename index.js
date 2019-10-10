import _ from 'lodash';

import compact from './array/compact';

const testArray = [0, 1, 2, null, '', undefined, 3, false, NaN];

console.log('lodash compact', _.compact(testArray));
console.log('custom compact', compact(testArray));
