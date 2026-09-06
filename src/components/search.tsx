"use client"
import { Search, X } from "lucide-react";
import { Button } from "./ui/button";
import { Popover, PopoverContent, PopoverTrigger } from "./ui/popover";
import { InputGroup, InputGroupAddon, InputGroupButton, InputGroupInput } from "./ui/input-group";
import { ButtonGroup } from "./ui/button-group";
import { useState } from "react";
import { useRouter } from "next/navigation";

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
               <PopoverTrigger>
                    <Button variant="outline" size="icon" title="Որոնել">
                         <Search/>
                    </Button>
               </PopoverTrigger>
               <PopoverContent>
                    <ButtonGroup>
                         <InputGroup>
                              <InputGroupInput placeholder="Որոնել" value={input} onChange={e=>setInput(e.target.value)}/>
                              <InputGroupAddon>
                                   <Search/>
                              </InputGroupAddon>
                              {input.trim()!=="" && (
                                   <InputGroupAddon align="inline-end">
                                        <InputGroupButton size="icon-xs" onClick={()=>setInput("")}>
                                             <X/>
                                        </InputGroupButton>
                                   </InputGroupAddon>
                              )}
                         </InputGroup>
                         <Button onClick={handleSearch} disabled={!input.trim()}>
                              <Search />
                         </Button>
                    </ButtonGroup>
               </PopoverContent>
          </Popover>
     )
}