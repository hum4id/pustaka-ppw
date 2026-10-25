function Header({ namaAplikasi, institusi }) {
  return (
    <header className="header">
      <div className="container header__bar">
        <a className="brand" href="/">
          <svg className="brand__mark" viewBox="0 0 32 32" aria-hidden="true">
            <rect width="32" height="32" rx="8" />
            <path d="M9 8h5.5a3 3 0 0 1 3 3v13a2.5 2.5 0 0 0-2.5-2.5H9zM23 8h-2.5a3 3 0 0 0-3 3" />
          </svg>
          <span>{namaAplikasi}</span>
        </a>
        <span className="header__inst">{institusi}</span>
      </div>

      <div className="container hero">
        <h1 className="hero__title">
          Koleksi buku yang tertata,<br />
          <em>dari rak hingga layar.</em>
        </h1>
        <p className="hero__lead">
          Catat, telusuri, dan kelola koleksi perpustakaan kampus dalam satu katalog
          yang ringkas. Setiap judul tercatat lengkap dengan penulis, tahun terbit,
          kategori, dan ketersediaan eksemplarnya.
        </p>
      </div>
    </header>
  )
}

export default Header
