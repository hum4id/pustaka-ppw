import { useState } from 'react'
import Header from './components/Header'
import DaftarBuku from './components/DaftarBuku'
import { bukuAwal } from './data/bukuAwal'
import './App.css'

function App() {
  const [daftarBuku, setDaftarBuku] = useState(bukuAwal)

  return (
    <>
      <Header namaAplikasi="Pustaka" institusi="Perpustakaan Telkom University Purwokerto" />

      <main className="container main">
        <DaftarBuku daftarBuku={daftarBuku} />
      </main>
    </>
  )
}

export default App
