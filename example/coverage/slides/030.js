    function write (buf) { chunks.push(buf) }
    
    function end () {
        var body = Buffer.concat(chunks).toString('utf8');
        var src = falafel(body.toString('utf8'), walk) + '';
        var sfile = JSON.stringify(JSON.stringify(file));
        
        this.queue(
            outputFn + '("COVERAGE " + ' + sfile + ' + " " + '
                + JSON.stringify(JSON.stringify(expected))
            + ');'
            + 'var __coverage = '
            + JSON.stringify(expected.reduce(function (acc, x, ix) {
                acc[ix] = x;
                return acc;
            }, {})) + ';'
            + 'var __coverageWrap = function (index, value) {'
            + 'if (__coverage[index]) ' + outputFn
                + '("COVERED " + ' + sfile
                + ' + " " + index);'
            + 'delete __coverage[index];'
            + 'return value'
            + '};\n'
        );
        
        this.queue(src);
        this.queue(null);
    }
