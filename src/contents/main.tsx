"use client"
import SiteLayout from "@/components/layout";
import AboutSection from "@/section/about";
import ExperimentsSection from "@/section/experiments";
import HeroSection from "@/section/hero";
import TemplatesSection from "@/section/templates";
import { useEffect } from "react";
import { toast } from "sonner";
import { ExperimentMetadata, Template } from "@/lib/types";

interface MainContentProps{
     templates: Template[],
     error?: string,
     experiments: ExperimentMetadata[]
}
export default function MainContent({templates, error, experiments}: MainContentProps){
     useEffect(() => {
          if (error) toast.error(error);
     }, [error]);
     return (
          <SiteLayout>
               <HeroSection/>
               <AboutSection/>
               <ExperimentsSection experiments={experiments}/>
               <TemplatesSection templates={templates}/>
          </SiteLayout>
     )
}