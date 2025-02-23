import { useEffect, useState , useRef } from "react";
import { PostMessageHandler , useReadPostMessage } from "../../../utils/hooks";


export function IframeParentComponent(){
        
    const [userBalance , setUserBalance] = useState<number>(100);

    const sloMachineListRef = useRef<HTMLIFrameElement>(null);
    const selectedMachineRef = useRef<HTMLIFrameElement>(null);

    const updateSlotMachine: PostMessageHandler = (postMessageData) => {
        //console.log(postMessageData);
        if(postMessageData.type !== 'slot-machine-updated'){
            return;
    }

    selectedMachineRef?.current?.contentWindow?.postMessage(
        { type: 'slot-machine-updated', payload: { id: postMessageData.payload.id } }, '*'
    )
    };

    useReadPostMessage(updateSlotMachine);

    useEffect(() => {

        const handlePostMessage = (event: MessageEvent) => {
            if(event.data.type === "Balance-updated"){
                const {userBalance: updatedUserBalance} = event.data.payload;

                setUserBalance(updatedUserBalance)
            }
        }

        window.addEventListener("message" , handlePostMessage);


        return () => {
            window.removeEventListener("message" , handlePostMessage)
        }

    } , [])

    return (
        <div className="w-full flex flex-col justify-center md:flex-row gap-9 px-2">
            <div className="flex-1 border  flex flex-col rounded-2xl p-1">
                <div className="px-1 py-1">
                    <span className=" text-black text-xs bg-slate-100 p-1 rounded-md">{`Balance: ${userBalance.toLocaleString('en-gb', { style: 'currency', currency: 'EUR' }).replace(/(\.00|\.0+)$/, '')}`}</span>
                </div>

                <div className=" flex flex-col items-center"
                    style={{ height: '340px' }}
                >
                    <iframe className="w-full h-full p-4"


                        src="/slot-machine-list.html" ref={sloMachineListRef} />
                </div>

            </div>

            <div className="flex-1 border flex items-center justify-center rounded-2xl p-2">
                <iframe className="w-full h-96"
                    src="/selected-slot-machine.html" ref={selectedMachineRef} />
            </div>
        </div>
    )
}