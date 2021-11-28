import { VStack } from '@chakra-ui/react'
import { useState } from 'react'
import { PostCard } from './PostCard'
import { SearchInput } from './SearchInput'
import type { BlogPost } from 'lib/mdx'

export interface PostsProps {
	posts: BlogPost[]
}

export const Posts = ({ posts }: PostsProps) => {
	const [filteredList, setFilteredList] = useState(posts)
	const [searchText, setSearchText] = useState('')

	return (
		<>
			<SearchInput
				placeholder="Search posts"
				value={searchText}
				onChange={(event) => {
					const inputValue = event.target.value
					setSearchText(inputValue)

					const search = inputValue.toLowerCase()
					const filteredPosts = posts.filter(({ frontMatter }) => {
						return frontMatter.title.toLowerCase().indexOf(search) !== -1
					})

					setFilteredList(filteredPosts)
				}}
			/>
			<VStack spacing={4}>
				{filteredList.map((post) => (
					<PostCard key={post.frontMatter.title} post={post} />
				))}
			</VStack>
		</>
	)
}
