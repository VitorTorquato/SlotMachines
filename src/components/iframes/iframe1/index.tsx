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
            <h2>Available Slot machines:</h2>

                <ul className="space-y-2">
                    {slotMachines.map((machine) => (
                        <li 
                        className="cursor-pointer"
                        key={machine.id}
                        onClick={() => onSelectSlotMachine(machine)}
                        >
                            {`${machine.name} Id: ${machine.id}`}
                        </li>
                    ))}
                </ul>
            
        </div>



    )
}