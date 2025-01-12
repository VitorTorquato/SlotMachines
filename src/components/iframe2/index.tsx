import { useEffect, useState } from "react"
import SlotMachine from "../../utils/classes/slotMachine";


type SelectedSlot = {
    id: number;
    name: string;
    betAmounts: number[];
};
export function Iframe2(){

    const [receivedSlot,setReceivedSlot] = useState<SelectedSlot | null>(null)
    //const [currentBet ,setCurrentBet] = useState<number>(0)




    useEffect(() => {
        function handleMessage(event: MessageEvent) {
            if (event.data?.selectedSlot) {
                setReceivedSlot(event.data.selectedSlot);
            }
        }

        window.addEventListener("message", handleMessage);

        return () => {
            window.removeEventListener("message", handleMessage);
        };
    }, []);

    return (
        <div className="flex-1 p-4 flex flex-col gap-2 border-2 border-slate-400 rounded-md">
            <h2>Slot Machine Selected:</h2>
            {receivedSlot ? (
                <div>
                    <p><strong>Name:</strong> {receivedSlot.name}</p>
                    <p><strong>ID:</strong> {receivedSlot.id}</p>
                    <p><strong>Bet Amounts:</strong> {receivedSlot.betAmounts.join(", ")}</p>
                </div>
            ) : (
                <p>No Slot Machine Selected</p>
            )}
        </div>
    );
}