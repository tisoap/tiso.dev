import { MotionBox } from './MotionBox'
import type { BoxProps } from '@chakra-ui/react'

export const Flicker = (props: BoxProps) => {
	return (
		<MotionBox
			as="span"
			animate={{ opacity: [1, 0, 1] }}
			transition={{ repeat: Infinity, ease: 'linear', duration: 1 }}
			{...props}
		/>
	)
}
