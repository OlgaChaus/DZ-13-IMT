 
var fs = require('fs');

fs.open('text.txt', 'w', function (err, file) {
if (err) throw err;
});

var text1 = fs.appendFile('text.txt', 'Welcome!\n', function (err) {
if (err) throw err;
});

var newText = ('\r\n' + 'Hello!');

fs.appendFile('text.txt', newText, function (err) {
if (err) throw err;
});

fs.appendFile('text.txt', '\r\n Bye!', function (err) {
if (err) throw err;
console.log('Bye!');
});




