export interface ServiceItem {
  id: string;
  title: string;
  description: string;
  image: string; 
}

export interface ServicesProps {
  title?: string;
  services?: ServiceItem[];
}