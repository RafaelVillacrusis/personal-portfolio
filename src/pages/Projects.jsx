import PageHeader from '../components/PageHeader.jsx'
import ProjectCard from '../components/ProjectCard.jsx'
import Reveal from '../components/Reveal.jsx'
import usePageTitle from '../hooks/usePageTitle.js'
import { projects } from '../data/projects.js'

export default function Projects() {
  usePageTitle('Projects')

  return (
    <>
      <PageHeader eyebrow="Projects" title="Things I've built.">
        Projects I've planned, designed, built, and deployed myself.
      </PageHeader>

      <div className="mx-auto max-w-6xl space-y-8 px-5 pb-20 sm:px-8">
        {projects.map((project) => (
          <Reveal key={project.id}>
            <ProjectCard project={project} />
          </Reveal>
        ))}
      </div>
    </>
  )
}
