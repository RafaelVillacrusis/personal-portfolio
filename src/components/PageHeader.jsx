// Shared heading block at the top of each inner page
export default function PageHeader({ eyebrow, title, children }) {
  return (
    <header className="mx-auto max-w-6xl px-5 pt-14 pb-10 sm:px-8 md:pt-20">
      <p className="animate-fade-up text-xs font-semibold tracking-[0.2em] text-accent uppercase">{eyebrow}</p>
      <h1 className="mt-3 animate-fade-up text-4xl font-medium [animation-delay:100ms] sm:text-5xl">{title}</h1>
      {children && (
        <p className="mt-4 max-w-2xl animate-fade-up text-lg leading-relaxed text-muted [animation-delay:200ms]">
          {children}
        </p>
      )}
    </header>
  )
}
