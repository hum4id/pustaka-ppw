function PencarianBuku({ kataKunci, onKataKunciChange, daftarKategori, kategoriAktif, onKategoriChange }) {
  return (
    <div className="cari">
      <label className="cari__input">
        <svg viewBox="0 0 24 24" aria-hidden="true"><circle cx="11" cy="11" r="7" /><path d="m20 20-3.5-3.5" /></svg>
        <input
          type="search"
          value={kataKunci}
          onChange={(event) => onKataKunciChange(event.target.value)}
          placeholder="Cari judul atau penulis"
          aria-label="Cari judul atau penulis"
        />
      </label>

      <div className="cari__chip" role="group" aria-label="Filter kategori">
        {['Semua', ...daftarKategori].map((kategori) => (
          <button
            key={kategori}
            type="button"
            className={`chip ${kategoriAktif === kategori ? 'chip--aktif' : ''}`}
            onClick={() => onKategoriChange(kategori)}
            aria-pressed={kategoriAktif === kategori}
          >
            {kategori}
          </button>
        ))}
      </div>
    </div>
  )
}

export default PencarianBuku
