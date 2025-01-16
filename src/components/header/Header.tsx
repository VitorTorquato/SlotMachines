import {FiLogOut} from 'react-icons/fi'
import gamingCorpsLogo from '../../assets/GamingCorpsLogo.png';

import { Link , useNavigate} from 'react-router-dom';

import { useContext} from 'react';
import { AuthContext } from '../../context/authContext';


import { signOut } from 'firebase/auth';
import {auth} from '../../services/firebaseConection';



export function Header(){

    const {signed} = useContext(AuthContext);

    const navigate = useNavigate();

    async function handleLogOut(){
        await signOut(auth);
        navigate('/login')

        
    }

    return(
        <div className='w-full flex items-center justify-center h-20 md:h-28
          drop-shadow-md'
          style={{backgroundColor: '#0C0C0C'}}
          >
            <header className='w-full max-w-7xl mx-auto flex items-center justify-between px-4 text-white'>
                <div>
                    <img className='w-32 md:w-40' src={gamingCorpsLogo} alt="gaming corpos logo png"/>
                </div>

                <nav className='flex items-center gap-3'>
                    {
                        !signed ? (
                            <Link to='/register'>
                                SingIn
                            </Link>
                        ): ( 
                            <button onClick={handleLogOut}>
                                <FiLogOut size={24} color='#FFF'/>
                            </button>
                        )
                    }
                </nav>

            </header>
        </div>
    )
}