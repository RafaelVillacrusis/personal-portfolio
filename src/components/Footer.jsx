import { Link } from 'react-router-dom'
import { profile, socialLinks } from '../data/profile.js'
import SocialLinks from './SocialLinks.jsx'

const year = new Date().getFullYear()

export default function Footer() {
  return (
    <footer className="border-t border-line bg-surface">
      <div className="mx-auto flex max-w-6xl flex-col gap-6 px-5 py-10 sm:px-8 md:flex-row md:items-center md:justify-between">
        <div>
          <Link to="/" className="font-serif text-lg font-medium">
            {profile.name}
          </Link>
          <p className="mt-1 text-sm text-muted">{profile.role}</p>
        </div>
        <SocialLinks links={socialLinks} variant="icons" />
      </div>
      <p className="border-t border-line/70 px-5 py-4 text-center text-xs text-muted">
        © {year} {profile.name}. Built with React and Tailwind CSS.
      </p>
    </footer>
  )
}
