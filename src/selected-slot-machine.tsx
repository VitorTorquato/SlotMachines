import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import { SelectedSlotMachine } from './components/iframes/selected-slot-machine/SelectedSlotMachine';
import { Container } from "react-dom";

import '.index.css'
import { GoContainer } from "react-icons/go";

createRoot(document.getElementById('root')!).render(
    <StrictMode>
        <GoContainer>
            <SelectedSlotMachine/>
        </GoContainer>
    </StrictMode>
)