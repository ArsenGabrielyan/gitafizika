"use client"

import SiteLayout from "@/components/layout"
import PaginationWithLinks from "@/components/pagination-with-links"
import { Button } from "@/components/ui/button"
import { useEffect, useState } from "react"
import SearchField from "@/components/fields/search"
import { FilterName, Template } from "@/lib/types"
import TemplatesList from "@/components/lists/templates"
import { toast } from "sonner"
import { FILTER_NAMES } from "@/lib/constants/filters"
import { usePathname, useRouter } from "next/navigation"

interface TemplatesMainContentProps {
     templates: Template[]
     pageSize: number
     currPage: number
     error?: string
     categoryCounts: Record<FilterName, number>
     totalResults: number
     allCount: number
     initialQuery?: string
     initialCategory?: FilterName
}

export default function TemplatesMainContent({
     templates,
     pageSize,
     currPage,
     error,
     categoryCounts,
     totalResults,
     allCount,
     initialQuery,
     initialCategory
}: TemplatesMainContentProps) {
     const router = useRouter()
     const pathname = usePathname()

     const [input, setInput] = useState(initialQuery || "")
     const [currFilter, setCurrFilter] = useState<"all" | FilterName>(
          initialCategory || "all"
     )

     useEffect(() => {
          if (error) toast.error(error)
     }, [error])

     function handleSearch(value: string) {
          setInput(value)

          // Preserve ALL existing params.
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

          // Preserve query, pageSize, and any future params.
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
               <section className="w-full min-h-[60dvh] flex items-center justify-center bg-radial-[at_6%_4%] from-[#0069a8] via-background to-background">
                    <div className="flex items-center justify-center flex-col gap-6 w-full max-w-360">
                         <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl 2xl:text-6xl font-semibold">
                              Շաբլոններ
                         </h1>

                         <p className="text-lg text-muted-foreground">
                              Հատուկ շաբլոններ՝ փորձեր անելու համար
                         </p>

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

               <section className="w-full py-4 px-8 flex justify-center items-center scroll-mt-10">
                    <div className="w-full max-w-360 space-y-4">
                         <TemplatesList templates={templates} />

                         <PaginationWithLinks
                              totalCount={totalResults}
                              pageSize={pageSize}
                              page={currPage}
                              navigationMode="router"
                              pageSizeSelectOptions={{
                                   pageSizeOptions: [4, 8, 16, 24]
                              }}
                         />
                    </div>
               </section>
          </SiteLayout>
     )
}