import { motion, AnimatePresence } from 'framer-motion'
import Logo from './Logo'

const UNITS = [
  ['days', 'Hari'],
  ['hours', 'Jam'],
  ['minutes', 'Menit'],
  ['seconds', 'Detik'],
]

function Digit({ value, label }) {
  const text = String(value).padStart(2, '0')
  return (
    <div className="glass flex flex-1 flex-col items-center rounded-2xl py-4 sm:max-w-[150px] sm:py-6">
      <div className="relative h-12 w-full overflow-hidden text-center sm:h-16 md:h-20">
        <AnimatePresence mode="popLayout" initial={false}>
          <motion.span
            key={text}
            initial={{ y: '100%', opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: '-100%', opacity: 0 }}
            transition={{ duration: 0.4, ease: 'easeOut' }}
            className="lining-nums block h-12 font-serif text-4xl font-semibold leading-[3rem] text-white sm:h-16 sm:text-5xl sm:leading-[4rem] md:h-20 md:text-6xl md:leading-[5rem]"
          >
            {text}
          </motion.span>
        </AnimatePresence>
      </div>
      <span className="mt-2 text-[10px] font-semibold uppercase tracking-[0.2em] text-cyan-brand sm:text-xs">
        {label}
      </span>
    </div>
  )
}

export default function Countdown({ time, event }) {
  return (
    <motion.section
      key="countdown"
      initial={{ opacity: 1 }}
      exit={{ opacity: 0, scale: 1.12, filter: 'blur(14px)' }}
      transition={{ duration: 1.2, ease: 'easeInOut' }}
      className="fixed inset-0 z-50 flex items-center justify-center overflow-x-hidden overflow-y-auto bg-navy-900 px-4 py-6"
    >
      {/* Background layer terisolasi dengan overflow-hidden agar efek cahaya tidak menambah tinggi scroll */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="bg-dots absolute inset-0" />
        <div className="absolute -left-28 -top-28 h-[26rem] w-[26rem] animate-float rounded-full bg-cyan-brand/25 blur-[120px]" />
        <div className="absolute -bottom-40 -right-24 h-[28rem] w-[28rem] animate-float rounded-full bg-skyblue/25 blur-[130px] [animation-delay:-6s]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_30%,#0c2a43_85%)]" />
      </div>

      <div className="relative z-10 my-auto flex w-full max-w-3xl flex-col items-center text-center">
        <motion.div initial={{ opacity: 0, scale: 0.8 }} animate={{ opacity: 1, scale: 1 }} transition={{ delay: 0.1, duration: 0.8 }}>
          <Logo className="h-24 w-24 sm:h-32 sm:w-32 md:h-36 md:w-36" />
        </motion.div>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.8 }}
          className="mt-5 text-xs font-semibold uppercase tracking-[0.3em] text-cyan-brand"
        >
          Official Announcement
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 28 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.45, duration: 0.9 }}
          className="mt-3 text-3xl font-semibold leading-tight text-white sm:text-5xl md:text-6xl"
        >
          {event.title}
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.7, duration: 0.9 }}
          className="mt-3 text-sm font-medium tracking-[0.12em] text-white/80 sm:text-base"
        >
          {event.org}
        </motion.p>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.85, duration: 0.9 }}
          className="mt-2 flex items-center gap-4"
        >
          <span className="h-px w-8 bg-gold/70" />
          <span className="font-serif text-lg italic text-gold sm:text-2xl">{event.period}</span>
          <span className="h-px w-8 bg-gold/70" />
        </motion.div>

        <div className="mt-8 flex w-full justify-center gap-2 sm:mt-10 sm:gap-4">
          {UNITS.map(([key, label], i) => (
            <motion.div
              key={key}
              className="flex flex-1 justify-center sm:max-w-[150px]"
              initial={{ opacity: 0, y: 36 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1 + i * 0.12, duration: 0.7 }}
            >
              <Digit value={time[key]} label={label} />
            </motion.div>
          ))}
        </div>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.7 }}
          className="mt-8 text-xs tracking-wide text-white/60 sm:text-sm"
        >
          Diumumkan pada 15 November 2026 · 15.00 WIB
        </motion.p>
      </div>
    </motion.section>
  )
}
