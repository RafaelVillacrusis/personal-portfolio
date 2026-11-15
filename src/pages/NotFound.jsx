import { useLocation } from 'react-router-dom'
import Button from '../components/Button.jsx'
import usePageTitle from '../hooks/usePageTitle.js'

export default function NotFound() {
  usePageTitle('Page not found')
  const { pathname } = useLocation()

  return (
    <section className="mx-auto flex max-w-2xl flex-col items-center px-5 py-24 text-center sm:py-32">
      <p className="animate-float font-serif text-8xl font-medium text-accent sm:text-9xl" aria-hidden="true">
        404
      </p>
      <h1 className="mt-4 animate-fade-up text-3xl font-medium sm:text-4xl">
        <span className="sr-only">404: </span>This page hit a wrong note.
      </h1>
      <p className="mt-4 text-lg text-muted">
        There's no page at <code className="rounded bg-sand px-2 py-0.5 text-base break-all text-ink">{pathname}</code>.
        It may have moved, or the link might have a typo.
      </p>
      <div className="mt-8 flex flex-wrap justify-center gap-3">
        <Button to="/" icon="arrow">
          Back to home
        </Button>
        <Button to="/projects" variant="secondary">
          See my projects
        </Button>
      </div>
    </section>
  )
}
