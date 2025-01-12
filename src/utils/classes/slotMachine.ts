import { SlotMachineInterface } from "../types/slotMachine.type";

class SlotMachine implements SlotMachineInterface {
        id:number;
        name: string;
        betAmount: number;


        constructor(id:number,name:string){
            this.id = id;
            this.name = name;
            this.betAmount = 0
          
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
            if(result > 0){
                alert(`You won! The spin result is ${result}`)
            }else if(result < 0){
                alert(`You lose. The spin result is ${result}`)
            } else {
                alert(`No win or loss, try again! The spin result is 0`)
            }

            return result;
         }
    

}

export default SlotMachine;