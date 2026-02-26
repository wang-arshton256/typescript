import { add, sub } from './calc';

console.log(add(15, 5));
console.log(sub(415, 151));


// Impoting defualt, use the import method and dont wrap the function is flower brackerts
import add1, {div} from './calc';

console.log(add(15, 5));
console.log(sub(415, 151));