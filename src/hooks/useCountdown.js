import { useEffect, useState } from 'react'

const calc = (targetMs) => {
  const diff = targetMs - Date.now()
  if (diff <= 0) return { days: 0, hours: 0, minutes: 0, seconds: 0, isReached: true }
  const s = Math.floor(diff / 1000)
  return {
    days: Math.floor(s / 86400),
    hours: Math.floor((s % 86400) / 3600),
    minutes: Math.floor((s % 3600) / 60),
    seconds: s % 60,
    isReached: false,
  }
}

/**
 * Counts down to an ISO string carrying an explicit offset (e.g. "+07:00").
 * Date.parse resolves it to an absolute UTC instant, so the result is
 * identical regardless of the viewer's local timezone.
 */
export default function useCountdown(targetISO) {
  const targetMs = Date.parse(targetISO)
  const isPreview =
    typeof window !== 'undefined' &&
    (new URLSearchParams(window.location.search).has('reveal') ||
      new URLSearchParams(window.location.search).has('preview'))

  const [time, setTime] = useState(() => {
    if (isPreview) {
      return { days: 0, hours: 0, minutes: 0, seconds: 0, isReached: true }
    }
    return calc(targetMs)
  })

  useEffect(() => {
    if (isPreview || time.isReached) return undefined
    const id = setInterval(() => {
      const next = calc(targetMs)
      setTime(next)
      if (next.isReached) clearInterval(id)
    }, 1000)
    return () => clearInterval(id)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [targetMs, isPreview])

  return time
}
