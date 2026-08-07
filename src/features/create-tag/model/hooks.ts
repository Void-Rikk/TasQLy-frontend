import { useState } from "react";
import type { CreateTagForm, CreateTagFormSetters } from "../lib/types.ts";


const initialFormState: CreateTagForm = {
    name: "",
};

export function useCreateTagForm(): [CreateTagForm, CreateTagFormSetters] {
    const [form, setForm] = useState<CreateTagForm>(initialFormState);

    const resetForm = () => {
        setForm(initialFormState);
    }

    const setName = (newName: string) => {
        setForm(prev => ({
            ...prev,
            name: newName
        }));
    }

    return [ form, {
        setName,
        resetForm
    }];
}