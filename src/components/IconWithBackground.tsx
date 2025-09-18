import React from 'react';
import clock from '../assets/svg/clock.svg';
import cart from '../assets/svg/cart.svg';
import tag from '../assets/svg/coupon.svg';
import phone from '../assets/svg/phone.svg';
import mail from '../assets/svg/mail.svg';
import location from '../assets/svg/location.svg';

interface IconWithBackgroundProps {
  /** Background color (any valid CSS color) */
  backgroundColor?: string;
  /** Icon color (any valid CSS color) */
  iconColor?: string;
  /** Size of the circular background */
  size?: 'sm' | 'md' | 'lg' | 'xl';
  /** Icon type - either use iconType for built-in icons or iconSrc for custom images */
  iconType?: 'clock' | 'tag' | 'cart' | 'phone' | 'email' | 'location' | 'check';
  /** Custom icon image source */
  iconSrc?: string;
  /** Alt text for custom icon images */
  iconAlt?: string;
  /** Additional CSS classes */
  className?: string;
}

const IconWithBackground: React.FC<IconWithBackgroundProps> = ({
  backgroundColor = '#AD343E',
  iconColor = '#FFFFFF',
  size = 'md',
  iconType,
  iconSrc,
  iconAlt = 'Icon',
  className = ''
}) => {
  // Size mappings
  const sizeClasses = {
    sm: 'w-8 h-8', // 32px
    md: 'w-10 h-10', // 40px
    lg: 'w-12 h-12', // 48px
    xl: 'w-16 h-16' // 64px
  };

  const iconSizeClasses = {
    sm: 'w-4 h-4',
    md: 'w-5 h-5',
    lg: 'w-6 h-6',
    xl: 'w-8 h-8'
  };

  // Built-in SVG icons
  const getBuiltInIcon = (type: string) => {
    const iconClass = iconSizeClasses[size];
    
    switch (type) {
      case 'clock':
        return (
          <img src={clock} alt="Clock" />
        );
      case 'tag':
        return (
          <img src={tag} alt="Tag" />
        );
      case 'cart':
        return (
         <img src={cart} alt="cart" />
        );
      case 'phone':
        return (
          <img src={phone} alt="Phone" />
        );
      case 'email':
        return (
          <img src={mail} alt="Mail" />
        );
      case 'location':
        return (
          <img src={location} alt="Location" />
        );
      case 'check':
        return (
          <svg className={iconClass} fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
          </svg>
        );
      default:
        return null;
    }
  };

  return (
    <div 
      className={`${sizeClasses[size]} rounded-full flex items-center justify-center flex-shrink-0 ${className}`}
      style={{ backgroundColor }}
    >
      <div style={{ color: iconColor }}>
        {iconSrc ? (
          <img 
            src={iconSrc} 
            alt={iconAlt}
            className={iconSizeClasses[size]}
          />
        ) : iconType ? (
          getBuiltInIcon(iconType)
        ) : (
          // Fallback icon
          <svg className={iconSizeClasses[size]} fill="currentColor" viewBox="0 0 20 20">
            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/>
          </svg>
        )}
      </div>
    </div>
  );
};

export default IconWithBackground;

// Usage Examples:
// const UsageExamples = () => {
//   return (
//     <div className="p-8 space-y-8">
//       <h3 className="text-2xl font-bold mb-4">Icon Component Examples</h3>
      
//       {/* Built-in icons */}
//       <div className="space-y-4">
//         <h4 className="text-lg font-semibold">Built-in Icons:</h4>
//         <div className="flex items-center space-x-4">
//           <IconWithBackground iconType="clock" />
//           <IconWithBackground iconType="tag" backgroundColor="#28a745" />
//           <IconWithBackground iconType="cart" backgroundColor="#17a2b8" size="lg" />
//           <IconWithBackground iconType="phone" backgroundColor="#6f42c1" size="sm" />
//         </div>
//       </div>

//       {/* Different sizes */}
//       <div className="space-y-4">
//         <h4 className="text-lg font-semibold">Different Sizes:</h4>
//         <div className="flex items-center space-x-4">
//           <IconWithBackground iconType="check" size="sm" />
//           <IconWithBackground iconType="check" size="md" />
//           <IconWithBackground iconType="check" size="lg" />
//           <IconWithBackground iconType="check" size="xl" />
//         </div>
//       </div>

//       {/* Custom colors */}
//       <div className="space-y-4">
//         <h4 className="text-lg font-semibold">Custom Colors:</h4>
//         <div className="flex items-center space-x-4">
//           <IconWithBackground 
//             iconType="location" 
//             backgroundColor="#FF6B6B" 
//             iconColor="#FFFFFF" 
//           />
//           <IconWithBackground 
//             iconType="email" 
//             backgroundColor="#4ECDC4" 
//             iconColor="#2C3E50" 
//           />
//           <IconWithBackground 
//             iconType="cart" 
//             backgroundColor="linear-gradient(45deg, #FF6B6B, #4ECDC4)" 
//             iconColor="#FFFFFF" 
//           />
//         </div>
//       </div>

//       {/* With custom image */}
//       <div className="space-y-4">
//         <h4 className="text-lg font-semibold">Custom Image Icon:</h4>
//         <div className="flex items-center space-x-4">
//           <IconWithBackground 
//             iconSrc="https://via.placeholder.com/24x24/FFFFFF/000000?text=★"
//             iconAlt="Star icon"
//             backgroundColor="#FFD700" 
//           />
//         </div>
//       </div>
//     </div>
//   );
// };