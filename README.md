# FlowSync Landing Page

A modern, responsive landing page for FlowSync - an AI-powered productivity platform that helps teams collaborate, automate workflows, and achieve more together.

## Features

### Hero Section
- Compelling headline and subtext
- Two call-to-action buttons (Start Free Trial & Watch Demo)
- Live statistics counter showing platform metrics
- Gradient accent design with modern typography

### Features Section
- 6 feature cards highlighting key platform capabilities:
  - AI-Powered Automation
  - Real-Time Collaboration
  - Smart Task Management
  - Advanced Analytics
  - Seamless Integrations
  - Enterprise Security
- Icon-based visual hierarchy
- Responsive grid layout (1-3 columns)

### Testimonials Section
- 3 customer testimonials with authentic reviews
- Customer photos, names, roles, and companies
- 5-star rating display
- Card-based layout with hover effects

### Pricing Section
- 3 pricing tiers (Starter, Professional, Enterprise)
- Monthly pricing display
- Feature comparison lists
- Clear call-to-action buttons
- "Most Popular" badge on recommended plan

### Footer
- Product, Company, Resources, and Legal navigation links
- Social media icons (Twitter, LinkedIn, GitHub, YouTube)
- Copyright information
- Fully responsive design

## Tech Stack

- **Framework:** Next.js(App Router)
- **Styling:** Tailwind CSS
- **UI Components:** shadcn/ui
- **Icons:** Lucide React
- **Typography:** Geist Sans & Geist Mono fonts
- **Language:** TypeScript

## Project Structure

```
 ├── app/
 │   ├── layout.tsx          # Root layout with fonts and metadata
 │   ├── page.tsx            # Main landing page composition
 │   └── globals.css         # Global styles and design tokens
 │
 ├── components/
 │   ├── header.tsx          # Navigation header
 │   ├── hero.tsx            # Hero section with CTA
 │   ├── features.tsx        # Features showcase
 │   ├── testimonials.tsx    # Customer testimonials
 │   ├── pricing.tsx         # Pricing tiers
 │   └── footer.tsx          # Footer navigation
 │
 └── public/
     └── *.png               # Customer testimonial images
```

## Design System

### Color Palette
The landing page uses a sophisticated dark theme with the following key colors:
- **Primary:** Deep blue (#1e40af to #3b82f6)
- **Accent:** Cyan/Teal (#06b6d4)
- **Background:** Dark slate (#0f172a, #1e293b)
- **Neutrals:** Gray scale for text and borders

### Typography
- **Headings:** Geist Sans (bold weights)
- **Body:** Geist Sans (regular weight)
- **Code/Monospace:** Geist Mono

### Layout
- Mobile-first responsive design
- Flexbox for component layouts
- CSS Grid for feature and pricing cards
- Consistent spacing using Tailwind's spacing scale

## Getting Started

### Prerequisites
- Node.js installed
- npm, yarn, or pnpm package manager

### Installation

1. Install dependencies:
\`\`\`bash
npm install
# or
yarn install
# or
pnpm install
\`\`\`

2. Run the development server:
\`\`\`bash
npm run dev
# or
yarn dev
# or
pnpm dev
\`\`\`

3. Open [https://flow-sync-sage.vercel.app/](https://flow-sync-sage.vercel.app/) in your browser

### Change Content
- **Hero text:** Edit `components/hero.tsx`
- **Features:** Update the features array in `components/features.tsx`
- **Testimonials:** Modify testimonials data in `components/testimonials.tsx`
- **Pricing:** Adjust pricing tiers in `components/pricing.tsx`

## Deployment

### Deploy to Vercel (Recommended)
1. Push your code to GitHub
2. Import your repository on [Vercel](https://vercel.com)
3. Vercel will automatically detect Next.js and deploy

## Performance Optimizations

- Server-side rendering with Next.js App Router
- Optimized images using Next.js Image component
- CSS-in-JS with Tailwind for minimal bundle size
- Font optimization with next/font
- Semantic HTML for better SEO

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## Credits

- UI Components: [shadcn/ui](https://ui.shadcn.com)
- Icons: [Lucide](https://lucide.dev)
- Framework: [Next.js](https://nextjs.org)
- Styling: [Tailwind CSS](https://tailwindcss.com)
