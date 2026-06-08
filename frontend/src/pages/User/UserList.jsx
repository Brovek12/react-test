const users = [
    {
        id: 1,
        nama: 'Budi Santoso',
        email: 'budi@mail.com'
    },
    {
        id: 2,
        nama: 'Andi Wijaya',
        email: 'andi@mail.com'
    },
    {
        id: 3,
        nama: 'Siti Nurhaliza',
        email: 'siti@mail.com'
    }
]

function UserList() {
    return (
        <div className="p-6">

            <div className="flex justify-between items-center mb-4">
                <h1 className="text-2xl font-bold">
                    User List
                </h1>

                <button className="btn btn-primary">
                    Tambah User
                </button>
            </div>

            <div className="overflow-x-auto bg-base-100 rounded-box shadow">
                <table className="table">

                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>Nama</th>
                            <th>Email</th>
                        </tr>
                    </thead>

                    <tbody>
                        {users.map(user => (
                            <tr key={user.id}>
                                <td>{user.id}</td>
                                <td>{user.nama}</td>
                                <td>{user.email}</td>
                            </tr>
                        ))}
                    </tbody>

                </table>
            </div>

        </div>
    )
}

export default UserList