import { usePrefersReducedMotion, Text, HStack } from '@chakra-ui/react'
import { data } from 'data'
import { ExternalLink } from './ExternalLink'
import { MotionBox } from './MotionBox'
import type { StackProps } from '@chakra-ui/react'

export const Footer = (props: StackProps) => {
	const year = new Date().getFullYear()
	const prefersReducedMotion = usePrefersReducedMotion()
	const layoutId = prefersReducedMotion ? undefined : 'footer'

	return (
		<MotionBox as="footer" layoutId={layoutId}>
			<HStack
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
				<ExternalLink href={data.website.source}>
					Source code on Github
				</ExternalLink>
				<Text p={4}>
					Copyright &copy; {year} {data.owner.fullName}
				</Text>
			</HStack>
		</MotionBox>
	)
}
