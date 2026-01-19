# Imam Al Arsyi - Portfolio Website

Personal portfolio website built with modern web technologies to showcase professional experience, projects, skills, and certifications.

## Tech Stack

- **Framework**: [React 18](https://react.dev/) with [TypeScript](https://www.typescriptlang.org/)
- **Build Tool**: [Vite](https://vitejs.dev/)
- **Styling**: [Tailwind CSS](https://tailwindcss.com/)
- **Animations**: [Framer Motion](https://www.framer.com/motion/)
- **Icons**: [Lucide React](https://lucide.dev/) & [React Icons](https://react-icons.github.io/react-icons/)

## Features

- Responsive single-page application
- Dark mode theme
- Smooth scroll navigation with active section highlighting
- Animated loading screen
- Feature-rich sections:
  - Hero/About
  - Work Experience
  - Projects showcase
  - Skills
  - Certifications
  - Education
  - Contact

## Project Structure

```
src/
├── app/
│   └── App.tsx              # Main application component
├── components/
│   ├── layout/              # Layout components (Navbar, Footer, Container, Section)
│   ├── ui/                  # Reusable UI components (Button, Card, Badge, IconLink)
│   └── effects/             # Special effects (LoadingScreen)
├── features/                # Feature sections (Hero, Experience, Projects, Skills, etc.)
├── hooks/                   # Custom React hooks (useScrollSpy, useScrollToSection, useTheme)
├── types/                   # TypeScript type definitions
└── data/                    # Profile and content data
```

## Getting Started

### Installation

```bash
npm install
```

### Development

```bash
npm run dev
```

Open [http://localhost:5173](http://localhost:5173) to view it in your browser.

### Build

```bash
npm run build
```

### Preview

```bash
npm run preview
```

## Scripts

| Command | Description |
|---------|-------------|
| `npm run dev` | Start development server |
| `npm run build` | Build for production |
| `npm run preview` | Preview production build |
| `npm run lint` | Run ESLint |

## Customization

To personalize this portfolio for your own use:

1. Update profile information in `src/data/profile.ts`
2. Replace the photo in `public/me.jpeg`
3. Update CV in `public/cv.pdf`
4. Modify sections in `src/features/` as needed

## License

This project is private and proprietary.
