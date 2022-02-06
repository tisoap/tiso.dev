import { ChakraProvider } from '@chakra-ui/react'
import { theme, config } from './theme'
import type { ReactNode } from 'react'

type ThemeProviderProps = {
	children: ReactNode
}

export const ThemeProvider = ({ children }: ThemeProviderProps) => (
	<ChakraProvider resetCSS theme={theme}>
		{children}
	</ChakraProvider>
)

export { theme, config }
