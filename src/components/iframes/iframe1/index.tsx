import {useEffect, useState } from "react";
import SlotMachine from "../../../utils/classes/slotMachine";


import {slotMachines} from '../../../api/api.json';
import { SlotMachineInterface } from "../../../utils/types/slotMachine.type";

interface SlotMachineListProps{
 onSelectSlotMachine:(machine:any) => void;
}

export function SlotMachineList({onSelectSlotMachine} : SlotMachineListProps){
    
        const [slotMachine , setSlotMachine] = useState<SlotMachineInterface[]>([]);


    useEffect(() => {
        const machines = slotMachines.map((data) => new SlotMachine(data.id, data.name , data.betAmounts))
        setSlotMachine(machines)
        console.log(machines)
   
    } , [])
    return(

        <div>
            <p className="text-white text-2xl text-center">Place your bet now, your chance to win big starts here!</p>
            <h2 className="text-white text-1xl mt-4 text-center mb-2">Available Slot machine:</h2>

              <div>
              {slotMachines.map((machine) => (
                        <div className="flex flex-col gap-2 mb-2">
                          <button
                          className="border-2 rounded-md p-1 text-white transform hover:scale-105 hover:-translate-y-1 hover:text-blue-300 duration-300 ease-in-out"
                          onClick={() => onSelectSlotMachine(machine)}
                          >
                            {machine.name}
                        </button>
                           <div className="flex items-center justify-center">
                                <span className="text-zinc-200">{`ID: ${machine.id} - Bet Amount: $${machine.betAmounts.join(' $')}`}</span>
                            </div> 
                        </div>
                    ))}
              </div>
            
        </div>



    )
}