import { usePrefersReducedMotion, Text } from '@chakra-ui/react'
import { ExternalLink } from './ExternalLink'
import { MotionHStack } from './MotionBox'
import type { StackProps } from '@chakra-ui/react'

export const Footer = (props: StackProps) => {
	const year = new Date().getFullYear()
	const prefersReducedMotion = usePrefersReducedMotion()
	const layoutId = prefersReducedMotion ? undefined : 'footer'

	return (
		<MotionHStack
			as="footer"
			layoutId={layoutId}
			fontSize="xs"
			alignItems="center"
			textAlign="center"
			justifyContent="center"
			flexWrap="wrap"
			background="url(/images/rain.svg)"
			backgroundRepeat="repeat-x"
			backgroundPosition="bottom"
			p={6}
			spacing={0}
			{...props}
		>
			<ExternalLink href="https://github.com/tisoap/tiso.dev">
				Source code on Github
			</ExternalLink>
			<Text p={4}>Copyright &copy; {year} Tiso Alvarez Puccinelli</Text>
		</MotionHStack>
	)
}
