import { Tabs } from "../../../shared/ui/tabs";
import { useTranslation } from "react-i18next";


interface AuthFormSwitcherProps {
    activeTab: string;
    setActiveTab: (tabId: string) => void;
}

export function AuthFormSwitcher({ activeTab, setActiveTab }: AuthFormSwitcherProps) {

    const { t } = useTranslation("auth");

    const tabs = [{
        id: "login",
        displayName: t('loginTab'),
    }, {
        id: "register",
        displayName: t("registerTab"),
    }];

    return (
        <Tabs
            tabs={ tabs }
            activeTab={ activeTab }
            setActiveTab={ setActiveTab }
        />
    );
}