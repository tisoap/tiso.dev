import { usePrefersReducedMotion } from '@chakra-ui/react'
import { MotionBox } from './MotionBox'
import type { BoxProps } from '@chakra-ui/react'

export const Flicker = (props: BoxProps) => {
	const reducedMotion = usePrefersReducedMotion()
	const repeat = reducedMotion ? 1 : Infinity

	return (
		<MotionBox
			as="span"
			animate={{ opacity: [1, 0, 1] }}
			transition={{ repeat, ease: 'linear', duration: 1 }}
			{...props}
		/>
	)
}
