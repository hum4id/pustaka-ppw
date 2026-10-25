import { useState } from 'react'
import Header from './components/Header'
import StatistikRingkas from './components/StatistikRingkas'
import FormBuku from './components/FormBuku'
import PencarianBuku from './components/PencarianBuku'
import DaftarBuku from './components/DaftarBuku'
import { bukuAwal, KATEGORI } from './data/bukuAwal'
import './App.css'

function App() {
  const [daftarBuku, setDaftarBuku] = useState(bukuAwal)
  const [kataKunci, setKataKunci] = useState('')
  const [kategoriAktif, setKategoriAktif] = useState('Semua')

  // Data turunan: daftar yang ditampilkan setelah pencarian dan filter kategori
  const kunci = kataKunci.trim().toLowerCase()
  const bukuTampil = daftarBuku.filter((buku) => {
    const cocokKategori = kategoriAktif === 'Semua' || buku.kategori === kategoriAktif
    const cocokKunci = !kunci || `${buku.judul} ${buku.penulis}`.toLowerCase().includes(kunci)
    return cocokKategori && cocokKunci
  })

  const tambahBuku = (bukuBaru) => {
    const id = `bk-${Date.now()}`
    setDaftarBuku((sebelumnya) => [{ id, ...bukuBaru }, ...sebelumnya])
  }

  const hapusBuku = (id) => {
    setDaftarBuku((sebelumnya) => sebelumnya.filter((buku) => buku.id !== id))
  }

  return (
    <>
      <Header namaAplikasi="Pustaka" institusi="Perpustakaan Telkom University Purwokerto" />

      <main className="container main">
        <StatistikRingkas daftarBuku={daftarBuku} />

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
            <DaftarBuku daftarBuku={bukuTampil} totalData={daftarBuku.length} onHapus={hapusBuku} />
          </div>
        </div>
      </main>
    </>
  )
}

export default App
