'use strict';

// ------------------------------------------------------------------------------
// Requirements
// ------------------------------------------------------------------------------

const rule = require('../../../rules/check-uppercase');
const RuleTester = require('eslint').RuleTester;

require('babel-eslint');

// ------------------------------------------------------------------------------
// Tests
// ------------------------------------------------------------------------------

const ruleTester = new RuleTester();

const tests = {
    valid: [
        {
            code: 'const foo = "test".toLocaleUpperCase();',
        },
        {
            code: [
                'const str = "";',
                'const foo = str.toLocaleUpperCase();',
            ].join('\n'),
        },
    ],
    invalid: [
        {
            code: 'const foo = "test".toUpperCase();',
            errors: [
                {
                    message: 'Use of toUpperCase instead use toLocaleUpperCase',
                },
            ],
        },
        {
            code: 'const str = ""; \n const foo = str.toUpperCase();',
            errors: [
                {
                    message: 'Use of toUpperCase instead use toLocaleUpperCase',
                },
            ],
        },
    ],
};

const config = {
    parser: 'babel-eslint',
    ecmaFeatures: {
        classes: true,
        jsx: true,
    },
};

tests.valid.forEach(t => Object.assign(t, config));
tests.invalid.forEach(t => Object.assign(t, config));

ruleTester.run('check-uppercase', rule, tests);
