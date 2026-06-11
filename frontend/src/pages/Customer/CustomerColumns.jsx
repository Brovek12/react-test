export default function columns(
    openEditModal,
    hapusCustomer
){


return [

{
accessorKey:'id',
header:'ID'
},

{
accessorKey:'nama',
header:'Nama'
},

{
accessorKey:'email',
header:'Email'
},

{
accessorKey:'akun',
header:'Akun'
},


{
id:'aksi',
header:'Aksi',

cell:({row})=>(

<div>

<button
className="btn btn-warning btn-sm"
onClick={()=>
openEditModal(row.original)
}
>
Edit
</button>


<button
className="btn btn-error btn-sm"
onClick={()=>
hapusCustomer(row.original.id)
}
>
Hapus
</button>


</div>

)

}


]


}