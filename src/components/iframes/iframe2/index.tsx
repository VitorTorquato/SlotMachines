import { useEffect, useState } from "react";
import SlotMachine from "../../../utils/classes/slotMachine";
import { SlotMachineInterface } from "../../../utils/types/slotMachine.type"

import { fetchSlotMachines } from "../../../api/api";

interface SelecetedSlotMachineProps{
    slotMachine:any;
    userBalance: number;
    setUserBalance: React.Dispatch<React.SetStateAction<number>>;
}

export function SelectedSlotMachine({slotMachine,userBalance,setUserBalance}: SelecetedSlotMachineProps){

   
    const [curretnBet , setCurrentBet] = useState<number>(0);

    const slotMachineInstance = new SlotMachine(slotMachine.id, slotMachine.name);

    function handleBet(bet:number){
        setCurrentBet(bet);
        slotMachineInstance.placeBet(bet);
    }


    function hanleSpin(){
        const result = slotMachineInstance.spin();
        setUserBalance(userBalance + result);
        alert(result > 0 ? `You Won $${result}` : `You lose $${-result}`)
    }

    

    // useEffect(() => {
    //     async function fetchData(){
    //         const response:any = await fetchSlotMachines();
    //         const data = response.slotMachines.map((slotMachine:any) => ({
    //             id: slotMachine.id,
    //             name:slotMachine.name,
    //             betAmounts: slotMachine.betAmounts
    //         }))
         
    
    //     }


    //     fetchData();
    // } , [])
        
    return(

        <div>
            <h2>{slotMachine.name}</h2>
            <div>
                <h3>Place your bet</h3>
                <div className="border">
                   <input className="w-full" type="number" />
                </div>
            </div>

            <div>
                <button 
                onClick={hanleSpin}
                disabled={curretnBet === 0 || userBalance < curretnBet}
                >
                    spin
                </button>
            </div>
        </div>
    )
}