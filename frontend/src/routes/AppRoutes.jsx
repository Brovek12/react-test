import {
    Routes,
    Route
} from "react-router-dom"


import MainLayout from "../components/layout/MainLayout"

import CustomerList from "../pages/Customer/CustomerList"
import UserList from "../pages/User/UserList"



function AppRoutes(){

    return (

        <Routes>


            <Route element={<MainLayout />}>


                <Route
                    path="/customers"
                    element={<CustomerList />}
                />


                <Route
                    path="/users"
                    element={<UserList />}
                />


            </Route>


        </Routes>

    )

}


export default AppRoutes