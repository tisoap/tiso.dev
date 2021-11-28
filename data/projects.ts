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
	},
	{
		name: 'Next Template App',
		github: 'https://github.com/tisoap/next-template-app',
		description: 'Next.js template with typescript, Chakra UI, and more.',
	},
	{
		name: 'CRA Template App',
		github: 'https://github.com/tisoap/cra-template-app',
		description:
			'Create React App template with Storybook and Testing Library.',
	},
	{
		name: 'tiso.dev',
		github: 'https://github.com/tisoap/tiso.dev',
		description: 'Source code for my personal website.',
	},
]
