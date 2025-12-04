# Siyaphusha Consortium Corporate Website

## Overview

This is a production-ready corporate website for Siyaphusha Consortium (PTY) Ltd, a South African mining and construction services company based in Mpumalanga. The application showcases the company's mining operations, services, community impact, and operational routes through a modern, professional web interface.

The website serves as a digital flagship for the company, featuring interactive maps, project galleries, service showcases, and community initiatives. It's designed to attract B2B clients in the mining and heavy industrial sectors while maintaining a clean, authoritative corporate presence.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Architecture

**Framework & Build System**
- **React 18** with TypeScript for type-safe component development
- **Vite** as the build tool and development server, providing fast hot module replacement
- **Wouter** for client-side routing (lightweight alternative to React Router)
- **TanStack Query (React Query)** for server state management and data fetching

**UI Component System**
- **Shadcn/ui** component library with Radix UI primitives providing accessible, unstyled components
- **Tailwind CSS v4** for utility-first styling with custom theme configuration
- **Plus Jakarta Sans** and **Inter** fonts for professional typography
- Design system configured through `components.json` with "new-york" style variant
- All components use sharp corners (no border radius) for industrial aesthetic

**Key Features**
- Interactive mapping with **React Leaflet** showing operational routes across Mpumalanga
- Animated statistics counters using **react-countup**
- Form validation with **React Hook Form** and **Zod** schemas
- Custom toast notifications for user feedback
- Responsive design with mobile-first approach

### Backend Architecture

**Server Framework**
- **Express.js** server running on Node.js with ES modules
- Environment-based configuration (development vs production modes)
- Serves static files in production, integrates with Vite middleware in development

**Development vs Production**
- Development: Vite dev server middleware integrated for hot reloading
- Production: Static file serving from `dist/public` directory
- Port configuration via `PORT` environment variable (defaults to 5000)

### Data Storage & Schema

**Database**
- **PostgreSQL** via Neon serverless driver (`@neondatabase/serverless`)
- **Drizzle ORM** for type-safe database operations and migrations
- Schema defined in `shared/schema.ts` for code sharing between client and server

**Current Schema**
- `users` table with UUID primary keys, username, and password fields
- Zod schemas for runtime validation (`insertUserSchema`)
- Migration files stored in `./migrations` directory

**Note**: The application currently has minimal database usage. The schema appears to be scaffolding for future authentication features rather than core business functionality.

### External Dependencies

**Third-Party Services**
- **Neon Database** (PostgreSQL-compatible serverless database)
- Google Fonts API for typography (Plus Jakarta Sans, Inter)

**Asset Management**
- Local image assets stored in `attached_assets/` directory
- Video content for hero section background
- Company logos for client trust section (Thungela, Glencore, Transnet, Eskom, Anglo American)

**Maps & Geolocation**
- **Leaflet** for interactive mapping functionality
- Coordinates for mining locations across Mpumalanga region
- Custom markers and route polylines

**Deployment Infrastructure**
- Configured for Vercel deployment (`vercel.json`)
- Replit development environment support with custom plugins
- Static asset caching with long-term cache headers (31536000s for assets)
- SPA routing handled via Vercel rewrites

**Form Handling**
- Contact forms configured to simulate email sending to `eddienkuna735@gmail.com`
- No actual email service integration (simulated via toast notifications)

### Design System Principles

**Color Palette**
- Monochromatic scheme: Black (`#000000`), White (`#FFFFFF`), and grayscale variations
- No accent colors for minimalist industrial aesthetic
- Custom CSS variables defined in `index.css` for theming

**Typography Hierarchy**
- `--font-heading`: Plus Jakarta Sans (weights: 400, 500, 600, 700, 800)
- `--font-sans`: Inter (weights: 300, 400, 500, 600)
- Font weight and size variations create visual hierarchy without color changes

**Component Patterns**
- All interactive elements use sharp corners (border-radius: 0)
- Hover and focus states use subtle shadows and opacity changes
- Consistent spacing scale through Tailwind utilities
- Accessible components via Radix UI primitives