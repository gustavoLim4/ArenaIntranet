export interface SubMenuItem {
    icon: React.ReactNode;
    text: string;
    path: string;
};

export interface MenuItem {
    text: string;
    icon: React.ReactNode;
    path?: string;
    expandable?: boolean;
    items?: SubMenuItem[];
};

export interface MenuGroup {
    title: string;
    items: MenuItem[];
};
