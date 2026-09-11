"use client"
import SiteLayout from "@/components/layout";
import ExperimentsList from "@/components/lists/experiments";
import { Badge } from "@/components/ui/badge";
import { Breadcrumb, BreadcrumbList, BreadcrumbItem, BreadcrumbLink, BreadcrumbSeparator, BreadcrumbPage } from "@/components/ui/breadcrumb";
import { Button } from "@/components/ui/button";
import { Experiment, ExperimentMetadata } from "@/lib/types";
import { absoluteURL, getErrorMessage } from "@/lib/utils";
import MDXContent from "@/section/mdx-content";
import { Share2 } from "lucide-react";
import { toast } from "sonner";

interface SingleExperimentContentProps{
     experiment: Experiment,
     related: ExperimentMetadata[],
     slug: string
}
export default function SingleExperimentContent({experiment, related, slug}: SingleExperimentContentProps){
     const shareExperiment = async() => {
          try{
               await navigator.share({
                    title: experiment.title,
                    url: absoluteURL(`/experiments/${slug}`)
               })
               toast.success("Գիտափորձը հաջողությամբ կիսվել է")
          } catch (err: unknown) {
               toast.error("Չհաջողվեց կիսվել գիտական փորձը",{
                    description: getErrorMessage(err)
               });
          }
     }
     return (
          <SiteLayout>
               <section className="w-full min-h-[56dvh] flex items-center justify-center bg-radial-[at_6%_4%] from-[#0069a8] via-background to-background">
                    <div className="flex items-center justify-center flex-col gap-6 w-full max-w-360">
                         <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl 2xl:text-6xl font-semibold">{experiment.title}</h1>
                         <p className="text-lg text-muted-foreground">{experiment.description}</p>
                         {experiment.categories.length !== 0 && (
                              <div className="flex items-center gap-2">
                                   {experiment.categories.map(category=>(
                                        <Badge key={category.toLowerCase()}>{category}</Badge>
                                   ))}
                              </div>
                         )}
                    </div>
               </section>
               <section className="w-full flex justify-center items-center py-4 px-8 scroll-mt-10">
                    <div className="w-full max-w-360 space-y-8 relative">
                         <div className="grid grid-cols-1 lg:grid-cols-[300px_1fr] gap-6 relative">
                              {experiment.requirements.length !== 0 && (
                                   <div className="sticky mb-3 lg:mb-0 top-0 lg:top-21.25 h-fit">
                                        <h2 className="text-xl md:text-2xl lg:text-[27px] font-semibold border-b border-primary pb-1 mb-4 w-fit">Ձեզ անհրաժեշտ են</h2>
                                        <ul className="list-disc pl-5 space-y-2 marker:text-primary">
                                             {experiment.requirements.map((req,i)=>(
                                                  <li key={`req-${i+1}`}>{req}</li>
                                             ))}
                                        </ul>
                                   </div>
                              )}
                              <div className="space-y-4 relative">
                                   <div className="sticky top-17.25 w-full not-prose bg-background border-b p-2 flex justify-between items-center">
                                        <Breadcrumb className="w-3/5">
                                             <BreadcrumbList className="text-xs sm:text-sm">
                                                  <BreadcrumbItem>
                                                       <BreadcrumbLink href={absoluteURL("/")}>Գլխավոր</BreadcrumbLink>
                                                  </BreadcrumbItem>
                                                  <BreadcrumbSeparator/>
                                                  <BreadcrumbItem>
                                                       <BreadcrumbLink href={absoluteURL("/experiments")}>Գիտական փորձեր</BreadcrumbLink>
                                                  </BreadcrumbItem>
                                                  <BreadcrumbSeparator/>
                                                  <BreadcrumbItem>
                                                       <BreadcrumbPage>{experiment.title}</BreadcrumbPage>
                                                  </BreadcrumbItem>
                                             </BreadcrumbList>
                                        </Breadcrumb>
                                        <Button variant="secondary" title="Կիսվել այս փորձը" size="icon" onClick={shareExperiment}>
                                             <Share2/>
                                        </Button>
                                   </div>
                                   <MDXContent source={experiment.content}/>
                              </div>
                         </div>
                         {experiment.tags.length!==0 && (
                              <>
                                   <h2 className="text-xl md:text-2xl lg:text-[27px] font-semibold border-b border-primary pb-1 mb-4 w-fit">Բանալի բառեր</h2>
                                   <div className="flex items-center gap-2">
                                        {experiment.tags.map((tag,i)=>(
                                             <Badge key={`${tag.toLowerCase()}-${i+1}`}>{tag}</Badge>
                                        ))}
                                   </div>
                              </>
                         )}
                         <h2 className="text-xl md:text-2xl lg:text-[27px] font-semibold border-b border-primary pb-1 mb-4 w-fit">Առնչվող փորձեր</h2>
                         <ExperimentsList experiments={related}/>
                    </div>
               </section>
          </SiteLayout>
     )
}