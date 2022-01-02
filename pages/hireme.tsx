import { Flex, useColorModeValue } from '@chakra-ui/react'
import { MainLayout } from 'layouts'

const HireMePage = () => {
	const boxShadow = useColorModeValue('dark-lg', 'none')

	return (
		<MainLayout title="tiso.dev | Hire Me">
			<Flex
				backgroundImage="/images/loading-buffering.gif"
				backgroundRepeat="no-repeat"
				backgroundSize="100px 100px"
				backgroundPosition="center"
				backgroundColor="gray.800"
				flex={1}
				boxShadow={boxShadow}
				rounded="md"
			>
				<Flex
					as="iframe"
					title="Hire Me"
					src="https://tripetto.app/run/FH9XOQ7SCZ"
					flex={1}
					rounded="md"
				/>
			</Flex>
		</MainLayout>
	)
}

export default HireMePage
