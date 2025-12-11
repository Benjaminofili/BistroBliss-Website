# Bistro Bliss 🍽️

![License](https://img.shields.io/badge/license-MIT-blue.svg)
![React](https://img.shields.io/badge/React-18.x-61DAFB?logo=react)
![TypeScript](https://img.shields.io/badge/TypeScript-5.x-3178C6?logo=typescript)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-3.x-38B2AC?logo=tailwind-css)

**Bistro Bliss** is a modern, responsive single-page application (SPA) designed for high-end restaurants. Built with performance and aesthetics in mind, it provides a seamless user experience for browsing menus, reading blog posts, and booking tables.

## 📸 Screenshots

![Home Page](./src/assets/herobg.webp)
*(Note: Replace this line with actual screenshots of your application)*

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

   Install dependencies

Bash

npm install
# or
yarn install
Start the development server

Bash

npm run dev
# or
yarn dev
Open your browser Visit http://localhost:5173 (or the port shown in your terminal).

📂 Project Structure
Plaintext

src/
├── assets/          # Images, SVGs, and global assets
├── components/      # Reusable UI components (Navbar, Footer, Buttons, etc.)
│   └── ui/          # TypeScript interfaces/types for components
├── pages/           # Main page views (Home, About, Menu, Booking)
├── App.tsx          # Main application component & Routing setup
├── main.tsx         # Entry point
└── index.css        # Global styles & Tailwind directives
🎨 Design System
The project uses a custom color palette defined in src/index.css:

Primary: White & Neutral tones

Accent: #AD343E (Red)

Typography: Playfair Display (Headings) & Global Sans (Body)

🤝 Contributing
Contributions are welcome! Please feel free to submit a Pull Request.

Fork the project

Create your feature branch (git checkout -b feature/AmazingFeature)

Commit your changes (git commit -m 'Add some AmazingFeature')

Push to the branch (git push origin feature/AmazingFeature)

Open a Pull Request

📄 License
This project is licensed under the MIT License
