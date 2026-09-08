import { Template } from "@/lib/types";
import TemplateCard from "../cards/template";

interface TemplatesListProps{
     start?: number,
     end?: number,
     templates: Template[]
}
export default function TemplatesList({templates, start = 0, end = 4}: TemplatesListProps){
     return (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 w-full">
               {templates.slice(start,end).map(template=>(
                    <TemplateCard key={template.slug} data={template}/>
               ))}
          </div>
     )
}