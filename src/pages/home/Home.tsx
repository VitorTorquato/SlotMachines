import { IframeParentComponent } from "../../components";
import { Container } from "../../components";



export function Home() {


  return (

    
      <Container>

        
        
        <main className="w-full flex flex-col items-center justify-start min-h-[calc(100vh-128px)]  gap-5 2xl:gap-24">
          <h1 className="text-center text-3xl md:text-5xl font-medium mt-9 text-white">Slot machine</h1>


          <section className="flex w-full h-full items-center justify-center max-w-5xl mx-auto">
            <IframeParentComponent/>
          </section>
        </main>
      </Container>

  
    
  )
}

