import Button from '../components/Button.jsx'
import Icon from '../components/Icon.jsx'
import Reveal from '../components/Reveal.jsx'
import ProjectCard from '../components/ProjectCard.jsx'
import usePageTitle from '../hooks/usePageTitle.js'
import { profile } from '../data/profile.js'
import { projects } from '../data/projects.js'
import portrait from '../assets/images/rafael-portrait.webp'

const highlights = [
  { value: '3rd year', label: 'BSIT at Gordon College' },
  { value: "Dean's Lister", label: '2024–2026' },
  { value: '3 instruments', label: 'Drums, bass & guitar' },
]

export default function Home() {
  usePageTitle()
  const featured = projects.find((p) => p.featured)

  return (
    <>
      {/* Hero */}
      <section className="mx-auto grid max-w-6xl items-center gap-12 px-5 pt-12 pb-16 sm:px-8 md:grid-cols-[1.2fr_1fr] md:pt-20 md:pb-24">
        <div>
          <p className="inline-flex animate-fade-up items-center gap-2 rounded-full border border-line bg-surface px-4 py-1.5 text-xs font-medium text-muted">
            <Icon name="pin" className="h-3.5 w-3.5 text-accent" />
            {profile.location}
          </p>
          <h1 className="mt-6 animate-fade-up text-5xl leading-[1.05] font-medium [animation-delay:100ms] sm:text-6xl lg:text-7xl">
            Hi, I'm <span className="text-accent italic">{profile.firstName}</span>.
          </h1>
          <p className="mt-4 animate-fade-up text-lg font-medium text-ink/80 [animation-delay:200ms] sm:text-xl">
            {profile.role}
          </p>
          <p className="mt-6 max-w-xl animate-fade-up text-lg leading-relaxed text-muted [animation-delay:300ms]">
            {profile.shortIntro}
          </p>
          <div className="mt-8 flex animate-fade-up flex-wrap gap-3 [animation-delay:400ms]">
            <Button to="/projects" icon="arrow">
              View my work
            </Button>
            <Button to="/contact" variant="secondary">
              Get in touch
            </Button>
          </div>
        </div>

        <div className="relative mx-auto w-full max-w-sm animate-fade-up [animation-delay:250ms] md:max-w-none">
          <div
            className="absolute -inset-3 -z-10 rotate-3 animate-tilt-in rounded-[2rem] bg-sand [animation-delay:500ms]"
            aria-hidden="true"
          />
          <div className="group overflow-hidden rounded-[1.75rem] shadow-xl">
            <img
              src={portrait}
              alt="Portrait of Rafael Villacrusis in a white overshirt and olive button-up, seated against a gray backdrop"
              className="aspect-square w-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.04]"
            />
          </div>
        </div>
      </section>

      {/* Highlights */}
      <section aria-label="Highlights" className="border-y border-line bg-surface">
        <ul className="mx-auto grid max-w-6xl gap-6 px-5 py-8 sm:grid-cols-3 sm:px-8">
          {highlights.map((h, i) => (
            <Reveal as="li" key={h.value} delay={i * 120} className="text-center sm:text-left">
              <p className="font-serif text-2xl font-medium">{h.value}</p>
              <p className="mt-1 text-sm text-muted">{h.label}</p>
            </Reveal>
          ))}
        </ul>
      </section>

      {/* Featured project preview */}
      {featured && (
        <section className="mx-auto max-w-6xl px-5 py-16 sm:px-8 md:py-24">
          <Reveal className="mb-8 flex flex-wrap items-end justify-between gap-4">
            <h2 className="text-3xl font-medium sm:text-4xl">Recent work</h2>
            <Button to="/projects" variant="secondary" icon="arrow">
              All projects
            </Button>
          </Reveal>
          <Reveal delay={100}>
            <ProjectCard project={featured} />
          </Reveal>
        </section>
      )}
    </>
  )
}
