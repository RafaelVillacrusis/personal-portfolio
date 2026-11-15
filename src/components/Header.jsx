import { useEffect, useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import Icon from './Icon.jsx'

const navItems = [
  { to: '/', label: 'Home' },
  { to: '/about', label: 'About' },
  { to: '/projects', label: 'Projects' },
  { to: '/contact', label: 'Contact' },
]

const linkClass = ({ isActive }) =>
  `rounded-full px-4 py-2 text-sm font-medium transition-colors ${
    isActive ? 'bg-ink text-cream' : 'text-muted hover:bg-sand hover:text-ink'
  }`

export default function Header() {
  const [open, setOpen] = useState(false)
  // Close the mobile menu with the Escape key
  useEffect(() => {
    const onKey = (e) => e.key === 'Escape' && setOpen(false)
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [])

  return (
    <header className="sticky top-0 z-40 border-b border-line/70 bg-cream/85 backdrop-blur-md">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-5 py-3 sm:px-8">
        <Link to="/" className="group flex items-center gap-3" aria-label="Rafael Villacrusis, go to home page">
          <span className="grid h-9 w-9 place-items-center rounded-lg bg-ink font-serif text-sm font-semibold text-cream transition-transform duration-300 group-hover:-rotate-6">
            RV
          </span>
          <span className="font-serif text-lg font-medium">Rafael Villacrusis</span>
        </Link>

        <nav aria-label="Main" className="hidden md:block">
          <ul className="flex items-center gap-1">
            {navItems.map((item) => (
              <li key={item.to}>
                <NavLink to={item.to} end className={linkClass}>
                  {item.label}
                </NavLink>
              </li>
            ))}
          </ul>
        </nav>

        <button
          type="button"
          className="grid h-10 w-10 place-items-center rounded-full text-ink hover:bg-sand md:hidden"
          aria-expanded={open}
          aria-controls="mobile-nav"
          aria-label={open ? 'Close menu' : 'Open menu'}
          onClick={() => setOpen((v) => !v)}
        >
          <Icon name={open ? 'close' : 'menu'} className="h-6 w-6" />
        </button>
      </div>

      {open && (
        <nav id="mobile-nav" aria-label="Mobile" className="animate-slide-down border-t border-line/70 md:hidden">
          <ul className="mx-auto flex max-w-6xl flex-col gap-1 px-5 py-4">
            {navItems.map((item, i) => (
              <li key={item.to} className="animate-fade-up" style={{ animationDelay: `${i * 50}ms` }}>
                <NavLink
                  to={item.to}
                  end
                  onClick={() => setOpen(false)}
                  className={({ isActive }) =>
                    `block rounded-xl px-4 py-3 text-base font-medium ${
                      isActive ? 'bg-ink text-cream' : 'text-ink hover:bg-sand'
                    }`
                  }
                >
                  {item.label}
                </NavLink>
              </li>
            ))}
          </ul>
        </nav>
      )}
    </header>
  )
}
