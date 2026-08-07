import type { Tag } from "../../../entities/tag";


export type CreateTagForm = Omit<Tag, "id">;

export type CreateTagFormSetters = {
    setName: (newName: string) => void,
    resetForm: () => void,
}