import { Button } from "@/components/ui/button";
import { PlayCircle } from "lucide-react";
import Image from "next/image";

export default function HeroSection(){
     return (
          <section className="w-full h-dvh flex items-center justify-center bg-radial-[at_6%_4%] from-[#0069a8] via-background to-background">
               <div className="flex items-center justify-center flex-col gap-6 w-full max-w-360">
                    <Image src="/icon.png" alt="logo-icon" width={100} height={100}/>
                    <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl 2xl:text-6xl font-semibold">Գիտաֆիզիկա</h1>
                    <p className="text-lg text-muted-foreground">Ուսումնասիրեք գիտության, ֆիզիկայի, քիմիայի և ԳՏՃՄ-ի մասին ավելի մանրամասն։</p>
                    <div className="flex items-center gap-2">
                         <Button>Իմանալ ավելին</Button>
                         <Button variant="secondary">
                              <PlayCircle/>
                              Դիտել Փլեյլիստը
                         </Button>
                    </div>
               </div>
          </section>
     )
}