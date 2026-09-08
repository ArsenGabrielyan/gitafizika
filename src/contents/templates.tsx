"use client"
import SiteLayout from "@/components/layout"
import PaginationWithLinks from "@/components/pagination-with-links"
import { Button } from "@/components/ui/button"
import { useState } from "react"
import SearchField from "@/components/fields/search"
import { Template } from "@/lib/types"
import TemplatesList from "@/components/lists/templates"

interface TemplatesMainContentProps{
     templates: Template[]
}
export default function TemplatesMainContent({templates}: TemplatesMainContentProps){
     const [input, setInput] = useState("")
     return (
          <SiteLayout>
               <section className="w-full min-h-[64dvh] flex items-center justify-center bg-radial-[at_6%_4%] from-[#0069a8] via-background to-background">
                    <div className="flex items-center justify-center flex-col gap-6 w-full max-w-360">
                         <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl 2xl:text-6xl font-semibold">Շաբլոններ</h1>
                         <p className="text-lg text-muted-foreground">Հատուկ շաբլոններ՝ փորձեր անելու համար</p>
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
               <section className="w-full py-4 px-8 flex justify-center items-center scroll-mt-10">
                    <div className="w-full max-w-360 space-y-4">
                         <TemplatesList templates={templates}/>
                         <PaginationWithLinks
                              totalCount={32}
                              pageSize={8}
                              page={1}
                              navigationMode="router"
                              pageSizeSelectOptions={{
                                   pageSizeOptions: [8,16,24]
                              }}
                         />
                    </div>
               </section>
          </SiteLayout>
     )
}