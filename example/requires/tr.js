var falafel = require('falafel');
var fs = require('fs');
var src = fs.readFileSync('source.js', 'utf8');

falafel(src, function (node) {
    if (node.type === 'CallExpression' && node.callee.name === 'require') {
        console.log(node.arguments[0].value);
    }
});
