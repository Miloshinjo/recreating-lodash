import _ from 'lodash';

import { numberArray } from './__data__/arrays';
import chunk from './array/chunk';

console.log('lodash chunk', _.chunk(numberArray, 4));
console.log('custom chunk', chunk(numberArray, 4));
