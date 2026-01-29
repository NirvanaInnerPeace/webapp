# Seek Nirvana 🧘‍♂️💍

> **Ancient Wisdom × AI Technology**  
> Smart ring for lucid dreaming, mindfulness, and longevity.

[![Next.js](https://img.shields.io/badge/Next.js-15-black?style=flat-square&logo=next.js)](https://nextjs.org/) [![React](https://img.shields.io/badge/React-19-61DAFB?style=flat-square&logo=react)](https://react.dev/) [![TypeScript](https://img.shields.io/badge/TypeScript-5.0-3178C6?style=flat-square&logo=typescript)](https://www.typescriptlang.org/) [![Tailwind CSS](https://img.shields.io/badge/Tailwind-3.4-06B6D4?style=flat-square&logo=tailwindcss)](https://tailwindcss.com/) [![License](https://img.shields.io/badge/License-AGPL%20v3-blue.svg)](LICENSE)

![Nirvana Ring Preview](public/images/preview.png)

## 🌟 Overview

**Nirvana Ring** is an affordable smart ring ($99) that guides users toward lucid dreams, tracks vitality, and awakens inner consciousness. This repository contains the Next.js frontend for the product landing page.

### Key Features

- 🔮 **Lucid Dreaming** - Advanced REM detection with customizable cues (lights, sounds, vibrations)
- 💚 **Vitality Tracking** - HRV, temperature, and movement monitoring
- 🧠 **Mindful AI** - Personalized meditation guidance
- 📊 **Sleep Alchemy** - Optimize restorative sleep patterns
- 🔒 **Sacred Privacy** - No data selling, no subscriptions

## 🛠️ Tech Stack

| Category | Technology |
|----------|------------|
| Framework | [Next.js 15](https://nextjs.org/) (App Router) |
| Language | [TypeScript](https://www.typescriptlang.org/) |
| Styling | [Tailwind CSS](https://tailwindcss.com/) |
| Animation | [Framer Motion](https://www.framer.com/motion/) |
| Icons | [Lucide React](https://lucide.dev/) |
| Build Output | Static Export |

## 📁 Project Structure

```
├── app/                    # Next.js App Router
│   ├── globals.css        # Global styles & Tailwind
│   ├── layout.tsx         # Root layout with metadata
│   ├── page.tsx           # Homepage
│   ├── privacy/           # Privacy Policy page
│   └── terms/             # Terms of Service page
├── components/
│   ├── Navigation.tsx     # Fixed navbar
│   ├── animations/        # Reusable animation components
│   │   ├── FadeIn.tsx
│   │   ├── FloatingElement.tsx
│   │   └── ...
│   └── sections/          # Page sections
│       ├── Hero.tsx
│       ├── Features.tsx
│       ├── HowItWorks.tsx
│       ├── Benefits.tsx
│       ├── QuoteCarousel.tsx
│       ├── Newsletter.tsx
│       ├── Technology.tsx
│       ├── Pricing.tsx
│       └── Footer.tsx
├── lib/
│   └── utils.ts           # Utility functions
├── public/
│   ├── favicon.svg        # Ring favicon
│   └── images/            # Static images
├── .github/workflows/
│   └── deploy.yml         # GitHub Pages deployment
├── tailwind.config.js     # Tailwind + custom theme
└── next.config.js         # Next.js config (static export)
```

## 🎨 Design System

### Color Palette

| Color | Hex | Usage |
|-------|-----|-------|
| Dark | `#0a0a0f` | Background |
| Jade | `#00a86b` | Primary accent (vitality) |
| Gold | `#c9a227` | Secondary accent (wisdom) |
| Cyan | `#00d4ff` | Tertiary accent (technology) |

### Typography

- **Font Family:** Inter (system-ui fallback)
- **Weights:** 300 (light), 400 (normal), 500 (medium), 600 (semibold), 700 (bold)

## 🚀 Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) 18+ 
- [pnpm](https://pnpm.io/) (recommended)

### Installation

```bash
# Clone the repository
git clone https://github.com/yourusername/nirvana-ring.git
cd nirvana-ring

# Install dependencies
pnpm install

# Start development server
pnpm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### Build for Production

```bash
# Create static export
pnpm run build

# Output will be in `dist/` folder
```

## 📤 Deployment

### GitHub Pages (Automated)

1. Push to `main` branch
2. GitHub Action automatically builds and deploys
3. Enable GitHub Pages in repo settings (Source: GitHub Actions)

### Manual Deployment

```bash
# Build static site
pnpm run build

# Deploy `dist/` folder to your hosting provider
```

## 📝 Environment Variables

Create `.env.local` for local development:

```env
# Optional: Analytics, API keys, etc.
NEXT_PUBLIC_GA_ID=your_google_analytics_id
```

## 🧪 Available Scripts

| Command | Description |
|---------|-------------|
| `pnpm dev` | Start development server |
| `pnpm build` | Create production build |
| `pnpm start` | Start production server |

## 📄 Pages

- **/** - Homepage with all sections
- **/privacy** - Privacy Policy
- **/terms** - Terms of Service

## 🤝 Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing`)
5. Open a Pull Request

## 📜 License

This project is licensed under the GNU Affero General Public License v3.0 (AGPL v3.0) - see [LICENSE](LICENSE) file.

## 🙏 Acknowledgments

- Design inspired by Eastern spirituality and modern AI aesthetics
- Quotes from ancient wisdom traditions (Lao Tzu, Rumi, Buddha, etc.)
- Icons by [Lucide](https://lucide.dev/)

## 📞 Contact

- **Website:** [seeknirvana.com](https://seeknirvana.com)
- **Email:** support@seeknirvana.com
- **Twitter:** [@SeekNirvana](https://twitter.com/SeekNirvana)

---

<p align="center">
  <em> योगः कर्मसु कौशलम् </em><br>
  <em> Yoga is skill in action </em> — Bhagavad Gita
</p>
