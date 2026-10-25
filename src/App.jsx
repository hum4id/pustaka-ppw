import { useState } from 'react'
import Header from './components/Header'
import StatistikRingkas from './components/StatistikRingkas'
import FormBuku from './components/FormBuku'
import DaftarBuku from './components/DaftarBuku'
import { bukuAwal, KATEGORI } from './data/bukuAwal'
import './App.css'

function App() {
  const [daftarBuku, setDaftarBuku] = useState(bukuAwal)

  const tambahBuku = (bukuBaru) => {
    const id = `bk-${Date.now()}`
    setDaftarBuku((sebelumnya) => [{ id, ...bukuBaru }, ...sebelumnya])
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
          <DaftarBuku daftarBuku={daftarBuku} />
        </div>
      </main>
    </>
  )
}

export default App
