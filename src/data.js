// Target reveal: 15 November 2026, 15:00:00 WIB (UTC+7) — explicit offset, timezone-independent.
export const TARGET_DATE = '2026-11-15T15:00:00+07:00'

/**
 * ========================================================
 * SAKLAR TAMPILAN COUNTDOWN (TRUE / FALSE):
 * ========================================================
 * - false : Menghitung mundur otomatis hingga 15 Nov 2026 15:00 WIB (Pre-Launch)
 * - true  : LANGSUNG BUKA halaman pengurus organisasi (Post-Launch)
 * 
 * Cukup ubah nilai di bawah ini menjadi true atau false:
 */
export const FORCE_REVEAL = false

// Logo GIBEI: simpan file logo di folder /public dengan nama `logo-gibei.png`
// (atau ubah path di bawah). Jika file belum ada, otomatis tampil placeholder.
export const LOGO_SRC = '/logo-gibei.png'

export const EVENT = {
  org: 'KSPM GIBEI UNIMED',
  title: 'Pengumuman Pengurus',
  period: 'Periode 2026-2027',
}

export const presidium = [
  { name: 'Joanna Brigitta, S.', title: 'Presiden Direktur' },
  { name: 'Farzad Sahnadi Pasaribu', title: 'Wakil Presiden Direktur' },
  { name: 'Saniah Lidiya Hawani', title: 'Sekretaris Jendral' },
  { name: 'Syafiza Talita Naila', title: 'Wakil Sekretaris Jendral' },
  { name: 'Muhammad Ariel', title: 'Bendahara Umum' },
]

export const divisions = [
  {
    id: 'kegiatan',
    name: 'Divisi Kegiatan',
    short: 'Kegiatan',
    ketua: 'Ruwina Rahmanda',
    wakil: 'Ribka Melisa V Manullang',
    anggota: ['Afrida Julianti', 'Lora Br Damanik', 'Heva Gracia Manurung', 'Najmah Luthfiyah Hanum', 'Ripaldi Sihombing', 'Rut Anggreni Siburian', 'Sri Rezeki', 'Wisma Tamara Riski', 'Rosa Linda'],
  },
  {
    id: 'investasi',
    name: 'Divisi Investasi',
    short: 'Investasi',
    ketua: 'Fajar Ramadan Pangestu',
    wakil: 'Joy Estomihi Manihuruk',
    anggota: ['M. Fauzan Anshari Sembiring', 'Yahya Ayyash', 'Syaloom Villareal', 'Ahmad Raihan', 'Nisa Nabila', 'Melanie Putri Nduru', 'Rini Pardilla', 'Ragriva Br Bangun'],
  },
  {
    id: 'media',
    name: 'Divisi Media',
    short: 'Media',
    ketua: 'M. Rendi',
    wakil: 'Yose Maria Tumonggi Sibuea',
    anggota: ['Nurul Fadillah Br Sembiring', 'Yesica Natalia Simangunsong', 'Shania Isabella Br.L.Tobing', 'Saprianta Ginting', 'Meiman Kasih Lase', 'Christien G. Sitorus'],
  },
  {
    id: 'hrd',
    name: 'Divisi HRD',
    short: 'HRD',
    ketua: 'Salwa Fitry',
    wakil: 'Andreas Simamora',
    anggota: ['Monika Caramoy Sitorus', 'Laurent Damai Yanti Silaban', 'Maely Septiana', 'Greace Masrouli Malau', 'Tamaro Maruli Simanjuntak', 'Daniel Steven Fransiskus Manao', 'Dg.S.Indah Simanjuntak', 'Rika Purnama Sari', 'Keisha Maureen Florencia Saragih'],
  },
  {
    id: 'galeri',
    name: 'Divisi Galeri',
    short: 'Galeri',
    ketua: 'Gerry Afriando Sipayung',
    wakil: 'Cris Diana Sidabutar',
    anggota: ['Savira Anggraini Tambunan', 'Kevin Anugrah Christino Sinaga', 'Rifqah Alya Azzurra', 'Aurel Ramadhanti Surya', 'Alhaditya Arya', 'Arief Dido Setyawan Situkkir', 'Anggi Widya Sitinjak', 'Chelsea Marcella Siregar'],
  },
  {
    id: 'edukasi',
    name: 'Divisi Edukasi',
    short: 'Edukasi',
    ketua: 'Lia Oktafriani Pandiangan',
    wakil: 'Yanri Girsang',
    anggota: ['Felix Shindag Situmorang', 'Joan Unedo Siregar', 'Siti Fatimah', 'Zackya Hayati Lubis', 'Salwa Lulu Nazhifah', 'Ainun Saskia', 'Johanes Theo Raphael Harefa', 'Zefanya Berliana Callista Simanjuntak', 'Ibnaty Najla Wahyudi'],
  },
]

export const activeMembers = [
  'Riris Apriani Simarmata', 'Grace Yanti Sagala', 'Johs Charlos Hutabalian', 'Nadiya Salsabila Herman', 'Khairul Wahid', 'Karan Rayhan Almunawi', 'Nafisa Naila Lubis', 'Judika Christian Manalu', 'Margaret Rizki Elviana Sihaloho', 'Paula Br Sinaga', 'Putri Azzahra', 'Angelica Carolina Tambunan', 'Magda Sarah Jesika Tarigan', 'Aenisyah Putri Larasati Gultom', 'Satria Ramadhana Syaputra', 'Heppi Togatorop', 'Mario Delan Arona Sitinjak',
]

