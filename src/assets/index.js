// src/assets/index.js - Main assets index file

// This file exports all images and icons used in the BistroBliss application

// Background Images
export { default as aboutImg } from './aboutimg.webp';
export { default as heroBg } from './herobg.webp';

// Menu/Dishes Images (from MenuPage/Dishes folder)
export { default as M1 } from './MenuPage/Dishes/M1.webp';
export { default as M2 } from './MenuPage/Dishes/M2.webp';
export { default as M3 } from './MenuPage/Dishes/M3.webp';
export { default as M4 } from './MenuPage/Dishes/M4.webp';
export { default as M5 } from './MenuPage/Dishes/M5.webp';
export { default as M6 } from './MenuPage/Dishes/M6.webp';
export { default as M7 } from './MenuPage/Dishes/M7.webp';

// Blog Images
export { default as burger } from './blog/buger.webp';
export { default as cheesecake } from './blog/cheesecake.webp';
export { default as chicken } from './blog/chicken.webp';
export { default as fries } from './blog/fries.webp';
export { default as pizza } from './blog/pizza.webp';

// Content Images
export { default as chefImg } from './content/Chefimg.webp';
export { default as foodImg1 } from './content/FoodImg1.webp';
export { default as foodImg2 } from './content/FoodImg2.webp';

// Footer/Social Images
export { default as insta1 } from './footer/insta1.webp';
export { default as insta2 } from './footer/insta2.webp';
export { default as insta3 } from './footer/insta3.webp';
export { default as insta4 } from './footer/insta4.webp';

// Services Images
export { default as birthday } from './services/birthday.webp';
export { default as catering } from './services/catering.webp';
export { default as event } from './services/event.webp';
export { default as wedding } from './services/wedding.webp';

// About Page Images
export { default as cooking } from './Aboutpage/Cooking.webp';
export { default as restaurantFood } from './Aboutpage/Resturantfood.webp';

// Testimonial Images
export { default as andy } from './testimonial/Andy.webp';
export { default as matt } from './testimonial/Matt.webp';
export { default as sophire } from './testimonial/Sophire.webp';

// SVG Icons - grouped for easy access
export { default as cakeIcon } from './svg/Cake.svg';
export { default as cartIcon } from './svg/cart.svg';
export { default as clockIcon } from './svg/clock.svg';
export { default as coffeeIcon } from './svg/coffee.svg';
export { default as couponIcon } from './svg/coupon.svg';
export { default as facebookIcon } from './svg/facebook.svg';
export { default as githubIcon } from './svg/github.svg';
export { default as github2Icon } from './svg/github2.svg';
export { default as glassIcon } from './svg/Glass.svg';
export { default as instagramIcon } from './svg/instagram.svg';
export { default as locationIcon } from './svg/location.svg';
export { default as mailIcon } from './svg/mail.svg';
export { default as phoneIcon } from './svg/phone.svg';
export { default as playIcon } from './svg/play.svg';
export { default as riceIcon } from './svg/Rice.svg';
export { default as twitterIcon } from './svg/twitter.svg';

// Create grouped exports for easier usage
export const backgroundImages = {
    aboutImg,
    heroBg
};

export const menuImages = {
  M1,
  M2,
  M3,
  M4,
  M5,
  M6,
  M7
};

export const blogImages = {
  burger,
  cheesecake,
  chicken,
  fries,
  pizza
};

export const contentImages = {
  chefImg,
  foodImg1,
  foodImg2
};

export const socialImages = {
  insta1,
  insta2,
  insta3,
  insta4
};

export const serviceImages = {
  birthday,
  catering,
  event,
  wedding
};

export const aboutImages = {
  cooking,
  restaurantFood
};

export const testimonialImages = {
  andy,
  matt,
  sophire
};

export const icons = {
  cake: cakeIcon,
  cart: cartIcon,
  clock: clockIcon,
  coffee: coffeeIcon,
  coupon: couponIcon,
  facebook: facebookIcon,
  github: githubIcon,
  github2: github2Icon,
  glass: glassIcon,
  instagram: instagramIcon,
  location: locationIcon,
  mail: mailIcon,
  phone: phoneIcon,
  play: playIcon,
  rice: riceIcon,
  twitter: twitterIcon
};