import { useState } from "react"
import { SlotMachineList } from "./iframe1";
import { SelectedSlotMachine } from "./iframe2";

export function IframeParentContainer(){
    
    const [selectedSlotMachine , setSelectedSlotMachine] = useState<any>(null);
    const [userBalance , setUserBalance] = useState<number>(100);

    function handleSelectedMachine(machine:any){
        setSelectedSlotMachine(machine)
    }

    return(
        <div className="w-full flex gap-9  justify-center">
            <div className="border p-4" title="Selected slot machine">
            <SlotMachineList onSelectSlotMachine={handleSelectedMachine}/>
            <div>
                <span>{`User Balance: ${userBalance}`}</span>
            </div>

            </div>

            <div className="border p-4" title="Selected slot machine">
                {
                    selectedSlotMachine ? (
                        <SelectedSlotMachine
                        slotMachine={selectedSlotMachine}
                        userBalance={userBalance}
                        setUserBalance={setUserBalance}
                        />
                    ) : <p>Select a slot machine</p>
                }
            </div>
        </div>
    )
}