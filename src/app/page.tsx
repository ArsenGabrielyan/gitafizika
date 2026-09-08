import SiteLayout from "@/components/layout";
import { getTemplatesFromCDN } from "@/lib/helpers/data";
import AboutSection from "@/section/about";
import ExperimentsSection from "@/section/experiments";
import HeroSection from "@/section/hero";
import TemplatesSection from "@/section/templates";
import { toast } from "sonner";

export default async function Home() {
  const templates = await getTemplatesFromCDN()
  if(templates.error) toast.error(templates.error)
  return (
    <SiteLayout>
      <HeroSection/>
      <AboutSection/>
      <ExperimentsSection/>
      <TemplatesSection templates={templates.data}/>
    </SiteLayout>
  );
}
