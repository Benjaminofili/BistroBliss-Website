# Bistro Bliss 🍽️

![License](https://img.shields.io/badge/license-MIT-blue.svg)
![React](https://img.shields.io/badge/React-18.x-61DAFB?logo=react)
![TypeScript](https://img.shields.io/badge/TypeScript-5.x-3178C6?logo=typescript)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-3.x-38B2AC?logo=tailwind-css)

**Bistro Bliss** is a modern, responsive single-page application (SPA) designed for high-end restaurants. Built with performance and aesthetics in mind, it provides a seamless user experience for browsing menus, reading blog posts, and booking tables.

## 📸 Screenshots

![Home Page]
<img width="1855" height="883" alt="image" src="https://github.com/user-attachments/assets/0dcf4ae6-45c1-4366-ab20-4ca2809d0439" />
<img width="1866" height="868" alt="image" src="https://github.com/user-attachments/assets/46bdcb01-a4ca-4bf1-a0a4-702adfdf0913" />
<img width="1597" height="539" alt="image" src="https://github.com/user-attachments/assets/c1c1e651-c2f4-474d-8da7-0bc36a8b701d" />
<img width="1443" height="851" alt="image" src="https://github.com/user-attachments/assets/68b8cc42-e0f6-4675-b8c6-e480366ce3f1" />
<img width="1548" height="846" alt="image" src="https://github.com/user-attachments/assets/7cef3c9f-a2f5-4e93-a928-e2966f20203f" />



## ✨ Features

- **📱 Fully Responsive Design:** Optimized for mobile, tablet, and desktop views using Tailwind CSS.
- **🧭 Multi-Page Navigation:** Smooth client-side routing using `react-router-dom` (Home, About, Menu, Pages, Contact).
- **🍕 Dynamic Menu System:** Categorized menu section (Breakfast, Main Dishes, Drinks, Desserts) with filtering capabilities.
- **📅 Table Reservation:** Interactive booking form with date, time, and party size selection.
- **🚚 Delivery Integration UI:** Showcase of supported delivery partners (UberEats, GrubHub, etc.).
- **✍️ Blog Section:** A dedicated area for culinary articles and news.
- **⭐ Testimonials:** Customer review section to build trust.
- **🎨 Elegant UI/UX:** Custom design system using *Playfair Display* typography and a sophisticated color palette.

## 🛠️ Tech Stack

- **Framework:** [React](https://reactjs.org/) (Vite)
- **Language:** [TypeScript](https://www.typescriptlang.org/)
- **Styling:** [Tailwind CSS](https://tailwindcss.com/)
- **Routing:** [React Router DOM](https://reactrouter.com/)
- **Icons:** [Lucide React](https://lucide.dev/) & [Heroicons](https://heroicons.com/)
- **Assets:** Optimized WebP images and SVG icons

## 🚀 Getting Started

Follow these steps to set up the project locally.

### Prerequisites

- Node.js (v14 or higher)
- npm or yarn

### Installation

1. **Clone the repository**
   ```bash
   git clone [https://github.com/yourusername/bistro-bliss.git](https://github.com/yourusername/bistro-bliss.git)
   cd bistro-bliss

2. **Install dependencies**
   ```bash
   npm install
   # or
   yarn install

 3. **Run the development server**

   ```bash
   npm run dev
   # OR
   yarn dev
   ```

4. **Open your browser**
   Navigate to `http://localhost:5173` (or the port shown in your terminal) to view the app.

## 🔧 Customization

### Changing Branding
You can update the logo and brand name in:
- `src/components/Navbar.tsx`
- `src/components/Footer.tsx`

### Updating Menu Items
Menu data is currently stored locally in `src/components/MenuHero.tsx` (or `MenuSection.tsx`). You can modify the `menuItems` array to change dishes, prices, and images.

### Theming
The project uses Tailwind CSS variables for colors. You can adjust the theme in `src/index.css`:

```css
:root {
  --primary: #FFFFFF;
  --red1: #AD343E;
  --neutral-07: #2c2f24;
  /* ...other variables */
}
```
## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

1. **Fork the Project**

2. **Create your Feature Branch**

   ```bash
   git checkout -b feature/AmazingFeature
   ```
3. **Commit your Changes**

   ```bash
   git commit -m 'Add some AmazingFeature'
    ````
4. **Push to the Branch**

   ```bash
   git push origin feature/AmazingFeature
    ````
5. **Open a Pull Request**

## 📄 License

This project is licensed under the MIT License.

---

Developed with ❤️ for good food and great code.
