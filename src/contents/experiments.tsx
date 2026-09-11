"use client"
import SearchField from "@/components/fields/search";
import SelectorField from "@/components/fields/selector";
import SiteLayout from "@/components/layout";
import ExperimentsList from "@/components/lists/experiments";
import PaginationWithLinks from "@/components/pagination-with-links";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";
import { DIFFICULTIES, DURATIONS } from "@/lib/constants";
import { FILTER_NAMES } from "@/lib/constants/filters";
import { ExperimentMetadata, FilterName } from "@/lib/types";
import { ShieldCheck } from "lucide-react";
import { usePathname, useRouter } from "next/navigation";
import { useState } from "react";

interface ExperimentsMainContentProps {
     initialQuery?: string
     initialCategory?: FilterName
     experiments: ExperimentMetadata[]
     pageSize: number
     currPage: number
     categoryCounts: Record<FilterName, number>
     totalResults: number
     allCount: number
     
}
export default function ExperimentsMainContent({
     experiments,
     pageSize,
     currPage,
     categoryCounts,
     totalResults,
     allCount,
     initialQuery,
     initialCategory
}: ExperimentsMainContentProps){
     const router = useRouter()
     const pathname = usePathname()
     const [input, setInput] = useState(initialQuery || "")
     const [currFilter, setCurrFilter] = useState<"all" | FilterName>(initialCategory || "all")
     function handleSearch(value: string) {
          setInput(value)
          const params = new URLSearchParams(window.location.search)
          params.set("page", "1")
          if (value.trim()) {
               params.set("query", value.trim())
          } else {
               params.delete("query")
          }
          router.replace(`${pathname}?${params.toString()}`, {
               scroll: false
          })
     }
     function handleFilter(filter: "all" | FilterName) {
          setCurrFilter(filter)
          const params = new URLSearchParams(window.location.search)
          params.set("page", "1")
          if (filter === "all") {
               params.delete("category")
          } else {
               params.set("category", filter)
          }
          router.push(`${pathname}?${params.toString()}`, {
               scroll: false
          })
     }
     return (
          <SiteLayout>
               <section className="w-full min-h-[64dvh] flex items-center justify-center bg-radial-[at_6%_4%] from-[#0069a8] via-background to-background">
                    <div className="flex items-center justify-center flex-col gap-6 w-full max-w-360">
                         <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl 2xl:text-6xl font-semibold">Գիտական փորձեր</h1>
                         <p className="text-lg text-muted-foreground">Այստեղ դուք կուսումնասիրեք լիքը գիտական փորձեր։</p>
                         <SearchField
                              placeholder="Որոնել"
                              value={input}
                              onChange={e => handleSearch(e.target.value)}
                              onClearSearch={() => handleSearch("")}
                              groupClassName="bg-background/50"
                         />
                         <div className="flex items-center gap-2">
                              <Button
                                   variant={currFilter === "all" ? "default" : "outline"}
                                   onClick={() => handleFilter("all")}
                              >
                                   Բոլորը ({allCount})
                              </Button>
                              {Object.entries(FILTER_NAMES).map(([key, value]) => {
                                   const filter = key as FilterName
                                   return (
                                        <Button
                                             key={filter}
                                             variant={currFilter === filter ? "default" : "outline"}
                                             onClick={() => handleFilter(filter)}
                                        >
                                             {value} ({categoryCounts[filter]})
                                        </Button>
                                   )
                              })}
                         </div>
                    </div>
               </section>
               <section className="w-full py-4 px-8 flex justify-center items-center flex-col gap-4 scroll-mt-10">
                    <div className="w-full max-w-360 space-y-4">
                         <div className="flex items-center gap-2">
                              <SelectorField
                                   placeholder="Բարդություն"
                                   items={Object.entries(DIFFICULTIES).map(([key,val])=>({
                                        value: key,
                                        label: val
                                   }))}
                              />
                              <SelectorField
                                   placeholder="Տևողություն"
                                   items={Object.entries(DURATIONS).map(([key,val])=>({
                                        value: key,
                                        label: val
                                   }))}
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
                         <ExperimentsList experiments={experiments}/>
                         <PaginationWithLinks
                              totalCount={totalResults}
                              pageSize={pageSize}
                              page={currPage}
                              navigationMode="router"
                              pageSizeSelectOptions={{
                                   pageSizeOptions: [4,8,16,24,32,48]
                              }}
                         />
                    </div>
               </section>
          </SiteLayout>
     )
}