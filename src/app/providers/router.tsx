import { createBrowserRouter } from "react-router";
import { HomePage } from "../../pages/home-page";
import { AuthPage } from "../../pages/auth-page";


const router = createBrowserRouter([
    {
        path: "/",
        index: true,
        element: <HomePage /> // Todo сделать ProtectedRoute
    },
    {
        path: "/auth",
        element: <AuthPage />
    }
]);

export { router };