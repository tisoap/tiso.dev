export type Project = {
	name: string
	github: string
	description: string
	demo?: string
}

export const projects: Project[] = [
	{
		name: 'ESLint Config TS React',
		github: 'https://github.com/tisoap/eslint-config-ts-react',
		description:
			'Shareable ESLint config for TypeScript based React applications.',
	},
	{
		name: 'React Flow Smart Edge',
		github: 'https://github.com/tisoap/react-flow-smart-edge',
		description:
			'Custom edge for React Flow that never intersects with other nodes.',
		demo: 'https://tisoap.github.io/react-flow-smart-edge/',
	},
	{
		name: 'Next Template App',
		github: 'https://github.com/tisoap/next-template-app',
		description: 'Next.js template with TypeScript, Chakra UI, and more.',
		demo: 'https://next-template-app.vercel.app/',
	},
	{
		name: 'CRA Template App',
		github: 'https://github.com/tisoap/cra-template-app',
		description:
			'Create React App template with TypeScript, Chakra UI, and more.',
		demo: 'https://cra-template-app.vercel.app/',
	},
	{
		name: 'tiso.dev',
		github: 'https://github.com/tisoap/tiso.dev',
		description: 'Source code for my personal website.',
		demo: 'https://tiso.dev/',
	},
]
