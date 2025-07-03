# 🧾 InvoiceGen - Professional Invoice Generator

A beautiful, modern invoice generator built with Next.js, Tailwind CSS, and shadcn/ui. Create professional invoices in seconds with automatic calculations, tax handling, and PDF export.

![InvoiceGen Demo](https://img.shields.io/badge/Demo-Live-brightgreen)
![Next.js](https://img.shields.io/badge/Next.js-15.3.4-black)
![TypeScript](https://img.shields.io/badge/TypeScript-5.0-blue)
![Tailwind CSS](https://img.shields.io/badge/Tailwind%20CSS-4.0-38bdf8)

## ✨ Features

- 🎨 **Beautiful UI** - Modern design with dark/light mode support
- ⚡ **Real-time Calculations** - Automatic subtotal, tax, and total calculations
- 📄 **Professional Templates** - Clean, business-ready invoice layouts
- 💾 **PDF Export** - Download invoices as PDF files
- 📱 **Responsive Design** - Works perfectly on all devices
- 🌙 **Dark Mode** - Beautiful dark theme (default) with light mode option
- 🚀 **No Registration** - Start creating invoices immediately
- 💰 **Completely Free** - No hidden costs or limitations
- 🔍 **SEO Optimized** - Server-side rendered landing page for better search visibility

## 🛠️ Tech Stack

- **Framework**: Next.js 15.3.4 with App Router
- **Language**: TypeScript
- **Styling**: Tailwind CSS 4.0
- **UI Components**: shadcn/ui
- **Icons**: Lucide React
- **Theme**: next-themes for dark/light mode

## 🚀 Getting Started

1. **Clone the repository**
   ```bash
   git clone https://github.com/mumer119131/next-invoice-generator.git
   cd next-invoice-generator
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Run the development server**
   ```bash
   npm run dev
   ```

4. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000) to see the app.

## 📋 How to Use

1. **Fill in Details** - Add your business information and client details
2. **Add Items** - Include invoice items with descriptions, quantities, and rates
3. **Set Tax Rate** - Configure tax percentage if applicable
4. **Preview** - Review your invoice in the beautiful preview mode
5. **Download** - Export as PDF and send to your clients

## 🎯 Features Overview

### 🏠 Landing Page
- Hero section with clear value proposition
- Feature showcase with benefits
- Step-by-step process explanation
- Customer testimonials
- Call-to-action sections
- **Server-side rendered** for optimal SEO performance

### 🧾 Invoice Generator
- Complete invoice form with all necessary fields
- Dynamic item management (add/remove items)
- Automatic calculations for totals
- Tax rate configuration
- Notes and terms section
- Real-time preview

### 🎨 Design System
- Consistent branding and colors
- Dark mode as default with light mode toggle
- Responsive design for all screen sizes
- Print-optimized invoice layouts
- Smooth animations and transitions
- **Hybrid SSR/CSR architecture** for optimal performance

## 📁 Project Structure

```
├── app/
│   ├── globals.css          # Global styles and theme variables
│   ├── layout.tsx           # Root layout with theme provider
│   ├── page.tsx            # Landing page (SSR optimized)
│   └── invoice/
│       └── page.tsx        # Invoice generator page
├── components/
│   ├── ui/                 # shadcn/ui components
│   ├── invoice-generator.tsx # Main invoice generator
│   ├── landing-page.tsx    # Landing page component (SSR)
│   ├── landing-header.tsx  # Header component (client)
│   ├── landing-hero.tsx    # Hero section (client)
│   ├── landing-cta.tsx     # CTA section (client)
│   ├── theme-provider.tsx  # Theme context provider
│   └── theme-toggle.tsx    # Theme toggle button
└── lib/
    └── utils.ts            # Utility functions
```

## 🎨 Customization

### Theme Colors
The app uses a beautiful color scheme that adapts to both light and dark modes:
- **Primary**: Blue (#2563eb / #3b82f6)
- **Background**: White/Gray-50 (light) / Gray-900/Gray-800 (dark)
- **Text**: Gray-900 (light) / White (dark)

### Adding New Features
1. Create new components in the `components/` directory
2. Add new pages in the `app/` directory
3. Use the existing design system and components
4. Follow the TypeScript patterns established in the codebase

## 🏗️ Architecture

### Server-Side Rendering (SSR)
The landing page is fully server-side rendered for optimal SEO performance:

- **Static Content**: Most of the landing page content is rendered on the server
- **Client Components**: Interactive elements (theme toggle, buttons) are hydrated on the client
- **SEO Optimized**: Search engines can easily crawl and index the content
- **Performance**: Faster initial page load and better Core Web Vitals

### Component Architecture
- **Hybrid Approach**: Combines SSR for content and CSR for interactivity
- **Modular Design**: Separate client components for specific interactive features
- **Theme Support**: Dark/light mode works seamlessly with SSR

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

1. Fork the project
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 🚀 Deployment

### Vercel (Recommended)
1. Push your code to GitHub
2. Import your repository in [Vercel](https://vercel.com)
3. Deploy with zero configuration

### Other Platforms
The app can be deployed on any platform that supports Next.js:
- Netlify
- Railway
- DigitalOcean App Platform
- AWS Amplify

## 📝 License

This project is open source and available under the [MIT License](LICENSE).

## 🙏 Acknowledgments

- [Next.js](https://nextjs.org/) for the amazing React framework
- [Tailwind CSS](https://tailwindcss.com/) for the utility-first CSS framework
- [shadcn/ui](https://ui.shadcn.com/) for the beautiful component library
- [Lucide](https://lucide.dev/) for the icon library
- [Vercel](https://vercel.com/) for hosting and deployment

---

Made with ❤️ for small businesses and freelancers who need professional invoicing solutions.
