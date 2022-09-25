import { Heading, Text, VStack, HStack } from '@chakra-ui/react'
import { Card } from './Card'
import { ExternalLink } from './ExternalLink'
import type { Project } from 'data/projects'

export type ProjectCardProps = {
	project: Project
}

export const ProjectCard = ({ project }: ProjectCardProps) => {
	return (
		<Card textAlign="left" userSelect="none">
			<VStack spacing={3} alignItems="start">
				<Text
					as="span"
					color="brand"
					textTransform="uppercase"
					fontWeight="bold"
					fontSize={['xs', 'xs', 'sm']}
					letterSpacing={1.1}
				>
					Project
				</Text>
				<Heading as="h3" fontSize={['md', 'xl', '2xl']} fontFamily="body">
					{project.name}
				</Heading>
				<Text color="mutedText">{project.description}</Text>
				<HStack spacing={3}>
					{project.demo && (
						<ExternalLink href={project.demo}>Preview</ExternalLink>
					)}
					{project.github && (
						<ExternalLink href={project.github}>GitHub</ExternalLink>
					)}
				</HStack>
			</VStack>
		</Card>
	)
}
