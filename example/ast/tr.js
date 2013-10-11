var falafel = require('falafel');
var fs = require('fs');
var src = fs.readFileSync('source.js', 'utf8');

var output = falafel(src, function (node) {
    if (node.type === 'Literal' && typeof node.value === 'string') {
        node.update(node.source() + '.toUpperCase()');
    }
});
console.log(output);
