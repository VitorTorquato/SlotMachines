
import { Container } from "./components/container";
import { Header } from "./components/header";
import { IframeParentContainer } from "./components/iframes";



export function App() {







  return (
    <>
      <Header/>
      <Container>
        <h1 className="text-center mt-3 text-4xl">Slot machine</h1>
        <main className="w-full flex items-center justify-center min-h-[calc(100vh-64px)] gap-9">
          <IframeParentContainer/>
        </main>
      </Container>

    </>
    
  )
}

