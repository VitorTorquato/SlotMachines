export interface SlotMachineInterface{
    id:number;
    name:string;
    betAmount:number;
    placeBet(betAmount:number):void;
    spin():number;
}