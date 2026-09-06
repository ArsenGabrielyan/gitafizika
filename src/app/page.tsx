import SiteFooter from "@/components/layout/footer";
import SiteHeader from "@/components/layout/header";
import AboutSection from "@/section/about";
import ExperimentsSection from "@/section/experiments";
import HeroSection from "@/section/hero";
import TemplatesSection from "@/section/templates";

export default function Home() {
  return (
    <>
      <SiteHeader/>
      <HeroSection/>
      <AboutSection/>
      <ExperimentsSection/>
      <TemplatesSection/>
      <SiteFooter/>
    </>
  );
}
