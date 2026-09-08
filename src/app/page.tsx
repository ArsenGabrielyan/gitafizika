import MainContent from "@/contents/main";
import { getTemplatesFromCDN } from "@/lib/helpers/data";
import { toast } from "sonner";

export const revalidate = 3600;

export default async function Home() {
  const templates = await getTemplatesFromCDN()
  if(templates.error) toast.error(templates.error)
  return (
    <MainContent templates={templates.data} error={templates.error}/>
  );
}
