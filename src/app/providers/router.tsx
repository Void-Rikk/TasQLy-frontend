import { createBrowserRouter, RouterProvider } from "react-router";
import { HomePage } from "../../pages/home-page";


const router = createBrowserRouter([
    {
        path: "/",
        index: true,
        element: <HomePage />
    }
]);

export { router, RouterProvider };