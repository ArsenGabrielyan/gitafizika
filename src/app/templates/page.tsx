import { Metadata } from "next";
import TemplatesMainContent from "../../contents/templates";
import { getTemplatesFromCDN } from "@/lib/helpers/data";
import { toast } from "sonner";

export const metadata: Metadata = {
     title: "Շաբլոններ"
}
export default async function TemplatesMainPage(){
     const templates = await getTemplatesFromCDN()
     if(templates.error) toast.error(templates.error)
     return (
          <TemplatesMainContent templates={templates.data}/>
     )
}