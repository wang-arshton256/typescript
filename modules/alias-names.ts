// Using alias names

import { add as sum, sub } from './calc';

console.log(sum(2, 3));

// second option
import  *as c from './calc';

console.log(sum(2, 3));

// Import defaultt class

import Calculator from './class-modules';

console.log(sum(2, 3));

