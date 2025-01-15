import GamingCorpsLogo  from "../../assets/GamingCorpsLogo.png";

import { Link , useNavigate } from "react-router-dom";

import {auth} from '../../services/firebaseConection';

import {
    createUserWithEmailAndPassword,
    updateProfile
} from 'firebase/auth';

import { ChangeEvent, FormEvent, useContext, useState } from "react";
import { AuthContext } from "../../context";


import { Input } from "../../components";


// interface SignUpProps{
//     name:string;
//     email:string;
//     password:string | number
// }


export function SignUp(){


    const [name,setName] = useState<string>('');
    const [email,setEmail] = useState<string>('');
    const [password,setPassword] = useState<string>(' ');

    const {handleInfoUser} = useContext(AuthContext);
    
    
    const navigate = useNavigate();



    async function onSubmit(e:FormEvent){
        e.preventDefault()

        createUserWithEmailAndPassword(auth, email,password)
        .then(async (user) => {
            await updateProfile(user.user , {
                displayName: name
            })

            handleInfoUser({
                name:name,
                email:email,
                uid: user.user.uid
            })

            alert(`Account created`)
            navigate('/login')
        }).catch((error) => {
            console.log(error)
            alert(`Something went wrog , try again`)
        })
    }

    return(
        <div
         className="w-full h-full flex items-center justify-center" 
        style={{backgroundColor: '#0C0C0C'}}
        >
            <main className="w-full max-w-7xl h-screen mx-auto flex flex-col md:flex-row">


                    <div className="hidden w-full h-full md:flex items-center justify-center ">
                        <img 
                        className="w-96"
                        src={GamingCorpsLogo} alt="Logo Gaming Corps" />
                    </div>

                    <div className="w-full h-full p-9 flex items-center justify-center">
                        <form className="w-full max-w-md h-full max-h-max flex flex-col items-center justify-between gap-2">
                                <h1 className="text-white text-3xl font-medium mb-2 text-center">WHERE PASSION MEETS GAMING</h1>
                               
                              
                                <div className="w-full flex flex-col gap-1 mb-2">
                                    <label className=" text-white ">Full Name</label>
                                    <input 
                                    className="w-full h-11 rounded-md px-2"
                                    onChange={(e:ChangeEvent<HTMLInputElement>) => setName(e.target.value)}
                                    type="text"
                                    placeholder="Full name" 
                                    />
                                </div>

                                <div className="w-full flex flex-col gap-1 mb-2">
                                    <label className=" text-white ">E-mail</label>
                                    <input 
                                    className="w-full h-11 rounded-md px-2"
                                    onChange={(e:ChangeEvent<HTMLInputElement>) => setEmail(e.target.value)}
                                    type="text"
                                    placeholder="E-mail address" 
                                    />
                                </div>

                                <div className="w-full flex flex-col gap-1 mb-2">
                                    <label className="text-white">Password</label>
                                    <input 
                                    className="w-full h-11 rounded-md px-2"
                                    onChange={(e:ChangeEvent<HTMLInputElement>) => setPassword(e.target.value)}
                                    type="password"
                                    placeholder="Password" 
                                    />
                                </div>

                                <button
                                onClick={onSubmit}
                                className="w-full flex items-center justify-center rounded-md text-white h-11 cursor-pointer mb-4"
                                style={{backgroundColor: '#16307C'}}
                                >
                                    SINGN UP
                                </button>

                                <p className="text-white">Already have an account? <Link 
                                className="font-bold"
                                style={{color:'#16307C'}} to='/login'>Sign In</Link> </p>
                        </form>
                    </div>

                   
            </main>
        </div>
    )
}