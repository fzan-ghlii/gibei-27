import { motion } from 'framer-motion'
import { ChevronDown } from 'lucide-react'
import Logo from './Logo'

export default function Hero({ event }) {
  return (
    <header id="top" className="relative flex min-h-screen items-center justify-center overflow-hidden bg-navy-900 px-4">
      <div className="bg-dots pointer-events-none absolute inset-0" />
      <div className="pointer-events-none absolute -left-32 -top-32 h-[26rem] w-[26rem] animate-float rounded-full bg-cyan-brand/25 blur-[120px]" />
      <div className="pointer-events-none absolute -bottom-40 -right-24 h-[28rem] w-[28rem] animate-float rounded-full bg-skyblue/25 blur-[130px] [animation-delay:-6s]" />
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-navy-900" />

      <div className="relative z-10 mx-auto flex max-w-3xl flex-col items-center text-center">
        <motion.div initial={{ opacity: 0, scale: 0.8 }} animate={{ opacity: 1, scale: 1 }} transition={{ delay: 1, duration: 0.8 }}>
          <Logo className="h-32 w-32 sm:h-44 sm:w-44 md:h-48 md:w-48" />
        </motion.div>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2, duration: 0.8 }}
          className="mt-8 text-xs font-semibold uppercase tracking-[0.3em] text-cyan-brand"
        >
          Official Announcement
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.35, duration: 0.9 }}
          className="mt-5 text-4xl font-semibold leading-[1.15] text-white sm:text-6xl"
        >
          Pengurus
          <br />
          {event.org}
        </motion.h1>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.7, duration: 0.8 }}
          className="mt-6 flex items-center gap-4"
        >
          <span className="h-px w-10 bg-gold/70" />
          <span className="font-serif text-lg italic text-gold sm:text-2xl">{event.period}</span>
          <span className="h-px w-10 bg-gold/70" />
        </motion.div>
      </div>

      <motion.a
        href="#presidium"
        aria-label="Gulir ke bawah"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, y: [0, 8, 0] }}
        transition={{ opacity: { delay: 2.2 }, y: { delay: 2.2, repeat: Infinity, duration: 1.8 } }}
        className="absolute bottom-8 text-white/60 hover:text-cyan-brand"
      >
        <ChevronDown className="h-7 w-7" />
      </motion.a>
    </header>
  )
}

