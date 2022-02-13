module.exports = {
	parserOptions: {
		project: ['./tsconfig.json'],
	},
	plugins: ['prettier'],
	extends: [
		'@tisoap/eslint-config-ts-react',
		'plugin:@next/next/recommended',
		'plugin:prettier/recommended',
	],
	rules: {
		'prettier/prettier': ['error', {}, { usePrettierrc: true }],
	},
}
