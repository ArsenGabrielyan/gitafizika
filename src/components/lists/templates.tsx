import { Template } from "@/lib/types";
import TemplateCard from "../cards/template";

interface TemplatesListProps{
     templates: Template[]
}
export default function TemplatesList({templates}: TemplatesListProps){
     return (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 w-full">
               {templates.map(template=>(
                    <TemplateCard key={template.slug} data={template}/>
               ))}
          </div>
     )
}