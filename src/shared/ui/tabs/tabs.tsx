
type Tab = {
    id: string;
    displayName: string;
};

interface TabsProps {
     tabs: Tab[];
     activeTab: string;
     setActiveTab: (tabId: string) => void;
}

export function Tabs({ tabs, activeTab, setActiveTab }: TabsProps) {

    return (
        <div
            className={ `flex justify-evenly bg-(--bg) p-2 gap-2 shadow-(--shadow-inset-s) rounded-lg` }
        >
            {
                tabs.map(tab => (
                    <Tab
                        key={ tab.id }
                        name={ tab.displayName }
                        isActive={ tab.id === activeTab }
                        onClick={ () => setActiveTab(tab.id) }
                    />
                ))
            }
        </div>
    );
}

interface TabProps {
    name: string;
    onClick?: () => void;
    isActive: boolean;
}

function Tab({ onClick, name, isActive }: TabProps) {

    return (
        <span
            onClick={ onClick }
            className={ `text-(--text) grow text-center rounded-md py-1
            ${ isActive
                ? "bg-(--bg-light) border-(--border-card) shadow-(--shadow-s)"
                : "hover:bg-(--bg-light)/60 hover:cursor-pointer" 
            }
            transition-all
            ` }
        >
            { name }
        </span>
    );
}