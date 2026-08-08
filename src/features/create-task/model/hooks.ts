import { useState } from "react";
import type { TaskPriority } from "../../../entities/task";
import type { CreateTaskForm, CreateTaskFormSetters } from "../lib/types.ts";


const initialFormState = {
    title: "",
    description: "",
    priority: "MEDIUM",
    tags: new Set(),
} satisfies CreateTaskForm;

export function useCreateTaskForm(): [CreateTaskForm, CreateTaskFormSetters] {
    const [form, setForm] = useState<CreateTaskForm>(initialFormState);

    const resetForm = () => {
        setForm(_ => ({ ...initialFormState }));
    }

    const setTitle = (newTitle: string) => {
        setForm(prev => ({
            ...prev,
            title: newTitle
        }))
    }

    const setDescription = (newDescription: string) => {
        setForm(prev => ({
            ...prev,
            description: newDescription
        }));
    }

    const setPriority = (newPriority: TaskPriority) => {
        setForm(prev => ({
            ...prev,
            priority: newPriority
        }))
    }

    const setTags = (tagName: string) => {
        setForm(prev => {
            const newTags = new Set(prev.tags);
            if (newTags.has(tagName)) {
                newTags.delete(tagName);
            }
            else {
                newTags.add(tagName);
            }

            return { ...prev, tags: newTags };
        });
    }

    return [form, {
        resetForm,
        setTitle,
        setDescription,
        setPriority,
        setTags
    }];
}