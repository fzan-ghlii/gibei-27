import { useState } from 'react'
import { ImagePlus } from 'lucide-react'
import { LOGO_SRC } from '../data'

/**
 * Slot logo GIBEI. Menampilkan LOGO_SRC (public/logo-gibei.png);
 * bila file belum ada, tampil placeholder bulat.
 * Atur ukuran lewat className, mis. "h-12 w-12".
 */
export default function Logo({ className = 'h-16 w-16' }) {
  const [failed, setFailed] = useState(false)
  return (
    <div
      className={`relative shrink-0 overflow-hidden rounded-full bg-white p-1.5 shadow-xl ring-4 ring-white/30 transition-transform duration-300 hover:scale-105 ${className}`}
    >
      {failed ? (
        <div className="flex h-full w-full items-center justify-center bg-gradient-to-br from-cream to-cream-dark text-navy-800">
          <ImagePlus className="h-1/2 w-1/2 opacity-70" strokeWidth={1.5} />
        </div>
      ) : (
        <img
          src={LOGO_SRC}
          alt="Logo GIBEI UNIMED"
          onError={() => setFailed(true)}
          className="h-full w-full object-contain"
        />
      )}
    </div>
  )
}

