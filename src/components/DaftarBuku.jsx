import KartuBuku from './KartuBuku'

function DaftarBuku({ daftarBuku }) {
  return (
    <section className="daftar">
      <div className="daftar__kepala">
        <h2>Katalog</h2>
        <span className="daftar__jumlah">{daftarBuku.length} judul</span>
      </div>

      <div className="daftar__grid">
        {daftarBuku.map((buku) => (
          <KartuBuku
            key={buku.id}
            judul={buku.judul}
            penulis={buku.penulis}
            penerbit={buku.penerbit}
            tahun={buku.tahun}
            kategori={buku.kategori}
            stok={buku.stok}
          />
        ))}
      </div>
    </section>
  )
}

export default DaftarBuku
