import { MDXProvider } from '@mdx-js/react'
import * as components from './MarkdownComponents'
import type { ReactNode } from 'react'

export type MarkdownProviderProps = {
	children: ReactNode
}

export const MarkdownProvider = ({ children }: MarkdownProviderProps) => (
	<MDXProvider components={components}>{children}</MDXProvider>
)

export { components }
