import { useCreateTag } from "../../../entities/tag";
import type { SubmitEventHandler } from "react";
import { useCreateTagForm } from "../model/hooks.ts";
import toast from "react-hot-toast";
import { useTranslation } from "react-i18next";
import { CreateTagFormFields } from "./create-tag-form-fields.tsx";
import { Button } from "../../../shared/ui/button";
import { Separator } from "../../../shared/ui/separator";


export function CreateTagForm() {
    const [createTag, { loading: tagCreating }] = useCreateTag();

    const [form, setters] = useCreateTagForm();

    const { t } = useTranslation("home");

    const handleSubmit: SubmitEventHandler = async (e) => {
        e.preventDefault();

        const promiseForToast = createTag({
            variables: {
                input: {
                    name: form.name
                }
            }
        });
        toast.promise(promiseForToast, {
            loading: t("manageTagsSection.loading"),
            success: t("manageTagsSection.success"),
            error: t("manageTagsSection.error")
        });

        await promiseForToast;

        setters.resetForm();
    }

    return (
        <form
            onSubmit={ handleSubmit }
            className={ `p-4 flex flex-col gap-4` }
        >
            <Separator />
            <CreateTagFormFields
                form={ form }
                setters={ setters }
            />
            <Button
                className={ `uppercase bg-none 
                    ${tagCreating && "animate-pulse"}
                    bg-linear-to-r from-blue-400 via-blue-500 to-blue-600 
                    hover:bg-none hover:bg-linear-to-r hover:from-blue-500 hover:via-blue-600 hover:to-blue-700` }
                disabled={ tagCreating }
            >
                { t("manageTagsSection.createButton") }
            </Button>
        </form>
    );
}