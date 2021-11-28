import { Heading, Text } from '@chakra-ui/react'
import { MDXProvider } from '@mdx-js/react'
import { ExternalLink } from 'components/ExternalLink'
import { InternalLink } from 'components/InternalLink'
import type { LinkProps, HeadingProps, TextProps } from '@chakra-ui/react'
import type { ReactNode } from 'react'

const a = (props: LinkProps) => {
	const href = props.href
	if (!href) throw new Error('Link must have an href')

	const isInternalLink = href.startsWith('/') || href.startsWith('#')

	if (isInternalLink) {
		return (
			<InternalLink href={href} {...props}>
				{props.children}
			</InternalLink>
		)
	}

	return (
		<ExternalLink href={href} {...props}>
			{props.children}
		</ExternalLink>
	)
}

const h1 = (props: HeadingProps) => (
	<Heading size="xl" mt={8} mb={4} {...props} />
)
const h2 = (props: HeadingProps) => (
	<Heading size="lg" mt={8} mb={4} {...props} />
)
const h3 = (props: HeadingProps) => (
	<Heading size="md" mt={8} mb={4} {...props} />
)
const p = (props: TextProps) => <Text my={4} {...props} />

export const components = {
	a,
	h1,
	h2,
	h3,
	p,
}

export type MarkdownProviderProps = {
	children: ReactNode
}

export const MarkdownProvider = ({ children }: MarkdownProviderProps) => (
	<MDXProvider components={components}>{children}</MDXProvider>
)
