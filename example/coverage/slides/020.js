var falafel = require('falafel');
var through = require('through');

module.exports = function (file, opts) {
    if (typeof file === 'object') {
        opts = file;
        file = undefined;
    }
    if (!opts) opts = {};
    var outputFn = opts.output || 'console.log';
    
    var output = through();
    var expected = [];
    
    var chunks = [];
    return through(write, end);
    
    // ...
};
