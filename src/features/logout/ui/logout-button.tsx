import { Button } from "../../../shared/ui/button";
import { LogOut } from "lucide-react";
import { useAuthLogout } from "../model/hooks.ts";
import { twMerge } from "tailwind-merge";
import { useNavigate } from "react-router";


interface LogoutButtonProps {
    className?: string;
}

export function LogoutButton({ className }: LogoutButtonProps) {

    const [logout] = useAuthLogout();

    const navigate = useNavigate();

    const handleLogout = async () => {
        await logout();
        navigate("/auth");
    }

    return (
        <Button
            onClick={ handleLogout }
            className={ twMerge(`p-2`, className ?? "") }
        >
            <LogOut
                size={ 20 }
            />
        </Button>
    );
}