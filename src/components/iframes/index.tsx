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
            <div className="flex-1 border  flex flex-col">

                <div className="flex flex-col p-4 items-center">
                <SlotMachineList onSelectSlotMachine={handleSelectedMachine}/>
                

                </div>
                <div className=" bg-zinc-400 px-1">

                        <span className=" text-white text-sm ">{`Balance: $${userBalance}`}</span>
                </div>
            </div>

            
            <div className="flex-1 border p-4 flex flex-col items-center">
                {
                    selectedSlotMachine ? (
                        <SelectedSlotMachine
                        slotMachine={selectedSlotMachine}
                        userBalance={userBalance}
                        setUserBalance={setUserBalance}
                        />
                    ) : <div className="w-full h-full flex items-center justify-center"><p className="text-white text-4xl">Select a slot machine</p></div>
                }
            </div>
        </div>
    )
}