'use strict'

module.exports = {
	meta: {
		docs: {
			description: 'disallow forEach in favor of for..of',
			category: 'Best Practices',
			recommended: false,
		},
		schema: [],
	},
	create: context => ({
		MemberExpression(node) {
			if (node.property.name === 'forEach') {
				context.report({
					node,
					message: "Unexpected 'forEach' method. Use for..of instead.",
				})
			}
		}
	}),
}
