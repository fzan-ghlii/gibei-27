import { motion } from 'framer-motion'
import SectionHeading from './SectionHeading'

const container = { hidden: {}, show: { transition: { staggerChildren: 0.12 } } }
const item = {
  hidden: { opacity: 0, y: 36 },
  show: { opacity: 1, y: 0, transition: { duration: 0.7, ease: 'easeOut' } },
}

function Badge({ children, solid }) {
  return (
    <span
      className={`inline-block rounded-full px-4 py-1.5 text-[11px] font-semibold uppercase tracking-[0.14em] ${
        solid ? 'bg-gold text-navy-900' : 'bg-gold-soft text-gold-dark'
      }`}
    >
      {children}
    </span>
  )
}

export default function Presidium({ data }) {
  const [lead, ...rest] = data
  return (
    <section id="presidium" className="relative bg-cream px-4 py-24 sm:py-28">
      <div className="bg-dots-dark pointer-events-none absolute inset-0" />
      <div className="relative mx-auto max-w-6xl">
        <SectionHeading
          eyebrow="Badan Pengurus Harian"
          title="Presidium"
          subtitle="Jajaran pimpinan KSPM GIBEI UNIMED Periode 2026-2027."
          accent="gold"
        />

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: '-60px' }}
          className="mt-14"
        >
          {/* Presiden Direktur */}
          <motion.div
            variants={item}
            className="relative mx-auto max-w-xl overflow-hidden rounded-3xl border-t-4 border-gold bg-white p-8 text-center shadow-[0_20px_50px_-15px_rgba(26,65,98,0.25)] sm:p-10"
          >
            <div className="pointer-events-none absolute -top-20 left-1/2 h-40 w-72 -translate-x-1/2 rounded-full bg-gold/25 blur-3xl" />
            <div className="relative">
              <Badge solid>{lead.title}</Badge>
              <h3 className="mt-5 text-3xl font-bold leading-snug text-navy-800 sm:text-4xl">{lead.name}</h3>
            </div>
          </motion.div>

          {/* Anggota Presidium lain */}
          <div className="mt-6 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {rest.map((p) => (
              <motion.div
                key={p.name}
                variants={item}
                whileHover={{ y: -8 }}
                className="rounded-2xl border-t-4 border-gold bg-white p-7 text-center shadow-[0_12px_32px_-12px_rgba(26,65,98,0.2)] transition-shadow hover:shadow-[0_24px_44px_-14px_rgba(26,65,98,0.3)]"
              >
                <Badge>{p.title}</Badge>
                <h3 className="mt-4 text-xl font-bold leading-snug text-navy-800">{p.name}</h3>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
