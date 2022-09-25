import { Box } from '@chakra-ui/react'
import { Flicker } from 'components/Flicker'

export const AnimatedTag = () => {
	return (
		<Box as="span" userSelect="none">
			&lt;
			<Flicker color="brand">_</Flicker>
			/&gt;
		</Box>
	)
}
