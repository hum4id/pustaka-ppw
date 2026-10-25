import { useEffect, useState } from 'react'
import Header from './components/Header'
import StatistikRingkas from './components/StatistikRingkas'
import FormBuku from './components/FormBuku'
import PencarianBuku from './components/PencarianBuku'
import DaftarBuku from './components/DaftarBuku'
import Footer from './components/Footer'
import { KATEGORI } from './data/bukuAwal'
import { ambilSemuaBuku, simpanBuku, hapusBukuById } from './services/bukuService'
import './App.css'

function App() {
  const [daftarBuku, setDaftarBuku] = useState([])
  const [memuat, setMemuat] = useState(true)
  const [galat, setGalat] = useState('')
  const [kataKunci, setKataKunci] = useState('')
  const [kategoriAktif, setKategoriAktif] = useState('Semua')

  // Ambil data saat aplikasi pertama kali dibuka (nanti: GET /api/buku)
  useEffect(() => {
    ambilSemuaBuku()
      .then(setDaftarBuku)
      .catch((error) => setGalat(error.message))
      .finally(() => setMemuat(false))
  }, [])

  const tambahBuku = async (bukuBaru) => {
    try {
      const tersimpan = await simpanBuku(bukuBaru)
      setDaftarBuku((sebelumnya) => [tersimpan, ...sebelumnya])
    } catch (error) {
      setGalat(error.message)
    }
  }

  const hapusBuku = async (id) => {
    try {
      await hapusBukuById(id)
      setDaftarBuku((sebelumnya) => sebelumnya.filter((buku) => buku.id !== id))
    } catch (error) {
      setGalat(error.message)
    }
  }

  // Data turunan: daftar yang ditampilkan setelah pencarian dan filter kategori
  const kunci = kataKunci.trim().toLowerCase()
  const bukuTampil = daftarBuku.filter((buku) => {
    const cocokKategori = kategoriAktif === 'Semua' || buku.kategori === kategoriAktif
    const cocokKunci = !kunci || `${buku.judul} ${buku.penulis}`.toLowerCase().includes(kunci)
    return cocokKategori && cocokKunci
  })

  return (
    <>
      <Header namaAplikasi="Pustaka" institusi="Perpustakaan Telkom University Purwokerto" />

      <main className="container main">
        <StatistikRingkas daftarBuku={daftarBuku} />

        {galat && <p className="galat-global" role="alert">{galat}</p>}

        <div className="layout">
          <aside className="layout__samping">
            <FormBuku daftarKategori={KATEGORI} onTambah={tambahBuku} />
          </aside>

          <div className="layout__utama">
            <PencarianBuku
              kataKunci={kataKunci}
              onKataKunciChange={setKataKunci}
              daftarKategori={KATEGORI}
              kategoriAktif={kategoriAktif}
              onKategoriChange={setKategoriAktif}
            />
            {memuat ? (
              <p className="memuat">Memuat katalog…</p>
            ) : (
              <DaftarBuku daftarBuku={bukuTampil} totalData={daftarBuku.length} onHapus={hapusBuku} />
            )}
          </div>
        </div>
      </main>

      <Footer namaAplikasi="Pustaka" tahun={new Date().getFullYear()} />
    </>
  )
}

export default App
