import { Metadata } from "next";
import TemplatesMainContent from "../../contents/templates";
import { getTemplatesFromCDN } from "@/lib/helpers/data";

export const metadata: Metadata = {
     title: "Շաբլոններ"
}
export default async function TemplatesMainPage({
     searchParams,
}: {
     searchParams: Promise<{
          page?: string;
          pageSize?: string;
     }>;
}){
     const params = await searchParams;
     const result = await getTemplatesFromCDN();

     const allowedPageSizes = [4, 8, 16, 24];

     const requestedPageSize = Number(params.pageSize);
     const pageSize = allowedPageSizes.includes(requestedPageSize)
          ? requestedPageSize
          : 8;

     const totalTemplates = result.data.length;
     const totalPages = Math.max(1, Math.ceil(totalTemplates / pageSize));

     const requestedPage = Number(params.page) || 1;
     const currPage = Math.min(Math.max(requestedPage, 1), totalPages);

     const start = (currPage - 1) * pageSize;
     const templates = result.data.slice(start, start + pageSize);
     return (
          <TemplatesMainContent
               templates={templates}
               totalTemplates={totalTemplates}
               pageSize={pageSize}
               currPage={currPage}
               error={result.error}
          />
     )
}