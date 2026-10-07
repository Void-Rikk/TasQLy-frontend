

export function NoTasksMessage() {

    return (
        <div
            className={ `
            py-10
            flex justify-center
            bg-(--bg)/70
            shadow-(--shadow-s)
            border-(--border-card) border-t-(--highlight)
            rounded-xl` }
        >
            <p
                className={ `text-(--text-muted) font-mono text-2xl, uppercase` }
            >
                no tasks found
            </p>
        </div>
    );
}