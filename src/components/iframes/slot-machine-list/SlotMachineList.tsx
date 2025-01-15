import { useEffect } from "react";


import { slotMachines } from '../../../api/api.json';



export function SlotMachineList(){
    
    const onSelectSlotMachine: (machine: any) => void = (machine) => {
        console.log('Selected slot machine:', machine);
    
        window.parent.postMessage({ type: 'slot-machine-updated', payload: { id: machine.id } }, '*');
      };
      
    useEffect(() => {
        onSelectSlotMachine(slotMachines[0])
   
    } , [])
    return(

        <div className="flex flex-col gap-4">
            <h2 className="text-white text-2xl mt-4 text-center">Available Slot machine:</h2>

              <div>
              {slotMachines.map((machine) => (
                        <div
                        key={machine.id}
                        className="flex flex-col items-center gap-2 mb-2"
                        >
                        <button
                          className="w-2/4 border-2 rounded-md  text-white transform hover:scale-105 hover:-translate-y-1 hover:text-blue-300 duration-300 ease-in-out"
                          onClick={() => onSelectSlotMachine(machine)}
                          >
                            {`${machine.id}: ${machine.name}`}
                        </button>
                           <div className="flex items-center justify-center">
                                <span className="text-zinc-200">{`Bet Amount: ${machine.betAmounts.toLocaleString('en-GB' , {style:'currency' , currency: 'EUR'}).replace(/,/g, ' ')}`}</span>
                            </div> 
                        </div>
                    ))}
              </div>
            
        </div>



    )
}