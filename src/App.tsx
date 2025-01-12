import SlotMachine from "./utils/classes/slotMachine";


import {slotMachines} from '../data.json'

import { Container } from "./components/container";
import { Header } from "./components/header";
import { Iframe1 } from "./components/iframe1";
import { Iframe2 } from "./components/iframe2";


export function App() {


  const slotMachineObjects = slotMachines.map((machine) => new SlotMachine(machine.id,machine.name))


  return (
    <>
      <Header/>
      <Container>
        <h1>Essa vaga e minha</h1>
        <main className="w-full flex items-center justify-center min-h-[calc(100vh-64px)] gap-9">
          <Iframe1 slotMachines={slotMachineObjects}/>
          <Iframe2/>
        </main>
      </Container>

    </>
    
  )
}

