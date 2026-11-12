import { useEffect, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import useCountdown from './hooks/useCountdown'
import Countdown from './components/Countdown'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Presidium from './components/Presidium'
import Divisions from './components/Divisions'
import ActiveMembers from './components/ActiveMembers'
import Footer from './components/Footer'
import { TARGET_DATE, FORCE_REVEAL, EVENT } from './data'

export default function App() {
  const time = useCountdown(TARGET_DATE)
  const isTargetReached = FORCE_REVEAL || time.isReached

  const [roster, setRoster] = useState(null)
  const [, setLoading] = useState(false)
  const [, setError] = useState(null)

  useEffect(() => {
    if (!isTargetReached) return

    let cancelled = false
    setLoading(true)

    // Jika FORCE_REVEAL aktif atau ada param ?key=..., sertakan key rahasia admin
    const urlParams = typeof window !== 'undefined' ? new URLSearchParams(window.location.search) : null
    const adminKey = FORCE_REVEAL
      ? 'gibei-admin-preview-2027'
      : urlParams?.get('key') || ''
    const endpoint = adminKey ? `/api/roster?key=${encodeURIComponent(adminKey)}` : '/api/roster'

    fetch(endpoint)
      .then((res) => {
        if (!res.ok) {
          throw new Error('Akses ditolak: Data pengurus hanya dapat diakses setelah waktu rilis resmi.')
        }
        return res.json()
      })
      .then((data) => {
        if (!cancelled) {
          setRoster(data)
          setLoading(false)
        }
      })
      .catch((err) => {
        if (!cancelled) {
          setError(err.message)
          setLoading(false)
        }
      })

    return () => {
      cancelled = true
    }
  }, [isTargetReached])

  // Hanya benar-benar terbuka jika countdown tercapai DAN data resmi berhasil diverifikasi dari server
  const isUnlocked = isTargetReached && roster && !roster.locked

  return (
    <>
      <AnimatePresence>
        {!isUnlocked && <Countdown key="countdown" time={time} event={EVENT} />}
      </AnimatePresence>

      {isUnlocked && (
        <motion.main
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="relative min-h-screen"
        >
          <Navbar org={EVENT.org} />
          <Hero event={EVENT} />
          {roster.presidium && <Presidium data={roster.presidium} />}
          {roster.divisions && <Divisions data={roster.divisions} />}
          {roster.activeMembers && <ActiveMembers data={roster.activeMembers} />}
          <Footer event={EVENT} />
        </motion.main>
      )}
    </>
  )
}
