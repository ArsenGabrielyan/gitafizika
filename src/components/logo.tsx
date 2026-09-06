"use client"
import Image from "next/image";

interface LogoProps{
     width?: number,
     height?: number
}
export default function Logo({width = 500, height = 80}: LogoProps){
     return (
          <Image src="/sci-accent.png" alt="logo" width={width} height={height}/>
     )
}