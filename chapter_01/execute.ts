import invoices from './invoices.json';
import plays from './plays.json';

// import { statement } from './01-1/statement';
import { statement } from '../chapter_01/refactoring/statement'

const result = statement(invoices[0], plays);

console.log('\n');
console.log(result);