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

        <div className="flex flex-col ">
            <h2 className="text-white text-2xl mb-1 text-center">Available Slot Machines:</h2>

              <div>
              {slotMachines.map((machine) => (
                        <div
                        key={machine.id}
                        className="flex flex-col items-center gap-2 mb-2 "
                        >
                        <button
                          className="w-2/4 text-white transform mt-2 hover:scale-105 hover:-translate-y-1 hover:text-blue-300 duration-300 ease-in-out"
                            style={{
                                border: '2px solid #28BAE9',
                                borderRadius: '6px'
                            }}
                          onClick={() => onSelectSlotMachine(machine)}
                          >
                            {`${machine.id}: ${machine.name}`}
                        </button>
                           <div className="flex items-center justify-center">
                                <span className="text-zinc-200 text-sm  pb-1">Bet Amount: <span className="font-medium text-base">{`${machine.betAmounts.toLocaleString('en-GB' , {style:'currency' , currency: 'EUR'}).replace(/,/g, ' ')}`}</span></span>
                            </div> 
                        </div>
                    ))}
              </div>
            
        </div>



    )
}