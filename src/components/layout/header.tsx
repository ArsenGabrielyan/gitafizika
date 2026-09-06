"use client"
import { ChevronDown, Globe } from "lucide-react";
import Image from "next/image";
import { Button } from "../ui/button";
import { useEffect, useState } from "react";
import { cn } from "cn";
import ModeToggler from "../themes/toggler";
import SearchPopup from "../search";

export default function SiteHeader(){
     const [isScrolled, setIsScrolled] = useState(false);
     useEffect(() => {
          const handleScroll = () => {
               setIsScrolled(window.scrollY > 20);
          };
          handleScroll();
          window.addEventListener("scroll", handleScroll);
          return () => window.removeEventListener("scroll", handleScroll);
     }, []);
     return (
          <header className={cn("transition-all fixed top-0 left-0 w-full z-20 flex justify-center items-center px-7",isScrolled ? "bg-card text-card-foreground border-b shadow-md py-3.5" : "py-7")}>
               <nav className="max-w-360 flex justify-between items-center w-full">
                    <Image src={isScrolled ? "/logo-accent.png" : "/logo-dark.png"} alt="logo" width={256} height={40}/>
                    <ul className="flex items-center justify-center gap-2">
                         <li>
                              <Button variant={isScrolled ? "link" : "ghost"} className="text-base">
                                   Գլխավոր
                              </Button>
                         </li>
                         <li>
                              <Button variant={isScrolled ? "link" : "ghost"} className="text-base">
                                   Մեր Մասին
                              </Button>
                         </li>
                         <li>
                              <Button variant={isScrolled ? "link" : "ghost"} className="text-base">
                                   Գիտական Փորձեր
                              </Button>
                         </li>
                         <li>
                              <Button variant={isScrolled ? "link" : "ghost"} className="text-base">
                                   Շաբլոններ
                              </Button>
                         </li>
                    </ul>
                    <div className="flex items-center gap-2">
                         <SearchPopup/>
                         <ModeToggler/>
                         <Button variant="outline" title="Փոխել լեզուն">
                              <Globe/>
                              <ChevronDown/>
                         </Button>
                    </div>
               </nav>
          </header>
     )
}