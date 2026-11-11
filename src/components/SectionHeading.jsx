import { motion } from 'framer-motion'

/** Judul section: eyebrow kecil + judul serif + ornamen garis. */
export default function SectionHeading({ eyebrow, title, subtitle, tone = 'light', accent = 'gold' }) {
  const dark = tone === 'dark' // true = background gelap
  const eyebrowColor = accent === 'gold' ? (dark ? 'text-gold' : 'text-gold-dark') : 'text-cyan-brand'
  const lineColor = accent === 'gold' ? 'bg-gold' : 'bg-cyan-brand'
  return (
    <motion.div
      initial={{ opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-80px' }}
      transition={{ duration: 0.7, ease: 'easeOut' }}
      className="mx-auto max-w-2xl text-center"
    >
      {eyebrow && (
        <p className={`text-xs font-semibold uppercase tracking-[0.28em] ${eyebrowColor}`}>{eyebrow}</p>
      )}
      <h2 className={`${eyebrow ? 'mt-3' : ''} text-4xl font-semibold leading-tight sm:text-5xl ${dark ? 'text-white' : 'text-navy-800'}`}>
        {title}
      </h2>
      <div className="mt-5 flex items-center justify-center gap-3">
        <span className={`h-px w-12 ${lineColor} opacity-60`} />
        <span className={`h-2 w-2 rotate-45 ${lineColor}`} />
        <span className={`h-px w-12 ${lineColor} opacity-60`} />
      </div>
      {subtitle && (
        <p className={`mx-auto mt-5 max-w-xl text-sm leading-relaxed sm:text-base ${dark ? 'text-white/70' : 'text-navy-800/70'}`}>
          {subtitle}
        </p>
      )}
    </motion.div>
  )
}

