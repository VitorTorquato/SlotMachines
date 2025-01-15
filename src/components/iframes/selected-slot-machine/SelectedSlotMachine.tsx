import { FiLoader } from 'react-icons/fi'
import { useEffect, useState } from "react";

import slotApiData from '../../../api/api.json';
import { useReadPostMessage, type PostMessageHandler } from '../../../utils/hooks';
import { SlotMachine } from '../../../utils/classes';



export function SelectedSlotMachine() {
    const [currentBet, setCurrentBet] = useState<number>(0);
    const [spinning, setSpinning] = useState(false);
    const [spinningResult, setSpinningResult] = useState<number | string>("Spin to win")
    const [userBalance , _setUserBalance] = useState<number>(100)
    
    const [slotMachine, setSlotMachine] = useState<SlotMachine | null>(null);

 
    const updateSlotMachine: PostMessageHandler = (postMessageData) => {
        if (postMessageData.type !== 'slot-machine-updated') {
            // Not a message we want to interact with.
            return;
        }

        if (!postMessageData.payload || !postMessageData.payload.id) {
            throw new Error('Necessary payload is missing!');
        }

        if (!slotApiData) {
            throw new Error('Slot machines are not set');
        }

        const selectedMachine = slotApiData.slotMachines.find((machine) => machine.id === postMessageData.payload.id);

        if (!selectedMachine) {
            throw new Error('Selected slot machine not found');
        }


        setSlotMachine(
            new SlotMachine({
                id: selectedMachine.id,
                name: selectedMachine.name,
                availableBetAmounts: selectedMachine.betAmounts
            })
        );

        return;
    }

    useReadPostMessage(updateSlotMachine);

    if (!slotMachine) {
        return (<div className="w-full h-full flex items-center justify-center"><p className="text-white text-4xl">Select a slot machine</p></div>);
    }

    function handleBet(bet: number) {
        if (!slotMachine) {
            throw new Error('Slot machine is not set');
        }

        setCurrentBet(bet);
        slotMachine.placeBet(bet);
    }

    function hanleSpin() {
      

        setSpinning(true)

      
        setTimeout(() => {
            if (!slotMachine) {
                throw new Error('Slot machine is not set');
            }

            if(userBalance < 0){
                return;
            }

            const result = slotMachine.spin();

            
            
            setSpinningResult(result)

            const updatedUserBalance = userBalance + result;
            _setUserBalance(updatedUserBalance);

            window.parent.postMessage(
                {
                    type: "Balance-updated",
                    payload: {userBalance: updatedUserBalance}
                } , '*'
            )


            setSpinning(false);

        }, 2000)
    }



    return (
        <div className="w-full h-full flex flex-col gap-8">
            <div className='flex flex-col '>
                <h2 className="text-white text-2xl text-center mb-2">{slotMachine.name}</h2>
                <h3 className="text-white text-2xl mt-4 text-center mb-2">Place your bet: {currentBet.toLocaleString('en-GB' , {style:'currency' , currency: 'EUR'}).replace(/(\.00|\.0+)$/, '')}</h3>

                <div className="flex ">
                    {
                        slotMachine.availableBetAmounts.map((amount: number) => (
                            <button
                                className="flex items-center justify-center w-full  border-2 border-zinc-600  text-xl text-black bg-yellow-500 hover:scale-105 hover:-translate-y-1 duration-300 ease-in-out"
                                onClick={() => handleBet(amount)}
                                key={amount}>{amount.toLocaleString('en-GB' , {
                                    style:'currency',
                                    currency: 'EUR'
                                }).replace(/(\.00|\.0+)$/, '')}</button>
                        ))
                    }
                </div>

                <div className='w-full flex items-center justify-center mt-7'>
                    {
                        spinning ? (
                            <FiLoader className={!spinning ? 'block' : 'animate-spin'} size={62} color='#FFF' />
                        ) :  
                            (
                                typeof spinningResult === 'number' && spinningResult > 0 ? (
                                  <div className='text-white text-2xl font-bold gap-2 animate-bounce duration-[2000ms]'>
                                    Win <span className='text-6xl'>{spinningResult.toLocaleString('en-GB' , {style:'currency' , currency:'EUR'}).replace(/(\.00|\.0+)$/, '')}</span>
                                  </div>
                                ) : typeof spinningResult === 'number' && spinningResult <= 0 ? (
                                  <div className='text-white text-2xl font-bold gap-2 '>
                                    Lose <span className='text-6xl text-red-500 animate-bounce duration-[2000ms]'>{spinningResult.toLocaleString('en-GB' , {style:'currency' , currency:'EUR'}).replace(/(\.00|\.0+)$/, '')}</span>
                                  </div>
                                ) : (
                                  <span className='text-white text-3xl font-bold'>{spinningResult}</span>
                                )
                          )
                        }
                </div>
            </div>

            <div>
                <button
                    className="w-full p-2 flex items-center justify-center text-white text-2xl font-medium bg-blue-500 rounded-md hover:scale-105 hover:-translate-y-1 hover:bg-blue-400  duration-300 mt-2"
                    style={{display : spinning ? 'none' : 'flex'}}
                    onClick={hanleSpin}
                    disabled={currentBet === 0 || (userBalance || 0) < currentBet}
                >
                    spin
                </button>
            </div>
        </div>
    )
}
