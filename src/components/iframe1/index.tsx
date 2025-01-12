import { useState } from "react";

type SlotMachine = {
    id:number;
    name:string
  
}

type IframeProps = {
    slotMachines:SlotMachine[];
}

export function Iframe1({slotMachines}:IframeProps){

    const [selectedSlot , setSelectedSlot] = useState<SlotMachine | null>(null);



        function handleSendContent(){
            if(selectedSlot){
                window.parent.postMessage({selectedSlot} , '*');
            }
        };

    return(
        <div className="flex-1 p-4 flex flex-col gap-2 border-2 border-slate-400 rounded-md">
            <h2>Ready to bet?</h2>

            <p>Available Slot Machines</p>

            <select
            value={selectedSlot?.id || ""}
            onChange={(e:React.ChangeEvent<HTMLSelectElement>) => {
                const slot = slotMachines.find(machine => machine.id === Number(e.target.value))
                setSelectedSlot(slot || null)
            }}
            >
                <option value="">Select a Slot Machine</option>
                {slotMachines.map((machine) => (
                    <option key={machine.id} value={machine.name}>{`${machine.name} Id: ${machine.id}`}</option>
                ))}
            </select>

            <button
            onClick={handleSendContent}
            className="w-full px-1 py-2 flex items-center justify-center bg-blue-500 text-white hover:bg-blue-400 hover:font-medium duration-75">Select</button>


                {/* {selectedSlot && (
                <div className="mt-4">
                    <h3>Selected Slot Machine Details</h3>
                    <p><strong>Name:</strong> {selectedSlot.name}</p>
                    <p><strong>ID:</strong> {selectedSlot.id}</p>
                    <p><strong>Bet Amounts:</strong> {selectedSlot.betAmounts.join(", ")}</p>
                </div>
            )} */}
        </div>
    )
}