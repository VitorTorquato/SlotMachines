import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

import { SlotMachineList } from './components/iframes/slot-machine-list/SlotMachineList.tsx'
import { Container } from './components/container/Container.tsx'

import './index.css'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Container>
      <SlotMachineList />
    </Container>
  </StrictMode>,
)