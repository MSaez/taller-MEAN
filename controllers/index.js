const fs = require('fs');
const path = require('path');

let files = fs.readdirSync(__dirname); // lee archivo por archivo dentro del directorio

files.forEach(file => {
	let filename = path.basename(file, '.js');
	if (filename !== 'index'){
		exports[filename] = require('./' + filename);
	}
});

