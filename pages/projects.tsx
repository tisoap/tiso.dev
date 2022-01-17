import { Projects } from 'components/Projects'
import { data } from 'data'
import { MainLayout } from 'layouts'

const ProjectsPage = () => (
	<MainLayout title={`${data.website.name} | Projects`}>
		<Projects />
	</MainLayout>
)

export default ProjectsPage
