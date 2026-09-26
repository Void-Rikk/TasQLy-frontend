import { useAccessToken } from "../../../entities/auth";
import { Navigate, Outlet } from "react-router";
import type { ReactNode } from "react";


interface ProtectedRouteProps {
    redirectPath?: string;
    children?: ReactNode;
}

export function ProtectedRoute({ redirectPath = "/", children }: ProtectedRouteProps) {
    const isAuth = useAccessToken();

    if (!isAuth) {
        return <Navigate to={ redirectPath } replace />
    }

    return children ? children : <Outlet />;
}