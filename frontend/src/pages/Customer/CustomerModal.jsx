import Modal from '../../components/common/Modal'

function CustomerModal({
    open,
    onClose,
    onSave,
    nama,
    setNama,
    email,
    setEmail,
    setAkun,
    akun,
    mode
}) {
    return (
        <Modal
            open={open}
            onClose={onClose}
            title={
                mode === 'edit'
                    ? 'Edit Customer'
                    : 'Tambah Customer'
            }
            size="md"
        >
            <div className="space-y-3">
                <input
                    className="input input-bordered w-full"
                    placeholder="Nama"
                    value={nama}
                    onChange={(e) => setNama(e.target.value)}
                />

                <input
                    className="input input-bordered w-full"
                    placeholder="Email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />
                <input
                    className="input input-bordered w-full"
                    placeholder="Akun"
                    value={akun}
                    onChange={(e) => setAkun(e.target.value)}
                />
            </div>

            <div className="modal-action">
                <button
                    className="btn btn-ghost"
                    onClick={onClose}
                >
                    Batal
                </button>

                <button
                    className="btn btn-primary"
                    onClick={onSave}
                >
                    Simpan
                </button>
            </div>
        </Modal>
    )
}

export default CustomerModal