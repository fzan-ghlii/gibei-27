import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { CalendarDays, TrendingUp, Clapperboard, Users, Camera, GraduationCap, ChevronDown } from 'lucide-react'
import SectionHeading from './SectionHeading'

const ICONS = {
  kegiatan: CalendarDays,
  investasi: TrendingUp,
  media: Clapperboard,
  hrd: Users,
  galeri: Camera,
  edukasi: GraduationCap,
}

function Person({ label, name }) {
  return (
    <div className="border-b border-navy-800/10 pb-3 last:border-0 last:pb-0">
      <p className="text-[11px] font-semibold uppercase tracking-[0.16em] text-cyan-brand">{label}</p>
      <p className="mt-1 text-base font-bold text-navy-800">{name}</p>
    </div>
  )
}

function DivisionCard({ division, index }) {
  const [open, setOpen] = useState(false)
  const Icon = ICONS[division.id] ?? Users

  return (
    <motion.article
      initial={{ opacity: 0, y: 36 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ duration: 0.6, delay: (index % 3) * 0.1, ease: 'easeOut' }}
      className="overflow-hidden rounded-2xl border border-navy-800/10 bg-white shadow-[0_12px_32px_-14px_rgba(26,65,98,0.25)] transition-shadow hover:shadow-[0_24px_44px_-14px_rgba(26,65,98,0.35)]"
    >
      <div className="relative overflow-hidden bg-gradient-to-br from-navy-800 to-navy-900 px-6 py-6 text-center">
        <div className="pointer-events-none absolute -right-8 -top-10 h-28 w-28 rounded-full bg-cyan-brand/30 blur-2xl" />
        <span className="relative mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-white/10 ring-1 ring-white/25">
          <Icon className="h-6 w-6 text-cyan-brand" strokeWidth={1.75} />
        </span>
        <h3 className="relative mt-3 text-xl font-semibold text-white">{division.name}</h3>
      </div>

      <div className="space-y-3 p-6">
        <Person label="Ketua Divisi" name={division.ketua} />
        <Person label="Wakil Ketua Divisi" name={division.wakil} />

        <button
          type="button"
          onClick={() => setOpen((o) => !o)}
          aria-expanded={open}
          className="mt-2 flex w-full items-center justify-between rounded-xl bg-skyblue/10 px-4 py-3 text-sm font-semibold text-navy-800 transition-colors hover:bg-skyblue/20"
        >
          <span>
            {open ? 'Sembunyikan Anggota' : 'Lihat Anggota'}
            <span className="ml-2 rounded-full bg-navy-800 px-2 py-0.5 text-xs text-white">{division.anggota.length}</span>
          </span>
          <ChevronDown className={`h-4 w-4 transition-transform duration-300 ${open ? 'rotate-180' : ''}`} />
        </button>

        <AnimatePresence initial={false}>
          {open && (
            <motion.ol
              key="members"
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: 'auto', opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.35, ease: 'easeInOut' }}
              className="overflow-hidden"
            >
              {division.anggota.map((m, i) => (
                <li key={m} className="flex gap-3 border-b border-dashed border-navy-800/15 py-2.5 text-sm text-navy-800/90 last:border-0">
                  <span className="w-5 shrink-0 text-right text-xs font-semibold leading-5 text-cyan-brand">{i + 1}</span>
                  <span>{m}</span>
                </li>
              ))}
            </motion.ol>
          )}
        </AnimatePresence>
      </div>
    </motion.article>
  )
}

export default function Divisions({ data }) {
  return (
    <section id="divisi" className="relative bg-white px-4 py-24 sm:py-28">
      <div className="bg-dots-dark pointer-events-none absolute inset-0 opacity-70" />
      <div className="relative mx-auto max-w-6xl">
        <SectionHeading
          title="Fungsionaris Divisi"
          subtitle="Enam divisi yang menggerakkan program kerja KSPM GIBEI UNIMED. Pilih “Lihat Anggota” untuk melihat susunan lengkap."
          accent="cyan"
        />
        <div className="mt-14 grid items-start gap-6 md:grid-cols-2 lg:grid-cols-3">
          {data.map((d, i) => (
            <DivisionCard key={d.id} division={d} index={i} />
          ))}
        </div>
      </div>
    </section>
  )
}
