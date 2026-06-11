import {
    Routes,
    Route
} from "react-router-dom"


import MainLayout from "../components/layout/MainLayout"

import CustomerList from "../pages/Customer/CustomerList"
import UserList from "../pages/User/UserList"
import Login from "../pages/Login/Login"
import ProtectedRoute from "../components/auth/ProtectedRoute"



function AppRoutes(){

    return (

        <Routes>

  <Route
        path="/login"
        element={<Login />}
    />

           <Route element={<MainLayout />}>


    <Route
        path="/customers"
        element={
            <ProtectedRoute>

                <CustomerList />

            </ProtectedRoute>
        }
    />


    <Route
        path="/users"
        element={
            <ProtectedRoute>

                <UserList />

            </ProtectedRoute>
        }
    />


</Route>


        </Routes>

    )

}


export default AppRoutes