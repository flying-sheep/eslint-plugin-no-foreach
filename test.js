'use strict'

const { RuleTester } = require('eslint')
const no_foreach = require('./no-foreach')


const tester = new RuleTester({
	parserOptions: { ecmaVersion: 6 },
})

tester.run('no-foreach', no_foreach, {
	valid: [
		'[].filter(x => x)',
		'for (let i of []) { i() }',
	],
	invalid: [
		{
			code: '[].forEach(x => {})',
			errors: [{ message: "Unexpected 'forEach' method. Use for..of instead." }]
		}
	],
})

