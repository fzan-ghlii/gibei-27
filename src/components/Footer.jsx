import Logo from './Logo'

export default function Footer({ event }) {
  return (
    <footer className="border-t border-white/10 bg-navy-950 px-4 py-12 text-center">
      <div className="mx-auto flex flex-col items-center">
        <Logo className="h-20 w-20 sm:h-24 sm:w-24" />
        <p className="mt-4 font-serif text-xl font-semibold text-cream">{event.org}</p>
        <p className="mt-1 text-sm text-gold">Periode 2026-2027</p>
        <p className="mt-6 text-xs text-white/50">© {new Date().getFullYear()} {event.org}. All rights reserved.</p>
      </div>
    </footer>
  )
}

