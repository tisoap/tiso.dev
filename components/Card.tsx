import { Box } from '@chakra-ui/react'
import type { BoxProps } from '@chakra-ui/react'
import type { ReactNode } from 'react'

export interface CardProps extends BoxProps {
	children: ReactNode
}

export const Card = ({ children, ...rest }: CardProps) => (
	<Box
		backgroundColor="foreground"
		borderTop="2px solid"
		borderTopColor="brand"
		width="100%"
		overflow="hidden"
		boxShadow="base"
		rounded="md"
		p={6}
		{...rest}
	>
		{children}
	</Box>
)
