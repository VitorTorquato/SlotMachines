import { ChangeEvent, FormEvent, useState } from "react";
import { Link , useNavigate} from "react-router-dom";
import GamingCorpsLogo  from "../../assets/GamingCorpsLogo.png";


import {auth} from '../../services/firebaseConection';
import {
    signInWithEmailAndPassword
} from 'firebase/auth';
import toast from "react-hot-toast";


export function SignIn(){



    const [email,setEmail] = useState<string>('')
    const [password,setPassword] = useState<string>('')

    const navigate = useNavigate();

    function onSubmit(e:FormEvent){
        e.preventDefault();

        try{
            if(!email || !password){
                toast.error('Please fill all the fields')
            }
    
            signInWithEmailAndPassword(auth, email, password)
            .then((user) => {
                console.log(user)
                navigate('/' , {replace:true})
            }).catch((error) => {
                console.log(error)
                toast.error('Something went wrong')
    
            })
        }catch(e:any){
            toast.error(e.message)
        }
    }

    return(
        <div
            className="w-full h-full flex items-center justify-center"
            style={{ backgroundColor: '#0C0C0C' }}
        >
            <main className="w-full max-w-7xl h-screen mx-auto flex flex-col  md:flex-row px-2">

                <div className="md:hidden w-full md:h-full h-3 flex-col items-center justify-center">
                    <img
                    className="w-60 md:w-96 mx-auto mt-16"
                    src={GamingCorpsLogo} alt="Logo Gaming Corps"
                    />
                </div>

                <div className="w-full h-full p-9 flex items-center justify-center">
                    <form className="w-full max-w-md h-full max-h-max flex flex-col items-center justify-between gap-2">
                        <h1 className="text-white text-3xl md:text-4xl text-center font-medium mb-2">Welcome back</h1>
                        <p className="text-white text-2xl mb-5 text-center">Please enter your details</p>


                        <div className="w-full flex flex-col gap-1 mb-2">
                            <label className=" text-white ">E-mail</label>
                            <input
                                className="w-full h-11 rounded-md px-2"
                                onChange={(e: ChangeEvent<HTMLInputElement>) => setEmail(e.target.value)}
                                type="text"
                                placeholder="E-mail address"
                            />
                        </div>

                        <div className="w-full flex flex-col gap-1 mb-2">
                            <label className="text-white">Password</label>
                            <input
                                className="w-full h-11 rounded-md px-2"
                                onChange={(e: ChangeEvent<HTMLInputElement>) => setPassword(e.target.value)}
                                type="password"
                                placeholder="Password"
                            />
                        </div>

                        <button
                            onClick={onSubmit}
                            className="w-full flex items-center justify-center rounded-md text-white h-11 cursor-pointer mb-4"
                            style={{ backgroundColor: '#16307C' }}
                        >
                            SIGN IN
                        </button>

                        <p className="text-white text-center">Don't you have an account ? <Link
                            className="font-bold"
                            style={{ color: '#16307C' }} to='/register'>Register</Link> </p>
                    </form>
                </div>

                <div className="hidden w-full md:h-full h-3 md:flex flex-col items-center justify-center">
                    <img
                    className="w-60 md:w-96 mx-auto mt-16"
                    src={GamingCorpsLogo} alt="Logo Gaming Corps"
                    />
                </div>
            </main>
        </div>
    )
}