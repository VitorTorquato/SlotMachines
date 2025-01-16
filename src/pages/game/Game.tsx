import { IframeParentComponent } from "../../components";
import { Container } from "../../components";

export function Game() {

  return (
    
      <Container>
        
        <main className="w-full flex flex-col items-center justify-start min-h-[calc(100vh-128px)]  gap-5 2xl:gap-24 pb-9 pt-9">
          <section className="flex w-full h-full items-center justify-center max-w-5xl mx-auto">
            <IframeParentComponent/>
          </section>
        </main>
      </Container>
  
    
  )
}

