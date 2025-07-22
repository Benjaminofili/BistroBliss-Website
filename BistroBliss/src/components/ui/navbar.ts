export interface NavItem {
  text: string;
  href: string;
  icon?: React.ReactNode;
  isActive?: boolean;
}

export interface NavbarProps {
  logo?: { src: string; alt?: string };
  items: NavItem[];
  onItemClick?: (item: NavItem) => void;

}