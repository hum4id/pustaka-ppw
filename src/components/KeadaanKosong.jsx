function KeadaanKosong({ pesan, keterangan }) {
  return (
    <div className="kosong" role="status">
      <svg className="kosong__ikon" viewBox="0 0 48 48" aria-hidden="true">
        <path d="M8 10h12a4 4 0 0 1 4 4v24a3 3 0 0 0-3-3H8zM40 10H28a4 4 0 0 0-4 4v24a3 3 0 0 1 3-3h13z" />
      </svg>
      <p className="kosong__pesan">{pesan}</p>
      {keterangan && <p className="kosong__ket">{keterangan}</p>}
    </div>
  )
}

export default KeadaanKosong
