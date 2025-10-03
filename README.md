# Product Listing - E-commerce Product Showcase Application

<div align="center">
 <img src="https://img.shields.io/badge/Product_Listing-Next.js%20E--Commerce-FF6B35?style=for-the-badge" alt="Product Listing" />
 <img src="https://img.shields.io/badge/License-MIT-06B6D4?style=for-the-badge" alt="License" />
 <img src="https://img.shields.io/badge/Next.js-14.2.5+-000000?style=for-the-badge&logo=next.js" alt="Next.js" />
 <img src="https://img.shields.io/badge/TypeScript-5.5.3+-3178C6?style=for-the-badge&logo=typescript" alt="TypeScript" />
</div>

<div align="center">
<img src="https://img.shields.io/badge/Tailwind_CSS-3.4.4+-38B2AC?style=for-the-badge&logo=tailwind-css" alt="Tailwind CSS" />
<img src="https://img.shields.io/badge/Swiper.js-11.1.4+-6332F6?style=for-the-badge&logo=swiper" alt="Swiper" />
<img src="https://img.shields.io/badge/Real--Time_Pricing-Gold_API-FFD700?style=for-the-badge" alt="Gold API" />
</div>

<div align="center">
<img src="https://img.shields.io/badge/Deployment-Vercel-000000?style=for-the-badge&logo=vercel" alt="Vercel" />
<img src="https://img.shields.io/badge/Responsive-Mobile%20%7C%20Tablet%20%7C%20Desktop-4CAF50?style=for-the-badge" alt="Responsive" />
</div>

<div align="center">
<img width="80%" alt="Image" src="https://github.com/user-attachments/assets/37e50f38-b284-4f52-b31d-222b3fe6d36b" /></div>

## Project Overview

<div align="center">
<img width="80%" alt="Image" src="https://github.com/user-attachments/assets/c61de300-eff9-414e-9249-24983c1e0679" /></div>

*Product Listing* is a modern, responsive e-commerce product showcase application built with Next.js 14, TypeScript, and Tailwind CSS. The application demonstrates advanced web development capabilities including real-time gold pricing integration, dynamic product filtering, interactive carousels, and professional-grade UI/UX design patterns.

The project showcases engagement ring products with sophisticated features like color variant selection, popularity-based ratings, dynamic pricing calculations based on live gold market rates, and comprehensive filtering/sorting capabilities. Built with performance and scalability in mind, it implements Next.js App Router, server-side rendering, and modern React patterns.

## Key Features & Functionality

### Dynamic Product Showcase

The core functionality centers around an elegant product carousel with sophisticated interaction patterns and responsive design across all device sizes.

*Product Display Features:*

- *Interactive Carousel* - Swiper.js powered smooth scrolling with touch gestures
- *Color Variant Selector* - Three gold options (Yellow, White, Rose) with instant preview
- *Star Rating System* - Popularity-based ratings displayed with custom SVG stars
- *Responsive Cards* - Modern card-based design with hover effects and shadows
- *High-Quality Images* - Optimized Next.js Image component with lazy loading
- *Dynamic Pricing* - Real-time price calculations based on gold weight and popularity

### Advanced Filtering & Sorting System

Comprehensive filtering panel enabling users to find products matching specific criteria with multiple sorting options.

*Filter Features:*

- *Price Range Filters* - Min/max price boundaries with real-time filtering
- *Popularity Filters* - Min/max popularity score filtering
- *Multi-Criteria Sorting* - Sort by price, popularity, or product name
- *Ascending/Descending Order* - Flexible sorting direction control
- *Reset Functionality* - One-click filter reset to default state
- *Real-Time Updates* - Instant product list updates without page reload

### Real-Time Gold Price Integration

Live gold market price fetching with automatic price calculations ensuring accurate product pricing.

*Pricing Features:*

- *Coinbase PAXG Integration* - Real-time gold-backed token pricing
- *Automatic Conversion* - Troy ounce to gram conversion (31.1035 ratio)
- *Fallback Mechanism* - Default pricing if API unavailable ($68.50/gram)
- *Price Caching* - 1-hour cache for optimal performance
- *Dynamic Calculations* - (popularity + 1) × weight × gold_price formula
- *USD Currency Display* - Professional price formatting with two decimal places

### Color Variant Management

Sophisticated color selection system with visual feedback and instant image switching.

*Color Features:*

- *Three Gold Variants* - Yellow Gold, White Gold, Rose Gold options
- *Visual Color Swatches* - Custom Tailwind CSS color classes (#FEC837, #D9D9D9, #E1A098)
- *Active State Indicators* - Border highlighting and scale animation
- *Accessibility Labels* - Proper ARIA labels for screen readers
- *Synchronized Images* - Instant image swap on color selection
- *Hover Effects* - Interactive feedback for better UX

### Responsive Design System

Mobile-first responsive design ensuring optimal experience across all devices and screen sizes.

*Responsive Features:*

- *Mobile Optimized* - Single column layout for phones (< 640px)
- *Tablet Support* - Two-column grid for tablets (640px - 1024px)
- *Desktop Layout* - Three to four columns for large screens (> 1024px)
- *Adaptive Spacing* - Dynamic padding and margins based on screen size
- *Touch-Friendly* - Large tap targets and swipe gestures on mobile
- *Flexible Typography* - Responsive font scaling using Tailwind classes

## Technical Architecture

### Frontend Implementation

The application leverages Next.js 14 with the new App Router architecture, providing server-side rendering, API routes, and optimized performance out of the box.

*Frontend Technology Stack:*

- *Next.js 14.2.5* - React framework with App Router and server components
- *TypeScript 5.5.3* - Type-safe development with strict mode enabled
- *Tailwind CSS 3.4.4* - Utility-first CSS framework with custom theme
- *Swiper.js 11.1.4* - Modern touch slider with navigation and pagination
- *React 18.3.1* - Latest React with concurrent features
- *Lucide React 0.400.0* - Beautiful and consistent icon library

### API Routes Architecture

Next.js API routes provide serverless backend functionality for product data and gold price fetching.

*API Implementation:*

```typescript
// Products API - /api/products
GET /api/products?minPrice=100&maxPrice=1000&sortBy=price&sortOrder=desc
Response: { products: ProductWithPrice[], goldPrice: number, total: number }

// Gold Price API - /api/gold-price  
GET /api/gold-price
Response: { pricePerGram: number, source: string, timestamp: string }
```

*API Features:*

- *Dynamic Querying* - URL search params for flexible filtering
- *Server-Side Filtering* - Efficient data processing on the server
- *Real-Time Pricing* - Live gold price integration with caching
- *Error Handling* - Graceful fallbacks and error responses
- *Type Safety* - Full TypeScript interfaces for API contracts

### State Management

Client-side state management using React hooks with no external state library required.

*State Architecture:*

- *Local Component State* - React useState for UI state
- *Server State* - Next.js server components and API routes
- *URL State* - Search params for shareable filter states
- *No Redux/Zustand* - Simplified state management with native React
- *Optimistic Updates* - Immediate UI feedback with loading states

### Custom Font Integration

Professional typography using locally hosted Avenir and Montserrat fonts.

*Font System:*

```typescript
// Font Loading - app/fonts.ts
Avenir: Light (300), Book (400), Roman (500), Medium (600), Heavy (700), Black (900)
Montserrat: Light (300), Regular (400), Medium (500), SemiBold (600), Bold (700), Black (900)

// Usage in CSS
--font-avenir: 'Avenir', sans-serif
--font-montserrat: 'Montserrat', sans-serif
```

### Design System & Theming

*Custom Color Palette:*

```typescript
colors: {
  'gold-yellow': '#FEC837',  // Yellow Gold variant
  'gold-rose': '#E1A098',     // Rose Gold variant  
  'gold-white': '#D9D9D9',    // White Gold variant
}
```

*Design Principles:*

- *Modern Minimalism* - Clean card-based UI with subtle shadows
- *Gradient Backgrounds* - from-gray-50 to-gray-100 for depth
- *Consistent Spacing* - 8px grid system throughout
- *Smooth Transitions* - 300ms duration for hover effects
- *Rounded Corners* - 8px border radius for modern feel

## Project Structure

```plaintext
project-listing/
├── public/
│   └── fonts/                  # Custom font files
│       ├── Avenir/             # Avenir font family
│       └── Montserrat/         # Montserrat font family
│
├── src/
│   ├── app/                     # Next.js App Router
│   │   ├── api/                 # API route handlers
│   │   │   ├── products/        # Products API with filtering
│   │   │   │   └── route.ts
│   │   │   └── gold-price/      # Gold price fetching API
│   │   │       └── route.ts
│   │   ├── fonts.ts             # Custom font configuration
│   │   ├── globals.css          # Global styles & Tailwind
│   │   ├── layout.tsx           # Root layout with font providers
│   │   └── page.tsx             # Home page component
│   │
│   ├── components/               # React components
│   │   ├── ProductCard.tsx       # Individual product card
│   │   ├── ProductCarousel.tsx   # Swiper carousel wrapper
│   │   ├── ColorPicker.tsx       # Color variant selector
│   │   ├── FilterPanel.tsx       # Filtering & sorting panel
│   │   └── StarRating.tsx        # Star rating visualization
│   │
│   ├── lib/                      # Utility functions
│   │   └── utils.ts
│   │
│   ├── types.ts                  # TypeScript interfaces
│   └── data/
│       └── products.json         # Product data (8 engagement rings)
│
├── .env.local                    # Environment variables (optional)
├── .gitignore                    # Git ignore patterns
├── next.config.js                # Next.js configuration
├── package.json                  # Dependencies & scripts
├── tsconfig.json                 # TypeScript configuration
├── tailwind.config.ts            # Tailwind CSS customization
├── postcss.config.js             # PostCSS configuration
└── README.md                     # Project documentation
```


## Installation & Setup

### Prerequisites

- *Node.js* (v18.0.0 or higher) 
- *npm* or *yarn* - Package manager
- *Git* - Version control system

### Quick Start

```bash
# Clone the repository
git clone <repository-url>
cd product-listing
```

## Install dependencies
npm install

## Run development server
npm run dev

## Open browser
Navigate to http://localhost:3000


### Environment Configuration (Optional)

Create .env.local for optional API key:


## Optional: Alpha Vantage API key for gold price
GOLD_API_KEY=your_api_key_here

## Optional: Custom API base URL
NEXT_PUBLIC_BASE_URL=http://localhost:3000


*Note:* The application works without API keys using the Coinbase PAXG fallback with a default price if the API fails.

### Development Commands

```bash
# Development server with hot reload
npm run dev

# Production build
npm run build

# Start production server
npm start

# Run linter
npm run lint

# Type checking
npm run type-check
```

### Environment Variables for Production

Configure in your deployment platform:

- GOLD_API_KEY - Optional gold price API key
- NEXT_PUBLIC_BASE_URL - Production URL

## API Documentation

### Products API

*Endpoint:* GET /api/products

*Query Parameters:*

- minPrice (number) - Minimum price filter
- maxPrice (number) - Maximum price filter
- minPopularity (number) - Minimum popularity score (0-1)
- maxPopularity (number) - Maximum popularity score (0-1)
- sortBy (string) - Sort field: price, popularity, name
- sortOrder (string) - Sort direction: asc, desc

*Example Request:*

```bash
GET /api/products?minPrice=200&maxPrice=800&sortBy=price&sortOrder=asc
```

*Response:*

```json
{
  "products": [
    {
      "id": "product-1",
      "name": "Engagement Ring 1",
      "popularityScore": 0.85,
      "weight": 2.1,
      "price": 256.87,
      "images": {
        "yellow": "https://...",
        "rose": "https://...",
        "white": "https://..."
      }
    }
  ],
  "goldPrice": 68.50,
  "total": 8,
  "filters": { "minPrice": 200, "maxPrice": 800 }
}
```

### Gold Price API

*Endpoint:* GET /api/gold-price

*Response:*

json
{
  "pricePerGram": 68.50,
  "source": "coinbase-paxg",
  "timestamp": "2024-01-15T10:30:00.000Z"
}


*Data Sources:*

1. *Primary:* Coinbase PAXG (gold-backed cryptocurrency)
1. *Fallback:* Fixed price ($68.50/gram)

## Performance & Optimization

### Performance Features

- *Server-Side Rendering (SSR)* - Fast initial page load
- *Image Optimization* - Next.js Image component with lazy loading
- *Code Splitting* - Automatic route-based code splitting
- *Font Optimization* - Local font hosting with font-display: swap
- *CSS Purging* - Tailwind CSS tree-shaking in production
- *API Caching* - 1-hour revalidation for gold price data

### Lighthouse Scores Target

- *Performance:* 95+
- *Accessibility:* 100
- *Best Practices:* 95+
- *SEO:* 100

## Browser Compatibility

*Supported Browsers:*

- Chrome 90+
- Firefox 88+
- Safari 14+
- Edge 90+
- Opera 76+

*Mobile Support:*

- iOS Safari 14+
- Chrome Mobile 90+
- Samsung Internet 14+

## License

This project is licensed under the MIT License - see the <LICENSE> file for details.

## Acknowledgments

- *Next.js Team* - Amazing React framework
- *Vercel* - Seamless deployment platform
- *Tailwind Labs* - Utility-first CSS framework
- *Swiper* - Modern touch slider library
- *Coinbase* - Gold price data via PAXG

-----

*Tech Stack:* Next.js 14 • TypeScript • Tailwind CSS • Swiper.js • React 18 • Vercel

