import {FiLogOut} from 'react-icons/fi'
import gamingCorpsLogo from '../../assets/GamingCorpsLogo.png';


export function Header(){
    return(
        <div className='w-full flex items-center justify-center  h-28 bg-zinc-950
          drop-shadow-md'>
            <header className='w-full max-w-7xl mx-auto flex items-center justify-between px-4 text-white'>
                <div>
                    <img className='w-52' src={gamingCorpsLogo} alt="gaming corpos logo png"/>
                </div>

                <nav className='flex items-center gap-3'>
                    <a href="#">Sign in</a>
                    <a href="#">
                        <FiLogOut size={24} color='#FFF'/>
                    </a>
                </nav>

            </header>
        </div>
    )
}