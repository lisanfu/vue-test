module.exports = {
	parser: 'espree',
	parserOptions: {
		ecmaVersion: 12,
		sourceType: 'module',
	},
	env: {
		browser: true,
		es2021: true,
	},
	extends: 'eslint:recommended',
	plugins: ['prettier'],
	rules: {
		quotes: ['error', 'single'],
		'no-undef': 'off',
		'prettier/prettier': 'error',
	},
}
