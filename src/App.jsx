import { AnimatePresence, motion } from 'framer-motion'
import useCountdown from './hooks/useCountdown'
import Countdown from './components/Countdown'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Presidium from './components/Presidium'
import Divisions from './components/Divisions'
import ActiveMembers from './components/ActiveMembers'
import Footer from './components/Footer'
import { TARGET_DATE, FORCE_REVEAL, EVENT, presidium, divisions, activeMembers } from './data'

export default function App() {
  const time = useCountdown(TARGET_DATE)
  const revealed = FORCE_REVEAL || time.isReached

  return (
    <>
      <AnimatePresence>
        {!revealed && <Countdown key="countdown" time={time} event={EVENT} />}
      </AnimatePresence>

      {revealed && (
        <motion.main
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="relative min-h-screen"
        >
          <Navbar org={EVENT.org} />
          <Hero event={EVENT} />
          <Presidium data={presidium} />
          <Divisions data={divisions} />
          <ActiveMembers data={activeMembers} />
          <Footer event={EVENT} />
        </motion.main>
      )}
    </>
  )
}
