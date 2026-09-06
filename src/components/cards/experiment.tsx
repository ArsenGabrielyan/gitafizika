import { Button } from "../ui/button";
import { Badge } from "../ui/badge";
import Image from "next/image";
import { Card, CardHeader, CardAction, CardTitle, CardDescription, CardFooter } from "../ui/card";

export default function ExperimentCard(){
     return (
          <Card className="relative mx-auto w-full max-w-sm pt-0">
               <div className="relative">
                    <Image
                         src="/test.png"
                         alt="Experiment Cover"
                         className="aspect-video w-full object-cover brightness-60 grayscale dark:brightness-40"
                         width={1280}
                         height={720}
                    />
                    <div className="absolute inset-0 bg-black/35" />
               </div>
               <CardHeader>
                    <CardAction>
                         <Badge variant="secondary">Փորձի կատեգորիա</Badge>
                    </CardAction>
                    <CardTitle>Փորձի անուն</CardTitle>
                    <CardDescription>Փորձի նկարագրություն</CardDescription>
               </CardHeader>
               <CardFooter>
                    <Button className="w-full">Իմանալ Ավելին</Button>
               </CardFooter>
          </Card>
     )
}