import { Button } from "../ui/button";
import { Badge } from "../ui/badge";
import Image from "next/image";
import { Card, CardHeader, CardAction, CardTitle, CardDescription, CardFooter } from "../ui/card";

export default function TemplateCard(){
     return (
          <Card className="relative mx-auto w-full max-w-sm pt-0">
               <div className="relative">
                    <Image
                         src="/test.png"
                         alt="Template cover"
                         className="aspect-retro-vertical w-full object-cover brightness-60 grayscale dark:brightness-40"
                         width={1280}
                         height={720}
                    />
                    <div className="absolute inset-0 bg-black/35" />
               </div>
               <CardHeader>
                    <CardAction>
                         <Badge variant="secondary">Փորձ</Badge>
                    </CardAction>
                    <CardTitle>Շաբլոնի անուն</CardTitle>
                    <CardDescription>Շաբլոնի նկարագրություն</CardDescription>
               </CardHeader>
               <CardFooter>
                    <Button className="w-full">Ներբեռնել</Button>
               </CardFooter>
          </Card>
     )
}