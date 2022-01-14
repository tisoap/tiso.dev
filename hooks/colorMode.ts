import { useColorModeValue } from '@chakra-ui/react'

export const useCardHoverColor = () =>
	useColorModeValue('purple.100', 'purple.900')

export const useForegroundColor = () => useColorModeValue('white', 'gray.900')

export const useBackgroundColor = () => useColorModeValue('gray.50', 'gray.800')

export const useBrandColor = () => useColorModeValue('purple.600', 'purple.400')

export const useLinkColor = () => useColorModeValue('blue.500', 'blue.300')

export const useBodyTextColor = () => useColorModeValue('gray.800', 'gray.100')

export const useMutedTextColor = () => useColorModeValue('gray.500', 'gray.300')

export const useBrandTextColor = () =>
	useColorModeValue('purple.800', 'purple.200')

export const useInlineCodeBgColor = () =>
	useColorModeValue('gray.100', 'gray.700')
