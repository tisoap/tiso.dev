import { Link } from '@chakra-ui/react'
import type { LinkProps } from '@chakra-ui/react'

export interface SocialIconsProps extends LinkProps {
	href: string
	title: string
}

export const IconLink = (props: SocialIconsProps) => {
	return (
		<Link
			isExternal
			fontSize={['3xl', '4xl', '5xl']}
			_hover={{ color: 'brand' }}
			{...props}
		/>
	)
}
