import { Link } from '@chakra-ui/react'
import { NextLink } from './NextLink'
import type { LinkProps } from '@chakra-ui/react'
import type { ReactNode } from 'react'

export interface InternalLinkProps extends LinkProps {
	children: ReactNode
	href: string
}

export const InternalLink = ({
	children,
	href,
	...rest
}: InternalLinkProps) => {
	return (
		<NextLink href={href} passHref>
			<Link
				color="link"
				display="inline-flex"
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
			</Link>
		</NextLink>
	)
}
