import GenericTable from '../../components/common/GenericTable'
import SelectSearch from '../../components/common/SelectSearch'
import CustomerModal from './CustomerModal'

import useCustomer from './useCustomer'
import columns from './customerColumns'


function CustomerList(){


const customer = useCustomer()



return (

<div className="p-6">


<button
className="btn btn-primary"
onClick={customer.openCreateModal}
>
Tambah Customer
</button>



<SelectSearch

options={
customer.customerOptions.map(nama=>({
value:nama,
label:nama
}))
}

value={customer.selectedCustomer}

onChange={customer.setSelectedCustomer}

/>



<GenericTable

data={customer.filteredCustomers}

columns={
columns(
    customer.openEditModal,
    customer.hapusCustomer
)
}

/>



<CustomerModal

open={customer.openModal}

mode={customer.mode}

nama={customer.nama}

email={customer.email}

akun={customer.akun}


setNama={customer.setNama}

setEmail={customer.setEmail}

setAkun={customer.setAkun}


onSave={customer.saveCustomer}


onClose={()=>{

customer.setOpenModal(false)

customer.resetForm()

}}


/>


</div>

)


}


export default CustomerList