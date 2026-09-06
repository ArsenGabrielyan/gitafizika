import { Metadata } from "next";

export { cn } from "cn"

export const absoluteURL = (path?: string) => {
     const url = process.env.NODE_ENV==="production" ? "http://localhost:3000" : "http://localhost:3000";
     return !path ? url : `${url}${path}`
}

export function createMetaAlternates(url?: string): Metadata["alternates"] {
     return {
          canonical: absoluteURL(url)
     }
}