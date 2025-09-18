import React from 'react';

import burgerImg from '../assets/blog/buger.webp';
import friesImg from '../assets/blog/fries.webp';
import chickenImg from '../assets/blog/chicken.webp';
import cheesecakeImg from '../assets/blog/cheesecake.webp';
import pizzaImg from '../assets/blog/pizza.webp';

interface BlogPost {
  id: string;
  title: string;
  excerpt?: string;
  date: string;
  image: string;
  featured?: boolean;
}

interface BlogSectionProps {
  title?: string;
  posts?: BlogPost[];
  onReadAll?: () => void;
}

const BlogSection: React.FC<BlogSectionProps> = ({
  title = "Our Blog & Articles",
  posts = [
    {
      id: '1',
      title: "The secret tips & tricks to prepare a perfect burger & pizza for our customers",
      excerpt: "Lorem ipsum dolor sit amet consectetur of a adipiscing elitilmim semper adipiscing massa gravida nisi cras enim quis nibholm varius amet gravida ut facilisis neque egestas.",
      date: "January 3, 2023",
      image: burgerImg,
      featured: true
    },
    {
      id: '2',
      title: "How to prepare the perfect french fries in an air fryer",
      date: "January 3, 2023",
      image: friesImg
    },
    {
      id: '3',
      title: "How to prepare delicious chicken tenders",
      date: "January 3, 2023",
      image: chickenImg
    },
    {
      id: '4',
      title: "7 delicious cheesecake recipes you can prepare",
      date: "January 3, 2023",
      image: cheesecakeImg
    },
    {
      id: '5',
      title: "5 great pizza restaurants you should visit this city",
      date: "January 3, 2023",
      image: pizzaImg
    }
  ],
  onReadAll
}) => {
  const featuredPost = posts.find(post => post.featured);
  const regularPosts = posts.filter(post => !post.featured);

  return (
    <section className="py-16 md:py-24 lg:py-32 bg-[var(--neutral-02)]">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        {/* Header */}
        <div className="flex justify-between items-center mb-12">
          <h2 className="text-4xl lg:text-5xl font-serif text-gray-800">
            {title}
          </h2>
          
          <button 
            onClick={onReadAll}
            className="px-8 py-3 bg-[#AD343E] text-white rounded-full font-medium hover:bg-[#8B2A32] transition-colors duration-300"
          >
            Read All Articles
          </button>
        </div>

        {/* Blog Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Featured Post - Left Side */}
          {featuredPost && (
            <div className="bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow duration-300">
              <article className="group cursor-pointer h-full">
                <div className="overflow-hidden">
                  <img
                    src={featuredPost.image}
                    alt={featuredPost.title}
                    className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                </div>
                
                <div className="p-6 space-y-4">
                  <p className="text-gray-500 text-sm">
                    {featuredPost.date}
                  </p>
                  
                  <h3 className="text-xl font-semibold text-gray-800 leading-tight group-hover:text-[#AD343E] transition-colors duration-300">
                    {featuredPost.title}
                  </h3>
                  
                  {featuredPost.excerpt && (
                    <p className="text-gray-600 leading-relaxed text-sm">
                      {featuredPost.excerpt}
                    </p>
                  )}
                </div>
              </article>
            </div>
          )}

          {/* Regular Posts - Right Side in 2x2 Grid */}
          <div className="grid grid-cols-2 gap-4">
            {regularPosts.map((post) => (
              <div key={post.id} className="bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow duration-300">
                <article className="group cursor-pointer h-full">
                  <div className="overflow-hidden">
                    <img
                      src={post.image}
                      alt={post.title}
                      className="w-full h-32 object-cover transition-transform duration-300 group-hover:scale-105"
                    />
                  </div>
                  
                  <div className="p-4 space-y-2">
                    <p className="text-gray-500 text-xs">
                      {post.date}
                    </p>
                    
                    <h3 className="text-sm font-medium text-gray-800 leading-tight group-hover:text-[#AD343E] transition-colors duration-300 line-clamp-2">
                      {post.title}
                    </h3>
                  </div>
                </article>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default BlogSection;