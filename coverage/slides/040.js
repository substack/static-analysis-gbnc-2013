    function walk (node) {
        var index = expected.length;
        if (/Expression$/.test(node.type)
        && node.parent.type !== 'AssignmentExpression'
        && (node.type !== 'MemberExpression'
            || node.parent.type !== 'CallExpression'
        )) {
            expected.push(node.range);
            node.update('__coverageWrap(' + index + ',' + node.source() + ')');
        }
        else if (node.type === 'ExpressionStatement'
        || node.type === 'VariableDeclaration') {
            node.update('{ __coverageWrap(' + index + ');' + node.source() + '};');
            expected.push(node.range);
        }
    }
