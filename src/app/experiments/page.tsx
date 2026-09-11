import { Metadata } from "next"
import ExperimentsMainContent from "../../contents/experiments"
import { FilterName } from "@/lib/types";
import { getAllExperiments } from "@/lib/helpers/experiments";
import { FILTER_NAMES } from "@/lib/constants/filters";

export const metadata: Metadata = {
     title: "Գիտական փորձեր"
}

export const revalidate = 3600;

export default async function ExperimentsMainPage({
     searchParams,
}: {
     searchParams: Promise<{
          page?: string;
          pageSize?: string;
          query?: string,
          category?: FilterName
     }>;
}){
     const params = await searchParams;
     const result = await getAllExperiments();

     const allowedPageSizes = [4,8,16,24,32,48];

     const requestedPageSize = Number(params.pageSize);
     const pageSize = allowedPageSizes.includes(requestedPageSize)
          ? requestedPageSize
          : 8;

     const category = params.category && Object.hasOwn(FILTER_NAMES, params.category)
          ? params.category as FilterName
          : undefined

     const query = params.query?.trim().toLowerCase() ?? ""

     const searchResults = result.filter(item =>
          !query || item.title.toLowerCase().includes(query)
     )

     const filteredExperiments = searchResults.filter(item =>
          !category || item.categories.includes(category)
     )

     const categoryCounts = Object.fromEntries(
          Object.keys(FILTER_NAMES).map(key => {
               const category = key as FilterName

               return [
                    category,
                    searchResults.filter(item =>
                         item.categories.includes(category)
                    ).length
               ]
          })
     ) as Record<FilterName, number>

     const totalResults = filteredExperiments.length
     const totalPages = Math.max(1, Math.ceil(totalResults / pageSize))

     const currPage = Math.min(
          Math.max(Number(params.page) || 1, 1),
          totalPages
     )

     const start = (currPage - 1) * pageSize
     const experiments = filteredExperiments.slice(start, start + pageSize)
     return (
          <ExperimentsMainContent
               experiments={experiments}
               pageSize={pageSize}
               currPage={currPage}
               categoryCounts={categoryCounts}
               totalResults={totalResults}
               allCount={searchResults.length}
               initialCategory={category}
               initialQuery={params.query}
          />
     )
}