import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import Logo from './Logo'

const links = [
  { href: '#presidium', label: 'Presidium' },
  { href: '#divisi', label: 'Divisi' },
  { href: '#anggota', label: 'Anggota' },
]

export default function Navbar({ org }) {
  const [scrolled, setScrolled] = useState(false)
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <motion.nav
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ delay: 0.9, duration: 0.7 }}
      className={`fixed inset-x-0 top-0 z-40 transition-all duration-300 ${
        scrolled ? 'border-b border-white/10 bg-navy-900/80 py-2 backdrop-blur-xl' : 'py-4'
      }`}
    >
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 sm:px-6">
        <a href="#top" className="flex items-center gap-3">
          <Logo className="h-12 w-12 sm:h-14 sm:w-14" />
          <span className="hidden text-sm font-semibold tracking-wide text-white sm:block">{org}</span>
        </a>
        <ul className="flex items-center gap-1 sm:gap-2">
          {links.map((l) => (
            <li key={l.href}>
              <a
                href={l.href}
                className="rounded-full px-3 py-2 text-xs font-medium text-white/80 transition-colors hover:bg-white/10 hover:text-cyan-brand sm:px-4 sm:text-sm"
              >
                {l.label}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </motion.nav>
  )
}

