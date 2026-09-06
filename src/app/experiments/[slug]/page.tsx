import SingleExperimentContent from "@/app/contents/single-experiment";

interface SingleExperimentPage{
  params: Promise<{slug: string}>
}

export const revalidate = 86400

export default async function SingleExperimentPage({params}: SingleExperimentPage){
     const {slug} = await params
     return (
          <SingleExperimentContent slug={slug}/>
     )
}