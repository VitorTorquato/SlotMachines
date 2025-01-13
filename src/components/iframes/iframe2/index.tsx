import { useState } from "react";
import SlotMachine from "../../../utils/classes/slotMachine";



interface SelecetedSlotMachineProps{
    slotMachine:any;
    userBalance: number;
    setUserBalance: React.Dispatch<React.SetStateAction<number>>;
}

export function SelectedSlotMachine({slotMachine,userBalance,setUserBalance}: SelecetedSlotMachineProps){

   
    const [curretnBet , setCurrentBet] = useState<number>(0);

    const slotMachineInstance = new SlotMachine(slotMachine.id, slotMachine.name , slotMachine.betAmounts);

    function handleBet(bet:number){
        setCurrentBet(bet);
        slotMachineInstance.placeBet(bet);
    }


    function hanleSpin(){
        const result = slotMachineInstance.spin();
        setUserBalance(userBalance + result);
        alert(result > 0 ? `You Won $${result}` : `You lose $${-result}`)
    }

    


        
    return(

        <div>
            <h2>{slotMachine.name}</h2>
            <div>
                <h3>Place your bet</h3>
                <div className="border">
                {
                    slotMachineInstance.availableBetAmounts.map((amount:number) => (
                        <button
                        onClick={() => handleBet(amount)}
                        key={amount}>${amount}</button>
                    ))
                   }
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