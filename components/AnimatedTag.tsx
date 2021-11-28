import { Box } from '@chakra-ui/react'
import { Flicker } from 'components/Flicker'
import { useBrandColor } from 'hooks/colorMode'

export const AnimatedTag = () => {
	return (
		<Box as="span" userSelect="none">
			&lt;
			<Flicker color={useBrandColor()}>_</Flicker>
			/&gt;
		</Box>
	)
}
