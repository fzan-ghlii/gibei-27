// Target reveal: 15 November 2026, 15:00:00 WIB (UTC+7) — explicit offset, timezone-independent.
export const TARGET_DATE = '2026-11-14T12:00:00+07:00'

/**
 * ========================================================
 * SAKLAR TAMPILAN COUNTDOWN (TRUE / FALSE):
 * ========================================================
 * - false : Menghitung mundur otomatis hingga 15 Nov 2026 15:00 WIB (Pre-Launch)
 * - true  : Buka paksa halaman pengurus (Menggunakan key rahasia admin ke API)
 */
export const FORCE_REVEAL = false

// Logo GIBEI: simpan file logo di folder /public dengan nama `logo-gibei.png`
export const LOGO_SRC = '/logo-gibei.png'

export const EVENT = {
  org: 'KSPM GIBEI UNIMED',
  title: 'Pengumuman Pengurus',
  period: 'Periode 2026-2027',
}
