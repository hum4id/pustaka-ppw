function Footer({ namaAplikasi, tahun }) {
  return (
    <footer className="footer">
      <div className="container footer__isi">
        <span className="footer__merek">{namaAplikasi}</span>
        <span>© {tahun} · Katalog buku perpustakaan kampus</span>
      </div>
    </footer>
  )
}

export default Footer
