import { useState, useEffect } from 'react'
import GenericTable from '../../components/common/GenericTable'
import SelectSearch from '../../components/common/SelectSearch'
import CustomerModal from './CustomerModal'
import api from '../../services/api'

function CustomerList() {

    const [customers, setCustomers] = useState([])

    const [nama, setNama] = useState('')
    const [email, setEmail] = useState('')
    const [akun, setAkun] = useState('')

    const [selectedCustomer, setSelectedCustomer] = useState('')

    const [openModal, setOpenModal] = useState(false)
    const [mode, setMode] = useState('create')
    const [selectedId, setSelectedId] = useState(null)

    const loadCustomers = async () => {
        try {
            const response = await api.get('/customers')
            setCustomers(response.data)
        } catch (error) {
            console.error(error)
        }
    }

    useEffect(() => {
        loadCustomers()
    }, [])

    const openCreateModal = () => {
        setMode('create')
        setSelectedId(null)

        setNama('')
        setEmail('')
        setAkun('')

        setOpenModal(true)
    }

   const openEditModal = (customer) => {
    setMode('edit')
    setSelectedId(customer.id)

    setNama(customer.nama ?? '')
    setEmail(customer.email ?? '')
    setAkun(customer.akun ?? '')

    setOpenModal(true)
}

    const saveCustomer = async () => {
        try {

            if (mode === 'create') {
                await api.post('/customers', {
                    nama,
                    email,
                    akun
                })
            } else {
                await api.put(`/customers/${selectedId}`, {
                    nama,
                    email,
                    akun
                })
            }

            await loadCustomers()

            setOpenModal(false)
            setSelectedId(null)

            setNama('')
            setEmail('')
            setAkun('')

        } catch (error) {
            console.error(error)
        }
    }

    const hapusCustomer = async (id) => {
        try {

            await api.delete(`/customers/${id}`)

            await loadCustomers()

        } catch (error) {
            console.error(error)
        }
    }

    const customerOptions = [
        ...new Set(customers.map(item => item.nama))
    ]

    const filteredCustomers = selectedCustomer
        ? customers.filter(c => c.nama === selectedCustomer)
        : customers

    const columns = [
        {
            accessorKey: 'id',
            header: 'ID'
        },
        {
            accessorKey: 'nama',
            header: 'Nama'
        },
        {
            accessorKey: 'email',
            header: 'Email'
        },
        {
            accessorKey: 'akun',
            header: 'Akun'
        },
        {
            id: 'aksi',
            header: 'Aksi',
            cell: ({ row }) => (
                <div className="flex gap-2">

                    <button
                        className="btn btn-warning btn-sm"
                        onClick={() => openEditModal(row.original)}
                    >
                        Edit
                    </button>

                    <button
                        className="btn btn-error btn-sm"
                        onClick={() => hapusCustomer(row.original.id)}
                    >
                        Hapus
                    </button>

                </div>
            )
        }
    ]

    return (
        <div className="p-6">

            <div className="flex justify-between items-center mb-4">

                <button
                    className="btn btn-primary"
                    onClick={openCreateModal}
                >
                    Tambah Customer
                </button>

                <div className="w-80">
                    <SelectSearch
                        options={customerOptions.map(nama => ({
                            value: nama,
                            label: nama
                        }))}
                        value={selectedCustomer}
                        onChange={setSelectedCustomer}
                        placeholder="Filter Customer"
                    />
                </div>

            </div>

            <GenericTable
                data={filteredCustomers}
                columns={columns}
                filterColumn="nama"
                filterPlaceholder="Search customer..."
            />

            <CustomerModal
                open={openModal}
                mode={mode}
                nama={nama}
                email={email}
                akun={akun}
                setNama={setNama}
                setEmail={setEmail}
                setAkun={setAkun}
                onSave={saveCustomer}
                onClose={() => setOpenModal(false)}
            />

        </div>
    )
}

export default CustomerList