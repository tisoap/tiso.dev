import { IconButton, useColorMode } from '@chakra-ui/react'
import { useEffect, useState } from 'react'
import { BsFillLightbulbOffFill, BsFillLightbulbFill } from 'react-icons/bs'

const wait = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms))

export const ToggleLightDarkButton = () => {
	const [offAudio, setOffAudio] = useState<HTMLAudioElement | null>(null)
	const [onAudio, setOnAudio] = useState<HTMLAudioElement | null>(null)
	const { colorMode, toggleColorMode } = useColorMode()
	const text = colorMode === 'light' ? 'Turn lights off' : 'Turn lights on'

	useEffect(() => {
		setOnAudio(new Audio('/sounds/switch-1.mp3'))
		setOffAudio(new Audio('/sounds/switch-2.mp3'))
	}, [])

	const icon =
		colorMode === 'light' ? <BsFillLightbulbFill /> : <BsFillLightbulbOffFill />

	const handleClick = async () => {
		const audio = colorMode === 'light' ? offAudio : onAudio
		await audio?.play()
		await wait(50)
		toggleColorMode()
	}

	return (
		<IconButton
			icon={icon}
			aria-label={text}
			title={text}
			borderRadius="md"
			onClick={() => {
				void handleClick()
			}}
		/>
	)
}
