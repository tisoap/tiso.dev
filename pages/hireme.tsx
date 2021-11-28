import { Box, useColorModeValue } from '@chakra-ui/react'
import { MainLayout } from 'layouts'

const HireMePage = () => {
	const boxShadow = useColorModeValue('dark-lg', 'none')

	return (
		<MainLayout title="tiso.dev | Hire Me">
			<Box
				as="iframe"
				backgroundColor="gray.800"
				title="Hire Me"
				src="https://tripetto.app/run/FH9XOQ7SCZ"
				flex={1}
				boxShadow={boxShadow}
				rounded="md"
			/>
		</MainLayout>
	)
}

export default HireMePage
