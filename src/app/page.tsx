import SiteLayout from "@/components/layout";
import AboutSection from "@/section/about";
import ExperimentsSection from "@/section/experiments";
import HeroSection from "@/section/hero";
import TemplatesSection from "@/section/templates";

export default function Home() {
  return (
    <SiteLayout>
      <HeroSection/>
      <AboutSection/>
      <ExperimentsSection/>
      <TemplatesSection/>
    </SiteLayout>
  );
}
