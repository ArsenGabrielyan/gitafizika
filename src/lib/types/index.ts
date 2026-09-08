import { LucideIcon } from "lucide-react";

export interface SelectType{
     value: string,
     label: string | number,
     Icon?: LucideIcon,
     disabled?: boolean
}

export interface Template {
     slug: string;
     title: string;
     file: string;
     thumbnail: string;
     categories: string[];
     pages: number;
}