import { type ReactNode, useEffect } from "react";
import { useThemeStore } from "../../features/toggle-theme";


interface ThemeProviderProps {
    children: ReactNode;
}

export function ThemeProvider({ children }: ThemeProviderProps) {
    const theme = useThemeStore((state) => state.theme);

    useEffect(() => {
        document.body.classList.toggle("light", theme === "light");
    }, [theme]);

    return <>{ children }</>
}