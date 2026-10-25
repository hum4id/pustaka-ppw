function KartuBuku({ judul, penulis, penerbit, tahun, kategori, stok }) {
  const tersedia = stok > 0

  return (
    <article className="kartu">
      <div className={`kartu__sampul sampul--${kategori.toLowerCase()}`} aria-hidden="true">
        <span>{judul.charAt(0)}</span>
      </div>

      <div className="kartu__isi">
        <div className="kartu__atas">
          <h3 className="kartu__judul">{judul}</h3>
          <span className={`stok ${tersedia ? 'stok--ada' : 'stok--habis'}`}>
            {tersedia ? `${stok} eksemplar` : 'Sedang dipinjam'}
          </span>
        </div>
        <p className="kartu__penulis">{penulis}</p>
        <p className="kartu__meta">
          {penerbit ? `${penerbit} · ` : ''}{tahun}
        </p>

        <div className="kartu__kaki">
          <span className="tag">{kategori}</span>
        </div>
      </div>
    </article>
  )
}

export default KartuBuku
