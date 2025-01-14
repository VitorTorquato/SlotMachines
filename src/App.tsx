
import { IframeParentComponent } from "./components";
import { Container } from "./components/container";
import { Header } from "./components/header/Header";



export function App() {







  return (
    <div className="bg-zinc-800">
      <Header/>
      <Container>
        <h1 className="text-center mt-8 text-5xl font-medium text-white">Slot machine</h1>
        <main className="w-full flex items-center justify-center min-h-[calc(100vh-200px)] gap-9">
          <IframeParentComponent/>
        </main>
      </Container>

    </div>
    
  )
}

