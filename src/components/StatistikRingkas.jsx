function StatistikRingkas({ daftarBuku }) {
  const totalJudul = daftarBuku.length
  const totalEksemplar = daftarBuku.reduce((jumlah, buku) => jumlah + buku.stok, 0)
  const totalKategori = new Set(daftarBuku.map((buku) => buku.kategori)).size
  const sedangDipinjam = daftarBuku.filter((buku) => buku.stok === 0).length

  const statistik = [
    { label: 'Judul buku', nilai: totalJudul },
    { label: 'Eksemplar tersedia', nilai: totalEksemplar },
    { label: 'Kategori', nilai: totalKategori },
    { label: 'Judul sedang kosong', nilai: sedangDipinjam },
  ]

  return (
    <section className="statistik" aria-label="Ringkasan koleksi">
      {statistik.map((item) => (
        <div className="statistik__item" key={item.label}>
          <span className="statistik__nilai">{item.nilai}</span>
          <span className="statistik__label">{item.label}</span>
        </div>
      ))}
    </section>
  )
}

export default StatistikRingkas
