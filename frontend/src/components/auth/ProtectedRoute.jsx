import { Navigate } from "react-router-dom"
import { useAuth } from "../../context/AuthContext"


function ProtectedRoute({children}){


    const { user } = useAuth()



    // Kalau tidak ada user
    // lempar ke halaman login

    if(!user){

        return <Navigate to="/login" />

    }



    // Kalau ada user
    // tampilkan halaman

    return children


}


export default ProtectedRoute