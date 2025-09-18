import React, { useState } from 'react';
// Import your images with simple naming
import M1 from '../assets/MenuPage/Dishes/M1.webp';
import M2 from '../assets/MenuPage/Dishes/M2.webp';
import M3 from '../assets/MenuPage/Dishes/M3.webp';
// import M4 from '../assets/MenuPage/Dishes/M4.webp';
import M5 from '../assets/MenuPage/Dishes/M5.webp';
import M6 from '../assets/MenuPage/Dishes/M6.webp';
import M7 from '../assets/MenuPage/Dishes/M7.webp';
import M8 from '../assets/MenuPage/Dishes/M8.webp';


interface MenuItem {
  id: string;
  name: string;
  price: number;
  description: string;
  image: string;
  category: string;
  ingredients?: string[];
  isAvailable?: boolean;
  allergens?: string[];
}

interface MenuCategory {
  id: string;
  name: string;
  slug: string;
  isActive?: boolean;
}

interface MenuSectionProps {
  title?: string;
  subtitle?: string;
  categories?: MenuCategory[];
  menuItems?: MenuItem[];
  onCategoryChange?: (categorySlug: string) => void;
  onMenuItemClick?: (item: MenuItem) => void;
  loading?: boolean;
  error?: string;
}

const MenuSection: React.FC<MenuSectionProps> = ({
  title = "Our Menu",
  subtitle = "We consider all the drivers of change gives you the components you need to change to create a truly happens.",
  categories = [
    { id: '1', name: 'All', slug: 'all', isActive: true },
    { id: '2', name: 'Breakfast', slug: 'breakfast' },
    { id: '3', name: 'Main Dishes', slug: 'main-dishes' },
    { id: '4', name: 'Drinks', slug: 'drinks' },
    { id: '5', name: 'Desserts', slug: 'desserts' }
  ],
  menuItems = [
    {
      id: '1',
      name: 'Fried Eggs',
      price: 9.99,
      description: 'Made with eggs, lettuce, salt, oil and other ingredients.',
      image: M1, // Use M1-M8 naming
      category: 'breakfast',
      isAvailable: true
    },
    {
      id: '2',
      name: 'Hawaiian Pizza',
      price: 15.99,
      description: 'Made with eggs, lettuce, salt, oil and other ingredients.',
      image: M2,
      category: 'main-dishes',
      isAvailable: true
    },
    {
      id: '3',
      name: 'Martinez Cocktail',
      price: 7.25,
      description: 'Made with eggs, lettuce, salt, oil and other ingredients.',
      image: M3,
      category: 'drinks',
      isAvailable: true
    },
    {
      id: '4',
      name: 'Butterscotch Cake',
      price: 20.99,
      description: 'Made with eggs, lettuce, salt, oil and other ingredients.',
      image: M5,
      category: 'desserts',
      isAvailable: true
    },
    {
      id: '5',
      name: 'Mint Lemonade',
      price: 5.89,
      description: 'Made with eggs, lettuce, salt, oil and other ingredients.',
      image: M5,
      category: 'drinks',
      isAvailable: true
    },
    {
      id: '6',
      name: 'Chocolate Icecream',
      price: 18.05,
      description: 'Made with eggs, lettuce, salt, oil and other ingredients.',
      image: M6,
      category: 'desserts',
      isAvailable: true
    },
    {
      id: '7',
      name: 'Cheese Burger',
      price: 12.55,
      description: 'Made with eggs, lettuce, salt, oil and other ingredients.',
      image: M7,
      category: 'main-dishes',
      isAvailable: true
    },
    {
      id: '8',
      name: 'Classic Waffles',
      price: 12.99,
      description: 'Made with eggs, lettuce, salt, oil and other ingredients.',
      image: M8,
      category: 'desserts',
      isAvailable: true
    }
  ],
  onCategoryChange,
  onMenuItemClick,
  loading = false,
  error
}) => {
  const [activeCategory, setActiveCategory] = useState('all');

  const handleCategoryClick = (categorySlug: string) => {
    setActiveCategory(categorySlug);
    onCategoryChange?.(categorySlug);
  };

  const handleMenuItemClick = (item: MenuItem) => {
    onMenuItemClick?.(item);
  };

  const filteredMenuItems = activeCategory === 'all' 
    ? menuItems 
    : menuItems.filter(item => item.category === activeCategory);

  if (error) {
    return (
      <section className="py-16 md:py-20 bg-white">
        <div className="container mx-auto px-4 text-center">
          <div className="text-red-500 text-lg">
            Error loading menu: {error}
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="py-16 md:py-20 bg-white">
      <div className="container mx-auto px-4 md:px-6 lg:px-8 max-w-7xl">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-[#2C2F24] mb-6 font-serif">
            {title}
          </h2>
          <p className="text-[#414536] text-lg max-w-2xl mx-auto leading-relaxed">
            {subtitle}
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-2 md:gap-4 mb-12">
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => handleCategoryClick(category.slug)}
              disabled={loading}
              className={`px-6 py-3 rounded-full font-medium transition-all duration-300 text-sm md:text-base ${
                activeCategory === category.slug
                  ? 'bg-red-500 text-white shadow-lg'
                  : 'bg-gray-100 text-[#2C2F24] hover:bg-gray-200'
              } ${loading ? 'opacity-50 cursor-not-allowed' : ''}`}
            >
              {category.name}
            </button>
          ))}
        </div>

        {/* Loading State */}
        {loading && (
          <div className="text-center py-12">
            <div className="inline-block animate-spin rounded-full h-8 w-8 border-b-2 border-red-500"></div>
            <p className="mt-2 text-gray-600">Loading menu items...</p>
          </div>
        )}

        {/* Menu Items Grid */}
        {!loading && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
            {filteredMenuItems.map((item) => (
              <div 
                key={item.id}
                onClick={() => handleMenuItemClick(item)}
                className="bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-lg transition-all duration-300 cursor-pointer group border border-gray-100"
              >
                {/* Image */}
                <div className="relative overflow-hidden h-48 md:h-52">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    loading="lazy"
                  />
                  {!item.isAvailable && (
                    <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
                      <span className="text-white font-medium">Out of Stock</span>
                    </div>
                  )}
                </div>

                {/* Content */}
                <div className="p-6">
                  {/* Price */}
                  <div className="text-2xl font-bold text-red-500 mb-3">
                    ${item.price.toFixed(2)}
                  </div>

                  {/* Name */}
                  <h3 className="text-xl font-bold text-[#2C2F24] mb-3 group-hover:text-red-500 transition-colors">
                    {item.name}
                  </h3>

                  {/* Description */}
                  <p className="text-[#414536] text-sm leading-relaxed">
                    {item.description}
                  </p>

                  {/* Allergens (if any) */}
                  {item.allergens && item.allergens.length > 0 && (
                    <div className="mt-3 flex flex-wrap gap-1">
                      {item.allergens.map((allergen, index) => (
                        <span 
                          key={index}
                          className="text-xs bg-yellow-100 text-yellow-800 px-2 py-1 rounded"
                        >
                          {allergen}
                        </span>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Empty State */}
        {!loading && filteredMenuItems.length === 0 && (
          <div className="text-center py-12">
            <p className="text-gray-600 text-lg">
              No menu items found for this category.
            </p>
          </div>
        )}
      </div>
    </section>
  );
};

export default MenuSection;