// Using alias names

import { add as sum, sub } from './calc';

console.log(sum(2, 3));

// second option
import  *as c from './calc';

console.log(sum(2, 3));


