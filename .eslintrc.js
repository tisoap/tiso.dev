/* eslint-disable @typescript-eslint/no-var-requires */
const path = require('path')
const tsConfigPath = path.resolve(__dirname, 'tsconfig.json')

module.exports = {
	root: true,
	parser: '@typescript-eslint/parser',
	parserOptions: {
		ecmaVersion: 'latest',
		sourceType: 'module',
		ecmaFeatures: {
			impliedStrict: true,
			jsx: true,
		},
		tsconfigRootDir: __dirname,
		project: [tsConfigPath],
	},
	settings: {
		react: {
			version: 'detect',
		},
		'import/resolver': {
			node: {
				paths: ['.'],
			},
		},
	},
	env: {
		browser: true,
		amd: true,
		node: true,
	},
	plugins: ['@typescript-eslint', 'react', 'react-hooks', 'prettier', 'import'],
	extends: [
		'eslint:recommended',
		'plugin:react/recommended',
		'plugin:jsx-a11y/recommended',
		'plugin:@typescript-eslint/recommended',
		'plugin:@typescript-eslint/recommended-requiring-type-checking',
		'plugin:prettier/recommended',
		'plugin:@next/next/recommended',
		'plugin:import/recommended',
		'plugin:import/typescript',
	],
	rules: {
		'@typescript-eslint/explicit-module-boundary-types': 'off',
		'@typescript-eslint/no-explicit-any': 'error',
		'prettier/prettier': ['error', {}, { usePrettierrc: true }],
		'react/prop-types': 'off',
		'react/react-in-jsx-scope': 'off',
		'@typescript-eslint/consistent-type-imports': 'error',
		'import/order': [
			'error',
			{
				groups: [
					'builtin',
					'external',
					'internal',
					'parent',
					'sibling',
					'index',
					'type',
					'object',
					'unknown',
				],
				'newlines-between': 'never',
				alphabetize: {
					order: 'asc',
					caseInsensitive: false,
				},
			},
		],
	},
}
