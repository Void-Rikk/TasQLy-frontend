

const colorStyles = {
    gray: {
        border: 'border-gray-700',
        shadow: 'shadow-gray-800',
        text: 'text-primary-foreground'
    },
    purple: {
        border: 'border-[rgba(124,58,237,0.5)]',
        shadow: 'shadow-[rgba(124,58,237,0.4)]',
        text: 'text-purple-400'
    },
    green: {
        border: 'border-[rgba(0,201,80,0.3)]',
        shadow: 'shadow-[rgba(0,201,80,0.3)]',
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
            className={ `flex flex-col p-4
            bg-muted rounded-xl w-27
            border ${styles.border}
            shadow-[0_2px_10px] ${styles.shadow}` }
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