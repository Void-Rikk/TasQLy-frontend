import type { Tag } from "../../tag";

export type Task = {
    id: string,
    title: string,
    done: boolean
    tags?: Tag[]
}