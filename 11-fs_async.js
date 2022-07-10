const { readFile, writeFile } = require('fs');

console.log('start');
readFile('./content/first.txt', 'utf-8', (err, result) => {
	if (err) {
		console.log('error', err);
		return;
	}

	console.log('result', result);

	const first = result;
	readFile('./content/second.txt', 'utf-8', (err, result) => {
		if (err) {
			console.log('error', err);
			return;
		}

		console.log('result', result);
		const second = result;

		writeFile(
			'./content/result-async.txt',
			`Here is the async result : ${first}, ${second}`,
			(err, result) => {
				if (err) {
					console.log('error', err);
					return;
				}

				console.log('result', result);
				console.log('end of task');
			}
		);
	});
});

console.log('start new task');
