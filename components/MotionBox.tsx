import { Box, usePrefersReducedMotion } from '@chakra-ui/react'
import { motion } from 'framer-motion'
import mobile from 'is-mobile'

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
	const prefersReducedMotion = usePrefersReducedMotion()
	const isMobileDevice = mobile()
	const noAnimation = prefersReducedMotion || isMobileDevice

	if (noAnimation) {
		return <Motion {...props} {...noAnimationProps} />
	}

	return <Motion {...props} />
}
