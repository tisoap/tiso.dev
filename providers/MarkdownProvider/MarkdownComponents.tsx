import { Heading, Text, chakra } from '@chakra-ui/react'
import { ExternalLink } from 'components/ExternalLink'
import { InternalLink } from 'components/InternalLink'
import type { LinkProps, HeadingProps, TextProps } from '@chakra-ui/react'

export const a = (props: LinkProps) => {
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

export const h1 = (props: HeadingProps) => (
	<Heading size="xl" mt={8} mb={4} {...props} />
)

export const h2 = (props: HeadingProps) => (
	<Heading size="lg" mt={8} mb={4} {...props} />
)

export const h3 = (props: HeadingProps) => (
	<Heading size="md" mt={8} mb={4} {...props} />
)

export const p = (props: TextProps) => (
	<Text
		my={4}
		lineHeight="1.8em"
		_first={{
			mt: 0,
		}}
		{...props}
	/>
)

export const blockquote = chakra('blockquote', {
	baseStyle: {
		lineHeight: '1.8em',
		p: 2,
		my: 4,
		fontStyle: 'italic',
		borderLeft: '2px solid',
		rounded: 'md',
		borderColor: 'brand',
	},
})

export const li = chakra('li', {
	baseStyle: {
		ml: 4,
		pl: 1,
	},
})
