import * as z from "zod"
import { SearchSchema } from "../schemas"

export type SearchType = z.infer<typeof SearchSchema>