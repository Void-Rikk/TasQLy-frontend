import { type SubmitEventHandler, useState } from "react";
import { ExpanseButton } from "../../../shared/ui/expanse-button";
import { useCreateTaskForm } from "../model/hooks.ts";
import { Button } from "../../../shared/ui/button";
import { CreateTaskFormFields } from "./create-task-form-fields.tsx";
import { useTags } from "../../../entities/tag";
import { useTranslation } from "react-i18next";
import { useCreateTask } from "../../../entities/task";
import toast from "react-hot-toast";
import { Plus } from "lucide-react";
import { Separator } from "../../../shared/ui/separator";

export function CreateTaskForm() {
    const [isOpen, setIsOpen] = useState<boolean>(false);
    const [form, setters] = useCreateTaskForm();

    const { data: tagsData, loading: tagsLoading } = useTags();
    const [createTask, { loading: taskCreating }] = useCreateTask();

    const { t } = useTranslation("home");

    const onSubmit: SubmitEventHandler = async (e) => {
        e.preventDefault();

        const promiseForToast = createTask({
            variables: {
                input: {
                    title: form.title,
                    description: form.description,
                    priority: form.priority,
                    tagIds: Array.from(form.tags)
                }
            }
        });
        toast.promise(promiseForToast, {
            loading: t("newTaskSection.loading"),
            success: t("newTaskSection.success"),
            error: t("newTaskSection.error"),
        })

        await promiseForToast;

        setters.resetForm();
    }

    return (
        <section
            className={ `
            bg-(image:--gradient)
            border-(--border-card) border-t-(--highlight)
            rounded-xl
            shadow-(--shadow-s)
            animate-appearance` }
        >
            <ExpanseButton
                isOpen={ isOpen }
                setIsOpen={ setIsOpen }
                content={ <>
                    <Plus
                        className={ `w-5 h-5 text-(--primary) rounded-md bg-(--bg-light) shadow-(--shadow-s)` }
                    />
                    { t("newTaskSection.header") }
                </> }
            />
            <form // ToDo: нужна декомпозиция
                className={ `p-4 flex flex-col gap-4  ${!isOpen ? "hidden" : ""}` }
                onSubmit={ onSubmit }
            >
                <Separator />
                <CreateTaskFormFields
                    form={ form }
                    setters={ setters }
                    tags={ tagsData ? tagsData.tags : [] }
                    tagsLoading={ tagsLoading }
                />
                <Button
                    className={ `uppercase bg-none 
                    ${taskCreating && "animate-pulse"}
                    bg-linear-to-r from-blue-400 via-blue-500 to-blue-600 
                    hover:bg-none hover:bg-linear-to-r hover:from-blue-500 hover:via-blue-600 hover:to-blue-700` }
                    disabled={ taskCreating }
                >
                    { t("newTaskSection.createButton") }
                </Button>
            </form>
        </section>
    );
}