

const colorStyles = {
    gray: {
        text: 'text-(--text)'
    },
    purple: {
        text: 'text-(--primary)'
    },
    green: {
        text: 'text-[rgba(94,194,105)]'
    }
} as const;

type ColorKey = keyof typeof colorStyles;

interface StatItemProps {
    label: string,
    value: number,
    color: ColorKey
}

export function StatItem({ label, value, color }: StatItemProps) {
    const styles = colorStyles[color];

    return (
        <div
            className={ `flex flex-col p-4 text-(--text)
            bg-(image:--gradient-hover) rounded-xl w-27
            shadow-(--shadow-s)
            border-(--border-card)
            max-md:w-full` }
        >
            <p
                className={ `text-2xl font-bold ${styles.text}` }
            >
                { value }
            </p>
            <p
                className={ `font-mono tracking-widest text-xs text-muted-foreground` }
            >
                { label }
            </p>
        </div>
    );
}