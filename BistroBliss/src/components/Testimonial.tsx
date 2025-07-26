import React from 'react';
import Sophire from '../assets/testimonial/Sophire.webp'
import Matt from '../assets/testimonial/Matt.webp'
import Andy from '../assets/testimonial/Andy.webp'

interface Testimonial {
  id: string;
  title: string;
  content: string;
  author: {
    name: string;
    location: string;
    avatar: string;
  };
}

interface TestimonialsProps {
  testimonials?: Testimonial[];
  sectionTitle?: string;
  className?: string;
}

const defaultTestimonials: Testimonial[] = [
  {
    id: "1",
    title: "The best restaurant",
    content: "Last night, we dined at place and were simply blown away. From the moment we stepped in, we were enveloped in an inviting atmosphere and greeted with warm smiles.",
    author: {
      name: "Sophire Robson",
      location: "Los Angeles, CA",
      avatar: Sophire
    }
  },
  {
    id: "2", 
    title: "Simply delicious",
    content: "Place exceeded my expectations on all fronts. The ambiance was cozy and relaxed, making it a perfect venue for our anniversary dinner. Each dish was prepared and beautifully presented.",
    author: {
      name: "Matt Cannon",
      location: "San Diego, CA", 
      avatar: Matt
    }
  },
  {
    id: "3",
    title: "One of a kind restaurant",
    content: "The culinary experience at place is first to none. The atmosphere is vibrant, the food - nothing short of extraordinary. The food was the highlight of our evening. Highly recommended.",
    author: {
      name: "Andy Smith",
      location: "San Francisco, CA",
      avatar: Andy
    }
  }
];

const Testimonials: React.FC<TestimonialsProps> = ({
  testimonials = defaultTestimonials,
  sectionTitle = "What Our Customers Say",
  className = ""
}) => {
  return (
    <section className={`py-20 px-8 bg-gray-50 ${className}`}>
      <div className="max-w-7xl mx-auto">
        {/* Section Title */}
        <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif text-center text-gray-800 mb-16">
          {sectionTitle}
        </h2>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial) => (
            <div
              key={testimonial.id}
              className="bg-[var(--neutral-02)] rounded-xl p-10 shadow-sm hover:shadow-md transition-shadow duration-300 border border-gray-100"
            >
              {/* Testimonial Title */}
              <h3 className="text-2xl font-medium text-[var(--red1)] mb-8 leading-relaxed">
                "{testimonial.title}"
              </h3>

              {/* Testimonial Content */}
              <p className="text-gray-600 leading-relaxed mb-8 text-base font-light">
                {testimonial.content}
              </p>

              {/* Separator Line */}
              <div className="border-t border-gray-200 mb-6"></div>

              {/* Author Info */}
              <div className="flex items-center">
                <div className="w-14 h-14 rounded-full overflow-hidden mr-4 flex-shrink-0">
                  <img
                    src={testimonial.author.avatar}
                    alt={testimonial.author.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 text-lg mb-1">
                    {testimonial.author.name}
                  </h4>
                  <p className="text-gray-500 text-base">
                    {testimonial.author.location}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;