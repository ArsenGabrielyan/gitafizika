import TemplateCard from "@/components/cards/template";
import { Button } from "@/components/ui/button";

export default function TemplatesSection(){
     return (
          <div className="w-full min-h-[90dvh] py-4 px-8 flex justify-center items-center">
               <div className="w-full max-w-360 flex justify-center items-center flex-col gap-4">
                    <h2 className="text-xl md:text-2xl lg:text-3xl font-semibold border-b border-primary pb-1 mb-4 w-fit">Շաբլոններ</h2>
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 w-full">
                         <TemplateCard/>
                         <TemplateCard/>
                         <TemplateCard/>
                         <TemplateCard/>
                    </div>
                    <Button size="lg" variant="secondary">Մանրամասն</Button>
               </div>
          </div>
     )
}