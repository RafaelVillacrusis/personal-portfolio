import Button from './Button.jsx'
import Icon from './Icon.jsx'
import Tag from './Tag.jsx'

// One card used for every project. Featured projects get a wider layout
// and show the feature list and role.
export default function ProjectCard({ project }) {
  const { title, subtitle, description, features, role, tech, image, imageAlt, liveUrl, liveNote, codeUrl, featured } =
    project

  return (
    <article className="group overflow-hidden rounded-3xl border border-line bg-surface shadow-sm transition-shadow duration-500 hover:shadow-xl">
      <div className={`bg-sand p-3 sm:p-5 ${featured ? 'lg:px-16 lg:pt-12 lg:pb-0' : ''}`}>
        <div
          className={`overflow-hidden border border-line shadow-md ${
            featured ? 'rounded-xl lg:rounded-b-none' : 'rounded-xl'
          }`}
        >
          <img
            src={image}
            alt={imageAlt}
            loading="lazy"
            className="w-full object-cover object-top transition-transform duration-700 ease-out group-hover:scale-[1.03]"
          />
        </div>
      </div>

      <div className={`p-6 sm:p-8 ${featured ? 'lg:grid lg:grid-cols-2 lg:gap-12 lg:p-12' : ''}`}>
        <div>
          {featured && (
            <p className="mb-3 text-xs font-semibold tracking-[0.2em] text-accent uppercase">Featured project</p>
          )}
          <h2 className="text-2xl font-medium sm:text-3xl">{title}</h2>
          {subtitle && <p className="mt-1 text-sm font-medium text-muted">{subtitle}</p>}
          <p className="mt-4 leading-relaxed text-muted">{description}</p>
        </div>

        <div className={featured ? 'mt-6 lg:mt-0' : ''}>
          {features && (
            <ul className="space-y-2">
              {features.map((f) => (
                <li key={f} className="flex gap-3 text-sm">
                  <Icon name="check" className="mt-0.5 h-4 w-4 shrink-0 text-accent" />
                  <span>{f}</span>
                </li>
              ))}
            </ul>
          )}

          {role && (
            <p className="mt-5 rounded-xl bg-cream p-4 text-sm leading-relaxed">
              <span className="font-semibold">My role: </span>
              {role}
            </p>
          )}

          <ul className="mt-5 flex flex-wrap gap-2" aria-label="Technologies used">
            {tech.map((t) => (
              <Tag key={t}>{t}</Tag>
            ))}
          </ul>

          {(liveUrl || codeUrl) && (
            <div className="mt-6 flex flex-wrap gap-3 pt-1">
              {liveUrl && (
                <Button href={liveUrl} icon="external">
                  Live demo
                </Button>
              )}
              {codeUrl && (
                <Button href={codeUrl} variant="secondary" icon="github">
                  View on GitHub
                </Button>
              )}
            </div>
          )}
          {liveNote && <p className="mt-3 text-xs text-muted">{liveNote}</p>}
        </div>
      </div>
    </article>
  )
}
