import { LucideIcon } from "lucide-react";
import { FILTER_NAMES } from "../constants/filters";

export interface SelectType{
     value: string,
     label: string | number,
     Icon?: LucideIcon,
     disabled?: boolean
}
export type FilterName = keyof typeof FILTER_NAMES;
export interface Template {
     slug: string;
     title: string;
     file: string;
     thumbnail: string;
     categories: FilterName[];
     pages: number;
}