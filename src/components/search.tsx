"use client"
import { Search } from "lucide-react";
import { Button } from "./ui/button";
import { Popover, PopoverContent, PopoverTrigger } from "./ui/popover";
import { ButtonGroup } from "./ui/button-group";
import { useState } from "react";
import { useRouter } from "next/navigation";
import * as z from "zod"
import SearchField from "./fields/search";

export const SearchSchema = z.object({
     query: z.string().max(200,"Որոնման հարցումը շատ երկար է").trim()
})

export default function SearchPopup(){
     const [input, setInput] = useState("")
     const router = useRouter();
     function handleSearch() {
          const query = input.trim();
          if (!query) return;
          const params = new URLSearchParams({ query });
          router.push(`/experiments?${params.toString()}`);
     }
     return (
          <Popover>
               <PopoverTrigger asChild>
                    <Button variant="outline" size="icon" title="Որոնել">
                         <Search/>
                    </Button>
               </PopoverTrigger>
               <PopoverContent>
                    <ButtonGroup>
                         <SearchField
                              placeholder="Որոնել"
                              value={input}
                              onChange={e=>setInput(e.target.value)}
                              onClearSearch={()=>setInput("")}
                         />
                         <Button onClick={handleSearch} disabled={!input.trim()}>
                              <Search />
                         </Button>
                    </ButtonGroup>
               </PopoverContent>
          </Popover>
     )
}