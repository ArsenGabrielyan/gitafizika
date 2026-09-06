import { Button } from "../ui/button";
import {SiYoutube, SiGithub} from "react-icons/si"

export default function SiteFooter(){
     const year = new Date().getFullYear()
     return (
          <footer className="p-4 bg-primary/10 border-t shadow-md flex items-center justify-center">
               <div className="w-full max-w-360 flex items-center justify-between gap-2">
                    <p>&copy; {year} | Բոլոր Իրավունքները պաշտպանված են</p>
                    <div className="flex items-center gap-2">
                         <Button variant="ghost" size="icon-lg">
                              <SiYoutube className="size-5"/>
                         </Button>
                         <Button variant="ghost" size="icon-lg">
                              <SiGithub className="size-5"/>
                         </Button>
                    </div>
               </div>
          </footer>
     )
}