var fs = require('fs');
var path = require('path');

module.exports = {
    meta: {
        docs: {
            description: 'make sure no toUpperCase is used',
            category: 'Possible Errors',
            recommended: true,
        },
        schema: [],
        fixable: 'code',
    },
    create: context => ({
        MemberExpression: function(node) {
            if (node.property.name === 'toUpperCase') {
                function getOperatorLocation(node) {
                    const opToken = context.getSourceCode().getTokenAfter(node);

                    return {
                        line: opToken.loc.start.line,
                        column: opToken.loc.start.column,
                    };
                }

                context.report({
                    node,
                    loc: getOperatorLocation(node),
                    message: 'Use of toUpperCase instead use toLocaleUpperCase',
                });
            }
        },
    }),
};
