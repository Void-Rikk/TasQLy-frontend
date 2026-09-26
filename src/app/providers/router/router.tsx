import { createBrowserRouter } from "react-router";
import { HomePage } from "../../../pages/home-page";
import { AuthPage } from "../../../pages/auth-page";
import { ProtectedRoute } from "./protected-route.tsx";


const router = createBrowserRouter([
    {
        path: "/",
        index: true,
        element: <ProtectedRoute redirectPath={ "/auth" }><HomePage /></ProtectedRoute>
    },
    {
        path: "/auth",
        element: <AuthPage />
    }
]);

export { router };