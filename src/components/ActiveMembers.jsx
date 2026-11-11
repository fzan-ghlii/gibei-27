import { motion } from 'framer-motion'
import SectionHeading from './SectionHeading'

function Row({ names, reverse }) {
  const loop = [...names, ...names, ...names, ...names]
  return (
    <div className="mask-fade-x overflow-hidden py-1.5">
      <div className={`flex w-max gap-3 hover:[animation-play-state:paused] ${reverse ? 'animate-marquee-reverse' : 'animate-marquee'}`}>
        {loop.map((n, i) => (
          <span
            key={`${n}-${i}`}
            aria-hidden={i >= names.length}
            className="glass flex items-center whitespace-nowrap rounded-full px-6 py-3 text-sm font-medium text-white sm:text-base"
          >
            <span className="mr-3 inline-block h-1.5 w-1.5 rounded-full bg-cyan-brand" />
            {n}
          </span>
        ))}
      </div>
    </div>
  )
}

export default function ActiveMembers({ data }) {
  const mid = Math.ceil(data.length / 2)
  return (
    <section id="anggota" className="relative overflow-hidden bg-navy-900 py-24 sm:py-28">
      <div className="bg-dots pointer-events-none absolute inset-0" />
      <div className="pointer-events-none absolute left-1/2 top-0 h-72 w-[40rem] -translate-x-1/2 rounded-full bg-skyblue/15 blur-[120px]" />
      <div className="relative px-4">
        <SectionHeading
          eyebrow="Bersama Kita Tumbuh"
          title="Anggota Aktif"
          subtitle={`${data.length} anggota aktif KSPM GIBEI UNIMED Periode 2026-2027.`}
          tone="dark"
          accent="cyan"
        />
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 0.2, duration: 0.8 }}
        className="relative mt-14 space-y-3"
      >
        <Row names={data.slice(0, mid)} />
        <Row names={data.slice(mid)} reverse />
      </motion.div>
    </section>
  )
}
