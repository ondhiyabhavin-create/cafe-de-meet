# Cafe De Meet - Premium Cafe Website

A beautiful, modern cafe website built with Next.js 14, featuring smooth animations, premium interactions, and a fully responsive design.

## Features

- 🎨 **Premium Design** - Rounded corners, elegant typography, and a warm color palette
- 🌙 **Dark Mode** - Toggle between light and dark themes
- 🛒 **Shopping Cart** - Full cart functionality with persistent storage
- 📱 **Fully Responsive** - Optimized for all devices
- ✨ **Smooth Animations** - Framer Motion animations throughout
- 🎯 **Custom Cursor** - Interactive cursor on desktop
- 📊 **Scroll Progress** - Visual progress indicator
- 🔍 **Menu Search** - Search and filter menu items
- 🖼️ **Gallery Lightbox** - Beautiful image gallery with lightbox
- 💬 **Testimonials** - Customer reviews carousel
- 📍 **Interactive Map** - Google Maps integration
- 📧 **Contact Form** - Fully functional contact form

## Tech Stack

- **Next.js 14** - React framework with App Router
- **TypeScript** - Type safety
- **Tailwind CSS** - Utility-first CSS
- **Framer Motion** - Animation library
- **Lenis** - Smooth scrolling
- **Zustand** - State management
- **Lucide React** - Icon library

## Getting Started

1. Install dependencies:
```bash
npm install
```

2. Run the development server:
```bash
npm run dev
```

3. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Project Structure

```
cafe-de-meet/
├── app/
│   ├── layout.tsx       # Root layout
│   ├── page.tsx         # Home page
│   └── globals.css      # Global styles
├── components/
│   ├── Navbar.tsx       # Navigation bar
│   ├── Hero.tsx         # Hero section
│   ├── Features.tsx     # Features section
│   ├── Menu.tsx         # Menu section
│   ├── About.tsx        # About section
│   ├── Gallery.tsx      # Gallery section
│   ├── Testimonials.tsx # Testimonials
│   ├── Contact.tsx      # Contact section
│   ├── Footer.tsx       # Footer
│   ├── CartDrawer.tsx   # Shopping cart
│   ├── CustomCursor.tsx # Custom cursor
│   ├── SmoothScroll.tsx # Smooth scroll
│   ├── ScrollProgress.tsx # Scroll progress
│   └── DarkModeProvider.tsx # Dark mode provider
├── store/
│   ├── useCart.ts       # Cart store
│   └── useDarkMode.ts   # Dark mode store
├── data/
│   └── menuItems.ts     # Menu data
└── public/              # Static assets
```

## Design System

### Colors
- Primary Brown: `#8B4513`
- Secondary Brown: `#D2691E`
- Gold Accent: `#FFD700`
- Cornsilk Background: `#FFF8DC`
- Dark Brown: `#3E2723`

### Typography
- Display: Playfair Display
- Headings: Cormorant Garamond
- Body: Inter
- Accent: Montserrat

### Border Radius
- Small: 12px
- Medium: 20px
- Large: 24px
- XLarge: 32px

## Build

```bash
npm run build
```

## License

MIT
