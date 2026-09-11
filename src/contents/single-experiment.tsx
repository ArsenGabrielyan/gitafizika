"use client"
import SiteLayout from "@/components/layout";
import ExperimentsList from "@/components/lists/experiments";
import { Badge } from "@/components/ui/badge";
import { Breadcrumb, BreadcrumbList, BreadcrumbItem, BreadcrumbLink, BreadcrumbSeparator, BreadcrumbPage } from "@/components/ui/breadcrumb";
import { Button } from "@/components/ui/button";
import { Experiment, ExperimentMetadata } from "@/lib/types";
import { absoluteURL, getErrorMessage } from "@/lib/utils";
import MDXContent from "@/section/mdx-content";
import { Calendar, Clock, Edit, FlaskConical, PlayCircle, Share2, ShieldAlert, ShieldCheck, TestTube, TestTubes } from "lucide-react";
import { toast } from "sonner";
import Image from "next/image";
import { Separator } from "@/components/ui/separator";
import Link from "next/link";
import { DIFFICULTIES, DURATIONS } from "@/lib/constants";
import { Tooltip, TooltipContent, TooltipTrigger } from "@/components/ui/tooltip";

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
                         <ul className="flex flex-wrap items-center justify-center gap-4">
                              <li className="flex items-center flex-col md:flex-row justify-center gap-2 flex-wrap">
                                   <Calendar className="size-5 text-muted-foreground"/>
                                   {new Date(experiment.date).toLocaleDateString()}
                              </li>
                              {experiment.editDate && (
                                   <li className="flex items-center flex-col md:flex-row justify-center gap-2 flex-wrap">
                                        <Edit className="size-5 text-muted-foreground"/>
                                        {new Date(experiment.editDate).toLocaleDateString()}
                                   </li>
                              )}
                              <li className="flex items-center flex-col md:flex-row justify-center gap-2 flex-wrap">
                                   <Clock className="size-5 text-muted-foreground"/>
                                   {DURATIONS[experiment.duration]}
                              </li>
                              <li className="flex items-center flex-col md:flex-row justify-center gap-2 flex-wrap">
                                   {experiment.difficulty==="starter" ? (
                                        <TestTube className="size-5 text-muted-foreground"/>
                                   ) : experiment.difficulty==="intermediate" ? (
                                        <TestTubes className="size-5 text-muted-foreground"/>
                                   ) : (
                                        <FlaskConical className="size-5 text-muted-foreground"/>
                                   )}
                                   {DIFFICULTIES[experiment.difficulty]}
                              </li>
                              <li className="flex items-center flex-col md:flex-row justify-center gap-2 flex-wrap">
                                   <Tooltip>
                                        <TooltipTrigger>
                                             {experiment.selfGuided ? (
                                                  <ShieldCheck className="text-emerald-500 dark:text-emerald-400 size-4.5"/>
                                             ) : (
                                                  <ShieldAlert className="text-destructive size-4.5"/>
                                             )}
                                        </TooltipTrigger>
                                        <TooltipContent>
                                             {experiment.selfGuided ? "Կարելի է կատարել ինքնուրույն" : "Մեծահասակի հսկողությունը պարտադիր է"}
                                        </TooltipContent>
                                   </Tooltip>
                              </li>
                         </ul>
                    </div>
               </section>
               <section className="w-full flex justify-center items-center py-4 px-8 scroll-mt-10">
                    <div className="w-full max-w-360 space-y-8 relative">
                         <div className="grid grid-cols-1 lg:grid-cols-[300px_1fr] gap-6 relative">
                              <div className="space-y-4 sticky mb-3 lg:mb-0 top-0 lg:top-21.25 h-fit">
                                   {experiment.requirements.length !== 0 && (
                                        <>
                                             <h2 className="text-xl md:text-2xl lg:text-[27px] font-semibold border-b border-primary pb-1 mb-4 w-fit">Ձեզ անհրաժեշտ են</h2>
                                             <ul className="list-disc pl-5 space-y-2 marker:text-primary">
                                                  {experiment.requirements.map((req,i)=>(
                                                       <li key={`req-${i+1}`}>{req}</li>
                                                  ))}
                                             </ul>
                                        </>
                                   )}
                                   {experiment.videoUrl && (
                                        <>
                                        <Separator/>
                                        <Link
                                             href={experiment.videoUrl}
                                             target="_blank"
                                             rel="noopener noreferrer nofollow"
                                             aria-label={`Դիտել ${experiment.title} տեսանյութը`}
                                             className="block group relative w-full"
                                        >
                                             <Image
                                                  src={experiment.thumbnail}
                                                  alt={experiment.title}
                                                  width={1280}
                                                  height={720}
                                                  className="aspect-video w-full rounded-md border object-cover"
                                             />
                                             <div className="absolute inset-0 flex items-center justify-center rounded-md bg-background/50 dark:bg-background/75">
                                                  <PlayCircle className="size-12 text-primary transition-transform group-hover:scale-110" />
                                             </div>
                                             </Link>
                                        </>
                                   )}
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
                         {related && related.length!==0 && (
                              <>
                                   <h2 className="text-xl md:text-2xl lg:text-[27px] font-semibold border-b border-primary pb-1 mb-4 w-fit">Առնչվող փորձեր</h2>
                                   <ExperimentsList experiments={related}/>
                              </>
                         )}
                    </div>
               </section>
          </SiteLayout>
     )
}