# Pustaka — Katalog Buku (Frontend)

Frontend React + Vite untuk katalog buku perpustakaan kampus. Entitas utama: **Buku**
(`id`, `judul`, `penulis`, `penerbit`, `tahun`, `kategori`, `stok`).

## Menjalankan

```bash
npm install
npm run dev      # http://localhost:5173
npm run build    # build produksi ke folder dist/
```

## Struktur

```
src/
├── App.jsx                 # state utama (daftarBuku), handler tambah/hapus, filter
├── components/
│   ├── Header.jsx          # judul aplikasi + hero
│   ├── StatistikRingkas.jsx# ringkasan jumlah judul, eksemplar, kategori
│   ├── FormBuku.jsx        # form controlled + tombol Tambah
│   ├── PencarianBuku.jsx   # pencarian + filter kategori
│   ├── DaftarBuku.jsx      # render list .map() + conditional rendering
│   ├── KartuBuku.jsx       # kartu per buku
│   ├── KeadaanKosong.jsx   # tampilan "Belum ada data Buku"
│   └── Footer.jsx
├── data/bukuAwal.js        # data awal
└── services/
    ├── api.js              # helper fetch + VITE_API_URL
    └── bukuService.js      # ambilSemuaBuku, simpanBuku, hapusBukuById
```

## Integrasi backend (Pekan 11)

Salin `.env.example` menjadi `.env`, lalu isi `VITE_API_URL` (misal `http://localhost:3000/api`).
`bukuService.js` otomatis beralih ke endpoint berikut:

| Method | Endpoint      | Fungsi              |
| ------ | ------------- | ------------------- |
| GET    | `/buku`       | `ambilSemuaBuku()`  |
| POST   | `/buku`       | `simpanBuku(data)`  |
| DELETE | `/buku/:id`   | `hapusBukuById(id)` |
