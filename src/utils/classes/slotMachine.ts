import { SlotMachineInterface } from "../types/slotMachine.type";


export type SlotMachineParams = {
   id:number;
   name:string;
   availableBetAmounts: number[];
}


export class SlotMachine implements SlotMachineInterface {
        id:number;
        name: string;
        betAmount: number;
        availableBetAmounts: number[];


        constructor({id, name, availableBetAmounts}: SlotMachineParams){
            this.id = id;
            this.name = name;
            this.betAmount = 0
            this.availableBetAmounts = availableBetAmounts; 
        }

         placeBet(betAmount: number): void {
             if(betAmount <= 0){
                alert("Bet amount must be greater than zero")
             }
             this.betAmount = betAmount;
             
            return;
         }

         spin(): number {
             

            const result = Math.random() > 0.5 ? Math.ceil(Math.random() * 100) : -Math.ceil(Math.random() *100);
         

            return result;
         }
    

}

export default SlotMachine;