import { create } from "zustand/react";
import { devtools } from "zustand/middleware";


type AuthState = {
    accessToken: string | null;

    setAccessToken: (token: string | null) => void;
};

export const useAuthStore = create<AuthState>()(
    devtools(
        (set) => ({
            accessToken: null,
            setAccessToken: (token) => set({accessToken: token})
        })
    )
);