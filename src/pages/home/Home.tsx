import HeroImg from '../../assets/hero-img.png';
import Slotmachine from '../../assets/slot-machine.png'

import { useContext } from 'react';
import { AuthContext } from '../../context/authContext';

import { useNavigate } from 'react-router-dom';


export function Home(){

    const {user,signed} = useContext(AuthContext);
    console.log(user);

    const navigate = useNavigate();

    function handlePlayGame(){
        
        if(!user?.uid || ! signed){
            navigate('/login')
            return
        }

        navigate('/game')
    }

    return(
        <div className="relative w-full h-screen"
        style={{backgroundColor: '#282828'}}
        >
            <img
            className='absolute z-0 top-0 opacity-10 w-full h-full'
            src={HeroImg} alt="slot machine and cois image" />

            <main className="relative z-50 w-full max-w-5xl mx-auto px-4">

                <h1 className='text-center text-white text-5xl font-bold py-6'>SLOT MACHINE</h1>

                <section className='w-full flex items-center justify-between'>
                    <div className='w-full max-w-xl'>
                            
                            <h2 className='text-white text-3xl mb-8'>Spin Big, Win Bigger in Triple Spin Slots!</h2>
                            
                            <p className='text-white text-base mb-8'>Step into the electrifying world of Triple Spin Slots, where every spin is a chance to strike it big! This exhilarating slot machine game offers not one, not two, but three different machines to choose. Whether you're in the mood for a casual spin or ready to max out your bets.</p>


                            <button
                            onClick={handlePlayGame}
                            className="w-fit p-2 px-6 flex items-center justify-center  text-white  font-medium border-2 rounded-md hover:scale-105 hover:-translate-y-1 hover:text-blue-400  duration-300 mt-2"
                            >PLAY</button>
                    </div>
                    <div>
                        <img
                        className='w-72'
                        src={Slotmachine} alt="slot machine" />
                    </div>
                </section>

            </main>
        </div>
    )
}