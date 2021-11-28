import { Link } from '@chakra-ui/react'
import { BiLinkExternal } from 'react-icons/bi'
import { useLinkColor } from 'hooks/colorMode'
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
			color={useLinkColor()}
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
			&nbsp;
			<BiLinkExternal
				style={{ display: 'inline', position: 'relative', top: '2px' }}
			/>
		</Link>
	)
}
