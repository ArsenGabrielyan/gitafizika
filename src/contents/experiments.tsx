"use client"
import SearchField from "@/components/fields/search";
import SelectorField from "@/components/fields/selector";
import SiteLayout from "@/components/layout";
import ExperimentsList from "@/components/lists/experiments";
import PaginationWithLinks from "@/components/pagination-with-links";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";
import { ShieldCheck } from "lucide-react";
import { useState } from "react";

export default function ExperimentsMainContent(){
     const [input, setInput] = useState("")
     return (
          <SiteLayout>
               <section className="w-full min-h-[64dvh] flex items-center justify-center bg-radial-[at_6%_4%] from-[#0069a8] via-background to-background">
                    <div className="flex items-center justify-center flex-col gap-6 w-full max-w-360">
                         <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl 2xl:text-6xl font-semibold">Գիտական փորձեր</h1>
                         <p className="text-lg text-muted-foreground">Այստեղ դուք կուսումնասիրեք լիքը գիտական փորձեր։</p>
                         <SearchField
                              placeholder="Որոնել"
                              value={input}
                              onChange={e=>setInput(e.target.value)}
                              onClearSearch={()=>setInput("")}
                              groupClassName="bg-background/50"
                         />
                         <div className="flex items-center gap-2">
                              <Button>Բոլորը (10)</Button>
                              <Button variant="secondary">Ֆիզիկա (5)</Button>
                              <Button variant="secondary">Քիմիա (2)</Button>
                              <Button variant="secondary">Ճարտարապետություն (3)</Button>
                         </div>
                    </div>
               </section>
               <section className="w-full py-4 px-8 flex justify-center items-center flex-col gap-4 scroll-mt-10">
                    <div className="w-full max-w-360 space-y-4">
                         <div className="flex items-center gap-2">
                              <SelectorField
                                   placeholder="Բարդություն"
                                   items={[
                                        {
                                             value: "starter",
                                             label: "Սկսնակ"
                                        },
                                        {
                                             value: "intermediate",
                                             label: "Միջին"
                                        },
                                        {
                                             value: "master",
                                             label: "Մասնագիտացված"
                                        }
                                   ]}
                              />
                              <SelectorField
                                   placeholder="Տևողություն"
                                   items={[
                                        {
                                             value: "short",
                                             label: "<15ր"
                                        },
                                        {
                                             value: "medium",
                                             label: "15-30ր"
                                        },
                                        {
                                             value: "long",
                                             label: "1ժ+"
                                        }
                                   ]}
                              />
                              <div className="rounded-md shadow-xs border bg-background p-2 flex justify-between items-center flex-1 dark:bg-input/30 dark:hover:bg-input/50 border-input aria-invalid:border-destructive aria-invalid:ring-3 aria-invalid:ring-destructive/20 dark:aria-invalid:border-destructive/50 dark:aria-invalid:ring-destructive/40 focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50 disabled:cursor-not-allowed disabled:opacity-50">
                                   <div className="flex items-center gap-2">
                                        <ShieldCheck className="text-emerald-500 dark:text-emerald-400 size-4.5"/> 
                                        <Label htmlFor="self-guided">
                                             Միայն ինքնուրույն կատարվող
                                        </Label>
                                   </div>
                                   <Switch/>
                              </div>
                         </div>
                         <ExperimentsList experiments={[]}/>
                         <PaginationWithLinks
                              totalCount={32}
                              pageSize={8}
                              page={1}
                              navigationMode="router"
                              pageSizeSelectOptions={{
                                   pageSizeOptions: [8,16,24,32,48]
                              }}
                         />
                    </div>
               </section>
          </SiteLayout>
     )
}