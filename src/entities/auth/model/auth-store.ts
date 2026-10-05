import { create } from "zustand/react";
import { devtools, persist } from "zustand/middleware";


type AuthState = {
    accessToken: string | null;

    setAccessToken: (token: string | null) => void;
};

export const useAuthStore = create<AuthState>()(
    devtools(
        persist(
            (set) => ({
                accessToken: null,
                setAccessToken: (token) => set({accessToken: token})
            }),
            { name: "accessToken" }
        )
    )
);