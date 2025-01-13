import { useEffect,useState } from "react";



import { SlotMachineInterface } from "../../../utils/types/slotMachine.type";
import { fetchSlotMachines } from "../../../api/api";

interface SlotMachineListProps{
 onSelectSlotMachine:(machine:any) => void;
}

export function SlotMachineList({onSelectSlotMachine} : SlotMachineListProps){
    
        const [slotMachines , setSlotMachines] = useState<SlotMachineInterface[]>([])


        useEffect(() => {
            async function fetchData(){
                const response:any = await fetchSlotMachines();
                const data = response.slotMachines.map((slotMachine:any) => ({
                    id: slotMachine.id,
                    name:slotMachine.name,
                    betAmounts: slotMachine.betAmounts
                }))
                setSlotMachines(data)
            }
    
    
            fetchData();
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