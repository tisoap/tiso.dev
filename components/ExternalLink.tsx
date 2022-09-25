import { Link, Text } from '@chakra-ui/react'
import { BiLinkExternal } from 'react-icons/bi'
import type { LinkProps } from '@chakra-ui/react'
import type { ReactNode } from 'react'

export interface ExternalLinkProps extends LinkProps {
	children: ReactNode
	href: string
}

export const ExternalLink = ({
	children,
	href,
	...rest
}: ExternalLinkProps) => {
	return (
		<Link
			isExternal
			href={href}
			color="link"
			display="inline"
			alignItems="center"
			borderBottom="2px solid"
			borderBottomColor="transparent"
			_hover={{
				textDecoration: 'none',
				borderBottom: '2px solid',
				borderBottomColor: 'initial',
			}}
			{...rest}
		>
			{children}
			<Text as="span" whiteSpace="nowrap">
				&nbsp;
				<BiLinkExternal
					style={{
						display: 'inline',
						position: 'relative',
						top: '2px',
					}}
				/>
			</Text>
		</Link>
	)
}
