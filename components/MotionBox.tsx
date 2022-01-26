import { Box, usePrefersReducedMotion } from '@chakra-ui/react'
import { motion } from 'framer-motion'
import mobile from 'is-mobile'
import type { ComponentProps } from 'react'

const Motion = motion(Box)

const noAnimationProps = {
	initial: undefined,
	animate: undefined,
	exit: undefined,
	transition: undefined,
	layoutId: undefined,
}

export type MotionBoxProps = ComponentProps<typeof Motion>

export const MotionBox = (props: MotionBoxProps) => {
	const prefersReducedMotion = usePrefersReducedMotion()
	const isMobileDevice = mobile()
	const noAnimation = prefersReducedMotion || isMobileDevice

	if (noAnimation) {
		return <Motion {...props} {...noAnimationProps} />
	}

	return <Motion {...props} />
}
