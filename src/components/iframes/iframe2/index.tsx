import {FiLoader} from 'react-icons/fi'
import { useState } from "react";
import SlotMachine from "../../../utils/classes/slotMachine";



interface SelecetedSlotMachineProps{
    slotMachine:any;
    userBalance: number;
    setUserBalance: React.Dispatch<React.SetStateAction<number>>;
}

export function SelectedSlotMachine({slotMachine,userBalance,setUserBalance}: SelecetedSlotMachineProps){


   
    const [curretnBet , setCurrentBet] = useState<number>(0);
    const [spinning,setSpinning] = useState(false);
    const [spinningResult,setSpinningResult] = useState<number | string>("Spin to win")




    const slotMachineInstance = new SlotMachine(slotMachine.id, slotMachine.name , slotMachine.betAmounts);

    function handleBet(bet:number){
        setCurrentBet(bet);
        slotMachineInstance.placeBet(bet);
    }


    function hanleSpin(){
        setSpinning(true)

        if(userBalance < 0){
            return;
        }

        setTimeout(() => {
            const result = slotMachineInstance.spin();
           
            const spinResult = result > 0 ? `You win ${result}` : `You lose ${result}` 
            setSpinningResult(spinResult)
            setUserBalance(userBalance + result);
            setSpinning(false);
            
        }, 3000)
    }

    


        
    return(

        <div className="w-full h-full flex flex-col justify-between">
            <div className='flex flex-col gap-3'>
            <h2 className="text-white text-4xl text-center mb-2">{slotMachine.name}</h2>
                <h3 className="text-white text-2xl mt-4 text-center mb-2">Place your bet:</h3>
                
                <div className="flex gap-2 justify-between">
                {
                    slotMachineInstance.availableBetAmounts.map((amount:number) => (
                        <button
                        className="flex items-center justify-center w-full p-4 text-white border-2 border-zinc-600 h-16 text-4xl bg-zinc-400 hover:scale-105 hover:-translate-y-1 duration-300 ease-in-out opacity-40 hover:opacity-100"
                        onClick={() => handleBet(amount)}
                        key={amount}>${amount}</button>
                    ))
                   }
                </div>

                <div className='w-full flex items-center justify-center mt-5'>
                    {
                        spinning ? (
                            <FiLoader  className={!spinning ? 'block' : 'animate-spin'} size={62} color='#FFF'/>
                        ) : <span className='text-white text-4xl'>{spinningResult}</span>
                    }
                </div>


            </div>

            <div>
                <button 
                className="w-full p-2 flex items-center justify-center text-white text-2xl font-medium bg-blue-500 rounded-md hover:scale-105 hover:-translate-y-1 hover:bg-blue-400  duration-300 "
                onClick={hanleSpin}
                disabled={curretnBet === 0 || userBalance < curretnBet}
                >
                    spin
                </button>
            </div>
        </div>
    )
}