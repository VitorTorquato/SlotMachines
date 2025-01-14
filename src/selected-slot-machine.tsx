import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import { SelectedSlotMachine } from './components/iframes/selected-slot-machine/SelectedSlotMachine';
import { Container } from "./components";

import './index.css'

createRoot(document.getElementById('root')!).render(
    <StrictMode>
        <Container>
            <SelectedSlotMachine/>
        </Container>
    </StrictMode>
)