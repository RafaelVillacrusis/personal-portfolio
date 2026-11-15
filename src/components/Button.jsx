import { Link } from 'react-router-dom'
import Icon from './Icon.jsx'

const styles = {
  primary: 'bg-ink text-cream hover:bg-accent-dark',
  secondary: 'border border-ink/20 bg-transparent text-ink hover:border-ink hover:bg-ink hover:text-cream',
}

const base =
  'group inline-flex items-center justify-center gap-2 rounded-full px-6 py-3 text-sm font-semibold transition-all duration-300 hover:-translate-y-0.5 hover:shadow-lg active:translate-y-0 active:scale-[0.98]'

// One button component for internal links (to) and external links (href)
export default function Button({ to, href, variant = 'primary', icon, children, className = '' }) {
  const classes = `${base} ${styles[variant]} ${className}`
  const content = (
    <>
      {children}
      {icon && <Icon name={icon} className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />}
    </>
  )

  if (href) {
    return (
      <a href={href} target="_blank" rel="noopener noreferrer" className={classes}>
        {content}
        <span className="sr-only">(opens in a new tab)</span>
      </a>
    )
  }

  return (
    <Link to={to} className={classes}>
      {content}
    </Link>
  )
}
