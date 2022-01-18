import { Box, usePrefersReducedMotion } from '@chakra-ui/react'
import { motion } from 'framer-motion'

const Motion = motion(Box)

export type MotionBoxProps = React.ComponentProps<typeof Motion>

const noAnimationProps = {
	initial: undefined,
	animate: undefined,
	exit: undefined,
	transition: undefined,
	layoutId: undefined,
}

export const MotionBox = (props: MotionBoxProps) => {
	const reducedMotion = usePrefersReducedMotion()

	if (reducedMotion) {
		return <Motion {...props} {...noAnimationProps} />
	}

	return <Motion {...props} />
}
