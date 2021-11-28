import { VStack } from '@chakra-ui/react'
import { useState } from 'react'
import { projects } from 'data/projects'
import { ProjectCard } from './ProjectCard'
import { SearchInput } from './SearchInput'

export const Projects = () => {
	const [filteredList, setFilteredList] = useState(projects)
	const [searchText, setSearchText] = useState('')

	return (
		<>
			<SearchInput
				placeholder="Search project"
				value={searchText}
				onChange={(event) => {
					const inputValue = event.target.value
					setSearchText(inputValue)

					const search = inputValue.toLowerCase()
					const filteredProjects = projects.filter(({ name }) => {
						return name.toLowerCase().indexOf(search) !== -1
					})

					setFilteredList(filteredProjects)
				}}
			/>
			<VStack spacing={4}>
				{filteredList.map((project) => (
					<ProjectCard key={project.name} project={project} />
				))}
			</VStack>
		</>
	)
}
