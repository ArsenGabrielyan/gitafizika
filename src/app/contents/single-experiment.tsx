import ExperimentCard from "@/components/cards/experiment";
import SiteLayout from "@/components/layout";
import { Badge } from "@/components/ui/badge";
import { Breadcrumb, BreadcrumbList, BreadcrumbItem, BreadcrumbLink, BreadcrumbSeparator, BreadcrumbPage } from "@/components/ui/breadcrumb";
import { Button } from "@/components/ui/button";
import { absoluteURL } from "@/lib/utils";
import { Share2 } from "lucide-react";

interface SingleExperimentContentProps{
     slug: string
}
export default function SingleExperimentContent({slug}: SingleExperimentContentProps){
     return (
          <SiteLayout>
               <section className="w-full min-h-[56dvh] flex items-center justify-center bg-radial-[at_6%_4%] from-[#0069a8] via-background to-background">
                    <div className="flex items-center justify-center flex-col gap-6 w-full max-w-360">
                         <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl 2xl:text-6xl font-semibold">Գիտական փորձ</h1>
                         <p className="text-lg text-muted-foreground">Փորձի նկարագրություն</p>
                         <div className="flex items-center gap-2">
                              <Badge>Կատեգորիա 1</Badge>
                              <Badge>Կատեգորիա 2</Badge>
                              <Badge>Կատեգորիա 3</Badge>
                         </div>
                    </div>
               </section>
               <section className="w-full flex justify-center items-center py-4 px-8 scroll-mt-10">
                    <div className="w-full max-w-360 space-y-8 relative">
                         <div className="grid grid-cols-1 lg:grid-cols-[300px_1fr] gap-6 relative">
                              <div className="sticky mb-3 lg:mb-0 top-0 lg:top-21.25 h-fit">
                                   <h2 className="text-xl md:text-2xl lg:text-[27px] font-semibold border-b border-primary pb-1 mb-4 w-fit">Ձեզ անհրաժեշտ են</h2>
                                   <ul className="list-disc pl-5 space-y-2 marker:text-primary">
                                        <li>Բան 1</li>
                                        <li>Բան 2</li>
                                        <li>Բան 3</li>
                                        <li>Բան 4</li>
                                        <li>Բան 5</li>
                                   </ul>
                              </div>
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
                                                       <BreadcrumbPage>{slug}</BreadcrumbPage>
                                                  </BreadcrumbItem>
                                             </BreadcrumbList>
                                        </Breadcrumb>
                                        <Button variant="secondary" title="Կիսվել այս փորձը" size="icon">
                                             <Share2/>
                                        </Button>
                                   </div>
                                   <article className="prose dark:prose-invert max-w-none">
                                        Այստեղ կտեղադրվեն MDX բովանդակություն
                                   </article>
                              </div>
                         </div>
                         <h2 className="text-xl md:text-2xl lg:text-[27px] font-semibold border-b border-primary pb-1 mb-4 w-fit">Բանալի բառեր</h2>
                         <div className="flex items-center gap-2">
                              <Badge>Կատեգորիա 1</Badge>
                              <Badge>Կատեգորիա 2</Badge>
                              <Badge>Կատեգորիա 3</Badge>
                         </div>
                         <h2 className="text-xl md:text-2xl lg:text-[27px] font-semibold border-b border-primary pb-1 mb-4 w-fit">Առնչվող փորձեր</h2>
                         <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                              <ExperimentCard/>
                              <ExperimentCard/>
                              <ExperimentCard/>
                              <ExperimentCard/>
                         </div>
                    </div>
               </section>
          </SiteLayout>
     )
}