export interface HeroSectionProps {
  title: string;
  subtitle?: string;
  backgroundImageUrl?: string;
  ctaButtons?: Array<{
    label: string;
    variant?: 'primary' | 'secondary';
    onClick: () => void;
  }>;
}