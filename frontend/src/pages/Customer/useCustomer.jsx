import { useEffect, useState } from "react"

import {
    getCustomers,
    createCustomer,
    updateCustomer,
    deleteCustomer
} from "./CustomerData"


export default function useCustomer(){

    const [customers,setCustomers] = useState([])

    const [nama,setNama] = useState('')
    const [email,setEmail] = useState('')
    const [akun,setAkun] = useState('')

    const [selectedCustomer,setSelectedCustomer] = useState('')

    const [openModal,setOpenModal] = useState(false)
    const [mode,setMode] = useState('create')
    const [selectedId,setSelectedId] = useState(null)


    const loadCustomers = async()=>{

        const data = await getCustomers()

        setCustomers(data)

    }


    useEffect(()=>{

        loadCustomers()

    },[])



    const resetForm = ()=>{

        setNama('')
        setEmail('')
        setAkun('')
        setSelectedId(null)

    }



    const openCreateModal = ()=>{

        setMode('create')
        resetForm()
        setOpenModal(true)

    }



    const openEditModal = (customer)=>{

        setMode('edit')

        setSelectedId(customer.id)

        setNama(customer.nama ?? '')
        setEmail(customer.email ?? '')
        setAkun(customer.akun ?? '')

        setOpenModal(true)

    }



    const saveCustomer = async()=>{


        const payload={
            nama,
            email,
            akun
        }


        if(mode==='create'){

            await createCustomer(payload)

        }else{

            await updateCustomer(selectedId,payload)

        }


        await loadCustomers()

        setOpenModal(false)

        resetForm()

    }



    const hapusCustomer = async(id)=>{

        await deleteCustomer(id)

        await loadCustomers()

    }



    const filteredCustomers = selectedCustomer

        ? customers.filter(
            item=>item.nama===selectedCustomer
        )

        : customers



    const customerOptions=[
        ...new Set(
            customers.map(item=>item.nama)
        )
    ]



    return {

        customers,
        filteredCustomers,
        customerOptions,

        nama,
        email,
        akun,

        setNama,
        setEmail,
        setAkun,

        selectedCustomer,
        setSelectedCustomer,


        openModal,
        setOpenModal,

        mode,

        openCreateModal,
        openEditModal,

        saveCustomer,
        hapusCustomer,

        resetForm

    }

}