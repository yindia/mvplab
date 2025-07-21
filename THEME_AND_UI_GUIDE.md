# Theme and UI Consistency Guide for MVPLab Projects

This document provides comprehensive instructions for Claude Code to maintain consistent theme and UI patterns across all MVPLab projects.

## Project Architecture

### Technology Stack
- **Framework**: Next.js 14+ with App Router
- **Styling**: Tailwind CSS with custom utility classes
- **Type Safety**: TypeScript
- **Fonts**: Inter (body) & Plus Jakarta Sans (headings)
- **Animations**: CSS keyframes with Tailwind utilities
- **Analytics**: PostHog integration

## Design System

### Color Palette

```typescript
// Core colors defined in tailwind.config.ts
const colors = {
  primary: "#0070f3",     // Blue - primary actions
  secondary: "#111827",   // Dark gray - text
  accent: "#3b82f6",      // Bright blue - highlights
  
  // Extended palette (use Tailwind defaults)
  // Blue shades: blue-50 to blue-900
  // Gray shades: gray-50 to gray-900
  // Indigo shades: indigo-50 to indigo-900
}
```

### Typography System

```css
/* Font hierarchy */
h1, h2, h3, h4, h5, h6 {
  font-family: var(--font-jakarta);  /* Plus Jakarta Sans */
}

body {
  font-family: var(--font-inter);    /* Inter */
}

/* Standard text sizes */
.text-hero: text-5xl md:text-6xl lg:text-7xl font-bold
.text-section: text-4xl md:text-5xl font-bold
.text-heading: text-2xl md:text-3xl font-semibold
.text-subheading: text-xl md:text-2xl font-medium
.text-body: text-base md:text-lg
.text-small: text-sm
```

### Spacing & Layout

```css
/* Container */
.container {
  @apply mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl;
}

/* Section padding */
.section-padding {
  @apply py-24 lg:py-32;
}

/* Standard spacing scale */
- Small gaps: space-y-2, gap-2
- Medium gaps: space-y-4, gap-4  
- Large gaps: space-y-8, gap-8
- XL gaps: space-y-12, gap-12
```

## Component Patterns

### Button Styles

```tsx
// Primary button
<button className="btn-primary">
  Get Started
</button>

// Secondary button  
<button className="btn-secondary">
  Learn More
</button>

// Button structure
.btn-primary {
  @apply relative inline-flex items-center justify-center 
         px-6 py-2.5 text-sm font-semibold text-white 
         transition-all duration-200 
         bg-gradient-to-r from-blue-600 to-indigo-600 
         rounded-full 
         hover:from-blue-700 hover:to-indigo-700 
         focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 
         shadow-lg hover:shadow-xl 
         transform hover:-translate-y-0.5 
         overflow-hidden;
}
```

### Card Components

```tsx
// Standard card
<div className="card">
  <h3 className="text-xl font-semibold mb-4">Card Title</h3>
  <p className="text-gray-600">Card content...</p>
</div>

// 3D card effect
<div className="card-3d">
  {/* Content */}
</div>

// Glass effect card
<div className="glass-effect rounded-2xl p-8">
  {/* Content */}
</div>
```

### Section Structure

```tsx
// Standard section layout
<section className="section-padding">
  <div className="container">
    {/* Section header */}
    <div className="text-center max-w-3xl mx-auto mb-16">
      <h2 className="text-section gradient-text mb-4">
        Section Title
      </h2>
      <p className="text-xl text-gray-600">
        Section description...
      </p>
    </div>
    
    {/* Section content */}
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {/* Grid items */}
    </div>
  </div>
</section>
```

## Animation Library

### Entrance Animations

```css
/* Fade animations */
.animate-fade-in         /* Simple fade */
.animate-fade-in-up      /* Fade + slide up */
.animate-slide-up        /* Slide from bottom */
.animate-scale-in        /* Scale from 0.8 to 1 */

/* Stagger children animations */
.stagger-animation > * {
  animation-delay: calc(0.1s * var(--index));
}
```

### Scroll Animations

```tsx
// Use with intersection observer
<div className="scroll-fade-up">
  {/* Content appears on scroll */}
</div>

<div className="scroll-fade-left">
  {/* Slides from left on scroll */}
</div>

<div className="scroll-scale">
  {/* Scales up on scroll */}
</div>
```

### Interactive Animations

```css
/* Hover effects */
.animate-float          /* Gentle float on hover */
.animate-glow           /* Glow effect */
.animate-wiggle         /* Wiggle animation */
.animate-scale          /* Scale pulse */

/* Continuous animations */
.animate-gradient       /* Gradient shift */
.animate-pulse-slow     /* Slow pulse */
.animate-morph          /* Shape morphing */
```

## Special Effects

### Gradient Effects

```tsx
// Text gradient
<h2 className="gradient-text">
  Gradient Heading
</h2>

// Background gradients
<div className="gradient-aurora">        {/* Aurora effect */}
<div className="gradient-radial">        {/* Radial gradient */}
<div className="gradient-mesh">          {/* Mesh gradient */}
<div className="holographic">            {/* Holographic effect */}

// Gradient border
<div className="gradient-border">
  {/* Content with gradient border */}
</div>
```

### Glass Effects

```tsx
// Light glass
<div className="glass-light rounded-2xl p-8">
  {/* Light theme glass effect */}
</div>

// Dark glass
<div className="glass-dark rounded-2xl p-8">
  {/* Dark theme glass effect */}
</div>

// Standard glass
<div className="glass-effect">
  {/* Default glass effect */}
</div>
```

### Interactive Elements

```tsx
// 3D hover effect
<div className="card-3d">
  {/* Card tilts on hover */}
</div>

// Ripple effect
<button className="ripple">
  {/* Ripple on click */}
</button>

// Glow effect
<div className="glow-effect">
  {/* Glowing shadow */}
</div>
```

## Component Implementation Guidelines

### 1. File Structure
```
components/
├── SectionName.tsx      # Main component
├── AnimatedElements.tsx # Reusable animations
└── UIComponents.tsx     # Shared UI elements
```

### 2. Component Template
```tsx
"use client";

import { useEffect, useState } from "react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

export default function ComponentName() {
  const { ref: sectionRef, isInView } = useScrollAnimation({ threshold: 0.1 });
  
  return (
    <section ref={sectionRef} className="section-padding">
      <div className="container">
        {/* Component content */}
      </div>
    </section>
  );
}
```

### 3. Responsive Design Rules
- Mobile-first approach
- Breakpoints: sm (640px), md (768px), lg (1024px), xl (1280px), 2xl (1536px)
- Use responsive utilities: `text-base md:text-lg lg:text-xl`
- Stack on mobile, grid on desktop: `grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3`

### 4. Performance Considerations
- Use `"use client"` only when needed (interactivity)
- Lazy load heavy components
- Optimize images with Next.js Image
- Minimize animation on mobile

## State Management Patterns

### Local State
```tsx
const [activeTab, setActiveTab] = useState(0);
const [isLoading, setIsLoading] = useState(false);
```

### Animation State
```tsx
const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
const [scrollProgress, setScrollProgress] = useState(0);
```

## Accessibility Guidelines

1. **Semantic HTML**: Use proper heading hierarchy
2. **ARIA Labels**: Add where needed for screen readers
3. **Keyboard Navigation**: Ensure all interactive elements are keyboard accessible
4. **Color Contrast**: Maintain WCAG AA standards
5. **Focus States**: Clear focus indicators on all interactive elements

## Icon Usage

Use emojis for decorative icons:
- 🚀 Launch/Speed
- 💡 Ideas/Innovation  
- 🎯 Goals/Targets
- 📈 Growth/Analytics
- ⚡ Fast/Performance
- 🔧 Tools/Development
- 🎨 Design/Creative
- 🤖 AI/Automation

## Code Quality Standards

### Import Order
```tsx
// 1. React/Next imports
import { useEffect, useState } from "react";
import Image from "next/image";

// 2. Third-party libraries
import { motion } from "framer-motion";

// 3. Local components
import AnimatedCounter from "./AnimatedCounter";

// 4. Hooks
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

// 5. Types/interfaces
import type { ServiceType } from "@/types";
```

### Naming Conventions
- Components: PascalCase (e.g., `HeroSection`)
- Functions: camelCase (e.g., `handleClick`)
- CSS classes: kebab-case (e.g., `btn-primary`)
- Constants: UPPER_SNAKE_CASE (e.g., `MAX_WIDTH`)

## Common Patterns to Follow

### 1. Section Headers
```tsx
<div className="text-center max-w-3xl mx-auto mb-16">
  <h2 className="text-4xl md:text-5xl font-bold gradient-text mb-4">
    Section Title
  </h2>
  <p className="text-xl text-gray-600">
    Supporting description text
  </p>
</div>
```

### 2. Feature Cards
```tsx
<div className="card group hover:scale-105 transition-transform duration-300">
  <div className="text-4xl mb-4">{icon}</div>
  <h3 className="text-xl font-semibold mb-2">{title}</h3>
  <p className="text-gray-600">{description}</p>
</div>
```

### 3. CTA Sections
```tsx
<div className="text-center py-16 px-8 rounded-3xl bg-gradient-to-r from-blue-600 to-indigo-600">
  <h2 className="text-3xl font-bold text-white mb-4">
    Ready to Get Started?
  </h2>
  <button className="btn-primary bg-white text-blue-600 hover:bg-gray-100">
    Start Building
  </button>
</div>
```

## Implementation Checklist

When creating new components or sections:

- [ ] Use consistent spacing with `section-padding` and `container`
- [ ] Apply proper typography hierarchy
- [ ] Include scroll animations where appropriate
- [ ] Ensure responsive design across all breakpoints
- [ ] Add hover states to interactive elements
- [ ] Use gradient effects sparingly for emphasis
- [ ] Maintain color palette consistency
- [ ] Test on both light and dark backgrounds
- [ ] Verify accessibility standards
- [ ] Optimize performance (lazy loading, minimal JS)

## Quick Reference

### Essential Classes
```css
/* Layout */
.container
.section-padding

/* Typography */
.gradient-text
.text-section
.text-heading

/* Components */
.btn-primary
.btn-secondary
.card
.card-3d
.glass-effect

/* Animations */
.animate-fade-in
.animate-slide-up
.scroll-fade-up
.stagger-animation
```

### Color Usage
- Primary actions: `bg-blue-600`, `from-blue-600 to-indigo-600`
- Text: `text-gray-900` (headings), `text-gray-600` (body)
- Backgrounds: `bg-white`, `bg-gray-50`, `bg-gray-100`
- Borders: `border-gray-200`, `border-gray-100`

This guide should be used as the foundation for all UI development in MVPLab projects to ensure consistency and maintainability.