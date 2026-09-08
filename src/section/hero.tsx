import { Button } from "@/components/ui/button";
import { PlayCircle } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function HeroSection(){
     return (
          <section id="hero" className="w-full min-h-dvh flex items-center justify-center bg-radial-[at_6%_4%] from-[#0069a8] via-background to-background scroll-mt-5">
               <div className="flex items-center justify-center flex-col gap-6 w-full max-w-360">
                    <Image src="/icon.png" alt="logo-icon" width={100} height={100}/>
                    <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl 2xl:text-6xl font-semibold">Գիտաֆիզիկա</h1>
                    <p className="text-lg text-muted-foreground">Ուսումնասիրեք գիտության, ֆիզիկայի, քիմիայի և ԳՏՃՄ-ի մասին ավելի մանրամասն։</p>
                    <div className="flex items-center gap-2">
                         <Button asChild>
                              <Link href="/#about">Իմանալ ավելին</Link>
                         </Button>
                         <Button variant="secondary" asChild>
                              <Link href="https://youtube.com/playlist?list=PLSI6KSDJfq-J6OxBprsyMjWmmLym2o7T3" target="_blank" rel="noopener noreferrer nofollower">
                                   <PlayCircle/>
                                   Դիտել Փլեյլիստը
                              </Link>
                         </Button>
                    </div>
               </div>
          </section>
     )
}