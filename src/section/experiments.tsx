import ExperimentCard from "@/components/cards/experiment";
import { Button } from "@/components/ui/button";

export default function ExperimentsSection(){
     return (
          <div className="w-full min-h-[64dvh] bg-secondary py-4 px-8 flex justify-center items-center">
               <div className="w-full max-w-360 flex justify-center items-center flex-col gap-4">
                    <h2 className="text-xl md:text-2xl lg:text-3xl font-semibold border-b border-primary pb-1 mb-4 w-fit">Գիտական Փորձեր</h2>
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 w-full">
                         <ExperimentCard/>
                         <ExperimentCard/>
                         <ExperimentCard/>
                         <ExperimentCard/>
                    </div>
                    <Button size="lg" variant="outline">Մանրամասն</Button>
               </div>
          </div>
     )
}