"use client"
import Image from "next/image";
import { Button } from "../ui/button";
import { useEffect, useMemo, useState } from "react";
import { cn } from "cn";
import ModeToggler from "../themes/toggler";
import SearchPopup from "../search";
import { useCurrentTheme } from "@/hooks/use-current-theme";
import Link from "next/link";

export default function SiteHeader(){
     const [isScrolled, setIsScrolled] = useState(false);
     const [isHovered, setIsHovered] = useState(false);
     const currTheme = useCurrentTheme()
     useEffect(() => {
          const handleScroll = () => {
               setIsScrolled(window.scrollY > 20);
          };
          handleScroll();
          window.addEventListener("scroll", handleScroll);
          return () => window.removeEventListener("scroll", handleScroll);
     }, []);
     const logo = useMemo(()=>{
          const logo = currTheme==="dark" ? "/logo-dark.png" : "/logo.png";
          return isScrolled ? isHovered ? "/logo-accent.png" : logo : "/logo-dark.png"
     },[isScrolled, currTheme, isHovered])
     return (
          <header className={cn("transition-[background-color,padding,box-shadow,border-color] duration-300 fixed top-0 left-0 w-full z-40 flex justify-center items-center px-7",isScrolled ? "bg-card/75 backdrop-blur-md text-card-foreground border-b shadow-md py-3.5" : "py-7")}>
               <nav className="max-w-360 flex justify-between items-center w-full">
                    <Link href="/">
                         <Image src={logo} alt="logo" width={256} height={40} onMouseEnter={()=>setIsHovered(true)} onMouseLeave={()=>setIsHovered(false)}/>
                    </Link>
                    <ul className="flex items-center justify-center gap-2">
                         <li>
                              <Button variant={isScrolled ? "link" : "ghost"} className="text-base">
                                   <Link href="/#hero">Գլխավոր</Link>
                              </Button>
                         </li>
                         <li>
                              <Button variant={isScrolled ? "link" : "ghost"} className="text-base">
                                   <Link href="/#about">Մեր Մասին</Link>
                              </Button>
                         </li>
                         <li>
                              <Button variant={isScrolled ? "link" : "ghost"} className="text-base">
                                   <Link href="/#experiments">Գիտական Փորձեր</Link>
                              </Button>
                         </li>
                         <li>
                              <Button variant={isScrolled ? "link" : "ghost"} className="text-base">
                                   <Link href="/#templates">Շաբլոններ</Link>
                              </Button>
                         </li>
                    </ul>
                    <div className="flex items-center gap-2">
                         <SearchPopup/>
                         <ModeToggler/>
                    </div>
               </nav>
          </header>
     )
}