export interface FooterLink {
  text: string;
  href: string;
}

export interface FooterProps {
  logo?: { src: string; alt?: string };
  sections: Array<{
    title: string;
    links: FooterLink[];
  }>;
  socialIcons?: Array<{
    icon: React.ReactNode;
    href: string;
  }>;
}