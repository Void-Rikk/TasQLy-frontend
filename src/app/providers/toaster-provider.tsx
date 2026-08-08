import { Toaster } from "react-hot-toast";

export function ToasterProvider() {

    return <Toaster
        position={ "bottom-right" }
        toastOptions={{
            duration: 3000,
            style: {
                backgroundImage: "var(--gradient)",
                color: "var(--text)",
                boxShadow: "var(--shadow-s)",
                border: "var(--border-card)",
                borderRadius: "20px"
            },

            success: {
                iconTheme: {
                    primary: "var(--success)",
                    secondary: "white"
                }
            },
            loading: {
                iconTheme: {
                    primary: "white",
                    secondary: "var(--secondary)"
                }
            },
            error: {
                iconTheme: {
                    primary: "var(--danger)",
                    secondary: "white"
                }
            }
        }}
    />
}