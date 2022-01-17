import { ChakraProvider } from '@chakra-ui/react'
import { theme } from './theme'
import type { ReactNode } from 'react'

type ThemeProviderProps = {
	children: ReactNode
}

export const ThemeProvider = ({ children }: ThemeProviderProps) => (
	<ChakraProvider resetCSS theme={theme}>
		{children}
	</ChakraProvider>
)
