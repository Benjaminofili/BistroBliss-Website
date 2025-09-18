export interface FoodCardProps {
  imageUrl: string;
  title: string;
  description?: string;
  price: number | string;
  category?: string;
  isFavorite?: boolean;
  onFavoriteToggle?: () => void;
  onClick?: () => void;
}