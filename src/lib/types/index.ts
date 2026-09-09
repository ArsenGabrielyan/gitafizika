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
// TODO: Translate blockquote variants initially into Armenian
export type BlockquoteVariant = "note" | "tip" | "important" | "warning" | "caution"
export interface IBlockquoteBox{
     boxClass: string,
     lineClass: string,
     Icon: LucideIcon,
     iconClass: string
}
export interface ExperimentMetadata {
     title: string
     description: string
     thumbnail: string
     categories: FilterName[]
     tags: string[]
     difficulty: "starter" | "intermediate" | "master"
     duration: "short" | "medium" | "long"
     selfGuided: boolean
     requirements: string[]
     date: string
     editDate?: string
}