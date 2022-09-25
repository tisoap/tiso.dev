import { Flex, useColorModeValue } from '@chakra-ui/react'
import { data } from 'data'
import { MainLayout } from 'layouts'

const HireMePage = () => {
	const boxShadow = useColorModeValue('dark-lg', 'none')

	return (
		<MainLayout title={`${data.website.name} | Hire Me`}>
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
					src={data.owner.tripetto}
					flex={1}
					rounded="md"
				/>
			</Flex>
		</MainLayout>
	)
}

export default HireMePage
