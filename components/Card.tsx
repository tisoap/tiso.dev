import { useForegroundColor, useBrandColor } from 'hooks/colorMode'
import { MotionBox } from './MotionBox'
import type { BoxProps } from '@chakra-ui/react'
import type { ReactNode } from 'react'

export interface CardProps extends BoxProps {
	children: ReactNode
	layoutId?: string
}

export const Card = ({ children, layoutId, ...rest }: CardProps) => (
	<MotionBox
		layoutId={layoutId}
		backgroundColor={useForegroundColor()}
		borderTop="2px solid"
		borderTopColor={useBrandColor()}
		width="100%"
		overflow="hidden"
		boxShadow="base"
		rounded="md"
		p={6}
		{...rest}
	>
		{children}
	</MotionBox>
)
