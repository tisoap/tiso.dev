export type Project = {
	name: string
	github: string
	description: string
	demo?: string
}

export const projects: Project[] = [
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
		description: 'Next.js template with typescript, Chakra UI, and more.',
		demo: 'https://next-template-app.vercel.app/',
	},
	{
		name: 'tiso.dev',
		github: 'https://github.com/tisoap/tiso.dev',
		description: 'Source code for my personal website.',
		demo: 'https://tiso.dev/',
	},
]
