import { request, pakaiBackend } from './api'
import { bukuAwal } from '../data/bukuAwal'

// Satu-satunya pintu data Buku. Komponen tidak tahu apakah data berasal dari
// data lokal (sekarang) atau REST API (Pekan 11) — cukup isi VITE_API_URL.

export async function ambilSemuaBuku() {
  if (pakaiBackend) return request('/buku')
  return structuredClone(bukuAwal)
}

export async function simpanBuku(bukuBaru) {
  if (pakaiBackend) {
    return request('/buku', { method: 'POST', body: JSON.stringify(bukuBaru) })
  }
  return { id: `bk-${Date.now()}`, ...bukuBaru }
}

export async function hapusBukuById(id) {
  if (pakaiBackend) return request(`/buku/${id}`, { method: 'DELETE' })
  return null
}
