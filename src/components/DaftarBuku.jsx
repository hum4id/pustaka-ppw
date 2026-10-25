import KartuBuku from './KartuBuku'
import KeadaanKosong from './KeadaanKosong'

function DaftarBuku({ daftarBuku, onHapus }) {
  return (
    <section className="daftar">
      <div className="daftar__kepala">
        <h2>Katalog</h2>
        <span className="daftar__jumlah">{daftarBuku.length} judul</span>
      </div>

      {daftarBuku.length === 0 ? (
        <KeadaanKosong
          pesan="Belum ada data Buku"
          keterangan="Tambahkan buku pertama melalui formulir di samping."
        />
      ) : (
        <div className="daftar__grid">
          {daftarBuku.map((buku) => (
            <KartuBuku
              key={buku.id}
              id={buku.id}
              judul={buku.judul}
              penulis={buku.penulis}
              penerbit={buku.penerbit}
              tahun={buku.tahun}
              kategori={buku.kategori}
              stok={buku.stok}
              onHapus={onHapus}
            />
          ))}
        </div>
      )}
    </section>
  )
}

export default DaftarBuku
