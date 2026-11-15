export default function Tag({ children }) {
  return (
    <li className="rounded-full border border-line bg-cream px-3 py-1 text-xs font-medium text-muted transition-colors duration-300 hover:border-accent/50 hover:text-ink">
      {children}
    </li>
  )
}
