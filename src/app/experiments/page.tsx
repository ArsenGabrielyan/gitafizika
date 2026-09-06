import { Metadata } from "next"
import ExperimentsMainContent from "../../contents/experiments"

export const metadata: Metadata = {
     title: "Գիտական փորձեր"
}
export default function ExperimentsMainPage(){
     return (
          <ExperimentsMainContent/>
     )
}