import Icon from './Icon.jsx'

// variant "icons": round icon buttons (footer)
// variant "cards": full rows with label and handle (contact page)
export default function SocialLinks({ links, variant = 'icons' }) {
  if (variant === 'cards') {
    return (
      <ul className="grid gap-3 sm:grid-cols-2 lg:grid-cols-1">
        {links.map((link) => {
          const isMail = link.href.startsWith('mailto:')
          return (
            <li key={link.label}>
              <a
                href={link.href}
                {...(!isMail && { target: '_blank', rel: 'noopener noreferrer' })}
                className="group flex items-center gap-4 rounded-2xl border border-line bg-surface p-4 transition duration-300 hover:-translate-y-1 hover:border-accent/40 hover:shadow-md"
              >
                <span className="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-sand text-accent transition duration-300 group-hover:-rotate-6 group-hover:bg-ink group-hover:text-cream">
                  <Icon name={link.icon} />
                </span>
                <span className="min-w-0">
                  <span className="block text-sm font-semibold">{link.label}</span>
                  <span className="block truncate text-sm text-muted">{link.handle}</span>
                </span>
                {!isMail && <span className="sr-only">(opens in a new tab)</span>}
              </a>
            </li>
          )
        })}
      </ul>
    )
  }

  return (
    <ul className="flex flex-wrap gap-2">
      {links.map((link) => {
        const isMail = link.href.startsWith('mailto:')
        return (
          <li key={link.label}>
            <a
              href={link.href}
              {...(!isMail && { target: '_blank', rel: 'noopener noreferrer' })}
              aria-label={isMail ? `Send an email to ${link.handle}` : `${link.label} (opens in a new tab)`}
              className="grid h-10 w-10 place-items-center rounded-full border border-line text-muted transition duration-300 hover:-translate-y-1 hover:border-ink hover:bg-ink hover:text-cream"
            >
              <Icon name={link.icon} />
            </a>
          </li>
        )
      })}
    </ul>
  )
}
