var fs = require('fs');
var path = process.argv[2];
var lines = fs.readFileSync(path).toString().split('\n').length - 1;
console.log(lines);

