export interface AboutUsProps {
  title?: string;
  description?: string[];
  contactInfo?: {
    phone: string;
    email: string;
    address: string;
  };
  image?: string;
  imageAlt?: string;
  showButton?: boolean;
}