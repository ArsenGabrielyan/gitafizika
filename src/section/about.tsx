import Image from "next/image";

export default function AboutSection(){
     return (
          <div className="w-full h-[50dvh] py-4 px-8 flex justify-center items-center">
               <div className="w-full max-w-360 grid grid-cols-2">
                    <Image src="/app-icon.png" alt="Scientific Crafts" width={300} height={300} className="object-contain rounded-lg"/>
                    <div className="space-y-4 w-full">
                         <h2 className="text-xl md:text-2xl lg:text-3xl font-semibold border-b border-primary pb-1 mb-4">Մեր Մասին</h2>
                         <p><span className="font-semibold">Գիտաֆիզիկա</span>ն ինքնուրույն գիտական ​​նախագիծ է, որը ստեղծվել է գիտությունը լայն լսարանի համար գրավիչ և հասանելի դարձնելու համար՝ գործնական փորձերի միջոցով: Այն ներառում է փորձերի տեսանյութեր, մանրամասն ուղեցույցներ և ներբեռնվող ձևանմուշներ, որոնք ընդգրկում են ֆիզիկան, քիմիան, STEM-ը և դրանց հետ կապված թեմաները:</p>
                         <p>Նախագիծը սկիզբ է առել 2018 թվականին՝ որպես գիտական փորձերի տեսաշար, իսկ այժմ ընդլայնվում է նաև որպես ինտերակտիվ վեբ նախագիծ՝ փորձերը, բացատրությունները և ձևանմուշները մեկ վայրում հասանելի դարձնելու համար:</p>
                    </div>
               </div>
          </div>
     )
}