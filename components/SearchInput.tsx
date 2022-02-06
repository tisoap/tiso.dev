import { InputGroup, InputRightElement, Input } from '@chakra-ui/react'
import { AiOutlineSearch } from 'react-icons/ai'
import type { InputProps } from '@chakra-ui/react'

export interface SearchInputProps extends InputProps {
	value: string
	placeholder: string
}

export const SearchInput = (props: SearchInputProps) => {
	return (
		<InputGroup
			my="2rem"
			width={['2xs', 'xs', 'lg']}
			mx="auto"
			isolation="isolate"
		>
			<InputRightElement pointerEvents="none">
				<AiOutlineSearch />
			</InputRightElement>
			<Input backgroundColor="foreground" type="text" {...props} />
		</InputGroup>
	)
}
