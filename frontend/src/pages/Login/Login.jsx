import { useState } from "react"
import { useNavigate } from "react-router-dom"

import { login } from "../../services/auth"
import { useAuth } from "../../context/AuthContext"



function Login(){


    const navigate = useNavigate()
     const { loginUser } = useAuth()


    const [email,setEmail] = useState('')
    const [password,setPassword] = useState('')

    const [error,setError] = useState('')



    const handleLogin = async(e)=>{

        e.preventDefault()


        try{


            const response = await login({

                email,

                password

            })


            console.log(response)



            // sementara simpan user dulu

           loginUser(response.user)



            // pindah halaman

            navigate("/customers")



        }catch(error){


            setError(
                error.response?.data?.message 
                ||
                "Login gagal"
            )


        }


    }



    return (

        <div className="
            min-h-screen
            flex
            items-center
            justify-center
        ">


            <form
                onSubmit={handleLogin}
                className="card bg-base-200 p-8 w-96"
            >


                <h1 className="text-2xl font-bold mb-5">
                    Login
                </h1>



                {
                    error &&
                    <div className="text-red-500">
                        {error}
                    </div>
                }



                <input

                    className="input input-bordered mb-3"

                    placeholder="Email"

                    value={email}

                    onChange={
                        e=>setEmail(e.target.value)
                    }

                />



                <input

                    className="input input-bordered mb-3"

                    placeholder="Password"

                    type="password"

                    value={password}

                    onChange={
                        e=>setPassword(e.target.value)
                    }

                />



                <button
                    className="btn btn-primary"
                >
                    Login
                </button>


            </form>


        </div>

    )

}


export default Login