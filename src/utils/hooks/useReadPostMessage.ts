import { useEffect } from "react";

interface MessageData {
    type: string;
    payload?: any;
}

export type PostMessageHandler = (data:MessageData) => void;

export function useReadPostMessage(handler: PostMessageHandler){

    useEffect(() => {
        
        function handlePostMessage(event:MessageEvent<MessageData>){
            // Pass the message data to the provide handler
            handler(event.data);
        };

        //add event listener
        window.addEventListener('message' , handlePostMessage);

        //remove evente listener
        return () => {
            window.removeEventListener('message' , handlePostMessage);
        };

    } , [handler]) //re-run effect if handler change.
}
