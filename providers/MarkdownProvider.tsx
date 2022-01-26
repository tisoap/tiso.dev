import { Heading, Text } from '@chakra-ui/react'
import { MDXProvider } from '@mdx-js/react'
import { ExternalLink } from 'components/ExternalLink'
import { InternalLink } from 'components/InternalLink'
import { useBrandColor } from 'hooks/colorMode'
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

const p = (props: TextProps) => (
	<Text
		my={4}
		lineHeight="1.8em"
		_first={{
			mt: 0,
		}}
		{...props}
	/>
)

const blockquote = (props: TextProps) => (
	<Text
		as="blockquote"
		lineHeight="1.8em"
		p={2}
		my={4}
		fontStyle="italic"
		borderLeft="2px solid"
		rounded="md"
		borderColor={useBrandColor()}
		{...props}
	/>
)

const li = (props: TextProps) => <Text as="li" ml={4} pl={1} {...props} />

export const components = {
	a,
	h1,
	h2,
	h3,
	p,
	blockquote,
	li,
}

export type MarkdownProviderProps = {
	children: ReactNode
}

export const MarkdownProvider = ({ children }: MarkdownProviderProps) => (
	<MDXProvider components={components}>{children}</MDXProvider>
)
