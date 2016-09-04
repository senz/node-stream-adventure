var through = require('through2');
var split = require('split');

var transform = through(write);

var lineno = 0;
function write(buff, _, next) {
	lineno++;
	var data = buff.toString();
	if (lineno % 2 == 0) {
		this.push(data.toUpperCase());
	} else this.push(data.toLowerCase());
}

process.stdin.pipe(split()).pipe(transform).pipe(process.stdout);
