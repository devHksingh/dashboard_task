# 🌍 Trip Dashboard - Travel Analytics Platform

A modern, responsive Progressive Web App (PWA) for managing and analyzing travel bookings, packages, and revenue metrics with real-time insights.

[![React](https://img.shields.io/badge/React-19.2.0-blue.svg)](https://reactjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.9.3-blue.svg)](https://www.typescriptlang.org/)
[![Vite](https://img.shields.io/badge/Vite-7.2.4-purple.svg)](https://vitejs.dev/)
[![TailwindCSS](https://img.shields.io/badge/TailwindCSS-4.1.18-06B6D4.svg)](https://tailwindcss.com/)

## 📋 Table of Contents

- [Overview](#overview)
- [Features](#features)
- [Tech Stack](#tech-stack)
- [Architecture](#architecture)
- [Screenshots](#screenshots)
- [Installation](#installation)
- [Development](#development)
- [Project Structure](#project-structure)
- [Future Enhancements](#future-enhancements)

## 🎯 Overview

Trip Dashboard is a comprehensive analytics platform designed for travel agencies and tour operators to monitor bookings, manage packages, track revenue, and analyze customer retention metrics. Built with modern web technologies and PWA capabilities, it delivers a seamless experience across all devices.

## ✨ Features

### 📊 Core Features
- **Real-time Analytics Dashboard** - Monitor key metrics with interactive charts
- **Booking Management** - Track and manage all travel bookings
- **Package Overview** - Comprehensive view of tour packages with filtering
- **Revenue Tracking** - Detailed revenue analytics with time-based filtering
- **Customer Retention Analytics** - Insights into customer behavior and retention
- **Hot Destinations** - Track trending travel destinations

### 🎨 Design Features
- **Modern Bento Grid Layout** - Professional, visually appealing dashboard design
- **Fully Responsive** - Optimized for mobile, tablet, and desktop devices
- **Dark Theme Support** - Eye-friendly dark mode implementation
- **Interactive Charts** - Built with Recharts for dynamic data visualization
- **Smooth Animations** - Enhanced UX with micro-interactions

### ⚡ Technical Features
- **Progressive Web App (PWA)** - Installable with offline capabilities
- **Optimized Caching Strategy** - Smart data caching with React Query
- **Type Safety** - Full TypeScript implementation
- **Component-Based Architecture** - Reusable, maintainable components
- **Modern UI Components** - Built with shadcn/ui component library

## 🛠 Tech Stack

### Frontend Framework
- **React 19.2.0** - Modern React with latest features
- **TypeScript 5.9.3** - Type-safe development
- **Vite 7.2.4** - Lightning-fast build tool and dev server

### Styling & UI
- **Tailwind CSS 4.1.18** - Utility-first CSS framework
- **shadcn/ui** - High-quality React components
- **Radix UI** - Accessible component primitives
- **Lucide React** - Beautiful icon system

### Data Visualization
- **Recharts 2.15.4** - Composable charting library
- **Chart.js 4.5.1** - Flexible charting solution

### State Management & Data Fetching
- **TanStack React Query 5.90.19** - Powerful data synchronization
- **Offline-First Strategy** - Resilient data management

## 🏗 Architecture

### PWA Architecture

The application follows a Progressive Web App architecture with an offline-first approach:

```typescript
// React Query Configuration (main.tsx)
const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 40 * (60 * 1000),      // 40 minutes
      gcTime: 15 * (60 * 1000),         // 15 minutes cache time
      refetchIntervalInBackground: true, // Background sync
      refetchOnWindowFocus: true,        // Refetch on focus
      refetchOnReconnect: true,          // Refetch when online
      retry: 3,                          // Retry failed requests
      networkMode: 'offlineFirst',       // Offline-first strategy
    }
  }
})
```

### Key Architectural Decisions

1. **Offline-First Data Strategy**
   - Data persists locally and syncs when online
   - Background refetching ensures fresh data
   - Automatic retry on failed requests

2. **Smart Caching**
   - 40-minute stale time for optimal performance
   - 15-minute garbage collection for memory efficiency
   - Query invalidation for real-time updates

3. **Component Architecture**
   - Modular, reusable components
   - Separation of concerns (UI/Logic)
   - Type-safe props with TypeScript

4. **Responsive Design**
   - Mobile-first approach
   - Breakpoint system: mobile (< 768px), tablet (768px - 1024px), desktop (≥ 1024px)
   - Bento grid layout for modern aesthetics

## 📸 Screenshots

### Desktop View (≥ 1024px)
![Desktop Dashboard](./screenshots/desktop-view.png)
*Full-featured dashboard with bento grid layout*

### Tablet View (768px - 1024px)
![Tablet Dashboard](./screenshots/tablet-view.png)
*Optimized 2-column layout for tablets*

### Mobile View (< 768px)
![Mobile Dashboard](./screenshots/mobile-view.png)
*Streamlined single-column layout*

### Sidebar Navigation
![Sidebar](./screenshots/sidebar.png)
*Collapsible navigation with search functionality*

## 🚀 Installation

### Prerequisites
- Node.js 18+ 
- npm or yarn

### Steps

1. **Clone the repository**
```bash
git clone <repository-url>
cd trip-dashboard
```

2. **Install dependencies**
```bash
npm install
# or
yarn install
```

3. **Start development server**
```bash
npm run dev
# or
yarn dev
```

4. **Open browser**
Navigate to `http://localhost:5173`

## 💻 Development

### Available Scripts

```bash
# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview

# Lint code
npm run lint
```

### Environment Setup

Currently using dummy data for UI implementation. For production:

1. Create `.env` file:
```env
VITE_API_BASE_URL=your_api_url
VITE_API_KEY=your_api_key
```

2. Update API configuration in future implementation

## 📁 Project Structure

```
trip-dashboard/
├── src/
│   ├── components/
│   │   ├── dashboard/           # Dashboard-specific components
│   │   │   ├── stats-card.tsx
│   │   │   ├── earnings-chart.tsx
│   │   │   ├── bookings-table.tsx
│   │   │   ├── hot-destinations.tsx
│   │   │   ├── packages-table.tsx
│   │   │   ├── customer-retention.tsx
│   │   │   └── ChartLineInteractive.tsx
│   │   ├── ui/                  # Reusable UI components (shadcn)
│   │   ├── app-sidebar.tsx
│   │   ├── nav-main.tsx
│   │   ├── nav-projects.tsx
│   │   ├── nav-user.tsx
│   │   └── team-switcher.tsx
│   ├── lib/
│   │   └── utils.ts            # Utility functions
│   ├── hooks/
│   │   └── use-mobile.ts       # Custom hooks
│   ├── App.tsx                 # Main app component
│   ├── main.tsx               # Entry point with React Query setup
│   └── index.css              # Global styles & theme
├── public/                     # Static assets
├── package.json
├── tsconfig.json
├── vite.config.ts
└── tailwind.config.js
```

## 🎨 Design System

### Color Palette
- **Primary**: #f7d34a (Yellow)
- **Background**: #232323 (Dark) / #fff8e8 (Light)
- **Card**: #fff8e8 (Light) / #232323 (Dark)
- **Success**: #dff4e6
- **Warning**: #fff0d6

### Typography
- System font stack with fallbacks
- Responsive font sizing
- Consistent spacing scale

### Component Library
Built with **shadcn/ui** components:
- Sidebar, Dialog, Dropdown Menu
- Select, Tooltip, Avatar
- Collapsible, Separator, Label

## 🔮 Future Enhancements

###  API Integration
- [ ] Integrate REST API with Axios
- [ ] Implement React Query mutations
- [ ] Add authentication & authorization
- [ ] Error boundary implementation



## 🔧 React Query Implementation Plan

Future API integration will follow React Query best practices:

```typescript
// Example: Bookings Query Hook
export const useBookings = () => {
  return useQuery({
    queryKey: ['bookings', filters],
    queryFn: () => fetchBookings(filters),
    staleTime: 40 * 60 * 1000,
    select: (data) => transformBookingsData(data),
  })
}

// Example: Mutation with Cache Invalidation
export const useCreateBooking = () => {
  const queryClient = useQueryClient()
  
  return useMutation({
    mutationFn: createBooking,
    onSuccess: () => {
      // Invalidate and refetch
      queryClient.invalidateQueries({ queryKey: ['bookings'] })
    },
  })
}
```

### Caching Strategy
- **Query Keys**: Hierarchical structure for precise invalidation
- **Optimistic Updates**: Immediate UI feedback
- **Background Refetching**: Keep data fresh automatically
- **Cache Time Management**: Balance freshness vs performance

## 📝 Development Notes

### Current Phase: UI Implementation
- Using dummy data for component development
- Focus on responsive design and user experience
- Component architecture finalized
- Design system established

### Next Phase: Backend Integration
- Axios setup with interceptors
- React Query integration with API
- Error handling & loading states
- Authentication flow



## 👤 Author

**[Harshit Kumar Singh]**


---



## ✅ Project Completion Status

### Completed Features
✅ Modern, responsive dashboard design  
✅ PWA architecture implementation  
✅ TypeScript integration  
✅ React Query caching strategy  
✅ Component-based architecture  
✅ Professional UI/UX  
✅ Mobile-first responsive design  
✅ Clean, maintainable code  

### Additional Implementations
✨ Bento grid layout for modern aesthetics  
✨ Dark theme support  
✨ Advanced data visualization  
✨ Offline-first architecture  
✨ Comprehensive component library  

---

**Built with ❤️ using React, TypeScript, and modern web technologies**