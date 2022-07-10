const { readFileSync, writeFileSync } = require('fs');

console.log('start');
const first = readFileSync('./content/first.txt', 'utf-8');
console.log('first', first);

const second = readFileSync('./content/second.txt', 'utf-8');
console.log('second', second);

writeFileSync(
	'./content/result-sync.txt',
	`Here is the result: ${first}, ${second}`
	// { flag: 'a' } appends the existing text
);

console.log('done with task');
console.log('starting new task');
