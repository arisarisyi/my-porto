# Imam Al Arisyi - Personal Portfolio

A modern, responsive, and interactive personal portfolio website built with React + TypeScript + Vite.

## Features

- ⚡ **React 18** with TypeScript
- 🎨 **Tailwind CSS** for styling
- 🎭 **Framer Motion** for smooth animations
- 📱 **Fully Responsive** design (mobile-first)
- 🎯 **Smooth Scrolling** navigation
- 📍 **Scroll Spy** for active section highlighting
- 🔍 **Project Filtering** by category
- 📧 **Contact Form** (client-side email integration)
- 🌙 **Dark Theme** by default
- ♿ **Accessible** with proper ARIA labels

## Tech Stack

- **Framework**: React 18 with TypeScript
- **Bundler**: Vite
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion
- **Icons**: Lucide React
- **Components**: Custom UI library with reusable components

## Architecture

The project follows a pragmatic, feature-oriented structure:

```
src/
├── app/                 # Main app components
├── components/          # Reusable UI components
│   ├── layout/         # Layout components (Navbar, Footer, Section, Container)
│   └── ui/             # Pure UI components (Button, Badge, Card, IconLink)
├── features/           # Feature-specific components
│   ├── hero/           # Hero section
│   ├── skills/         # Skills section
│   ├── experience/     # Experience timeline
│   ├── projects/       # Projects with filtering
│   ├── certifications/ # Certifications grid
│   ├── education/      # Education details
│   └── contact/        # Contact form and info
├── data/               # Static data and content
├── hooks/              # Custom React hooks
├── types/              # TypeScript type definitions
└── styles/             # Global styles and Tailwind config
```

## Getting Started

### Prerequisites

- Node.js (v18 or higher)
- npm or yarn

### Installation

1. Clone the repository:
   ```bash
   git clone <repository-url>
   cd battle-with-glm
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the development server:
   ```bash
   npm run dev
   ```

4. Open your browser and navigate to `http://localhost:5173`

### Building for Production

```bash
npm run build
```

The built files will be in the `dist` directory.

### Preview Production Build

```bash
npm run preview
```

## Customization

### Updating Personal Information

All personal data is stored in `src/data/profile.ts`. Update the following:

1. **Personal Info** (`personalInfo` object):
   - Name, title, location, contact details
   - Professional summary

2. **Skills** (`skills` array):
   - Add/remove skill categories
   - Update skills within each category

3. **Experience** (`experiences` array):
   - Add new job experiences
   - Update highlights for each role

4. **Projects** (`projects` array):
   - Add new projects
   - Update descriptions and technologies
   - Configure project categories

5. **Certifications** (`certifications` array):
   - Add new certifications
   - Update issuers and dates

6. **Education** (`education` object):
   - Update degree, university, and period

7. **Social Links** (`socialLinks` array):
   - Update social media URLs

### Styling Customization

1. **Color Scheme**: Update the `accent` colors in `tailwind.config.js`
2. **Typography**: Modify font families in `tailwind.config.js`
3. **Animations**: Adjust animation keyframes and variants in components
4. **Responsive Breakpoints**: Tailwind default breakpoints are used

### Adding New Sections

1. Create a new folder in `src/features/`
2. Build your section component
3. Add the section to `App.tsx`
4. Update the navigation items in `data/profile.ts`

## Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint

## Deployment

The project can be deployed to any static hosting service:

1. **Vercel**: Connect your GitHub repository and deploy automatically
2. **Netlify**: Deploy with the build command `npm run build`
3. **GitHub Pages**: Build and push the `dist` folder to `gh-pages` branch
4. **Firebase Hosting**: Deploy the `dist` folder

## Performance

- ⚡️ Fast loading with Vite's optimized build
- 🖼️ Optimized images and assets
- 📦 Code splitting and lazy loading
- 🎯 Minimal bundle size
- 🚀 Smooth animations with GPU acceleration

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## License

This project is open source and available under the [MIT License](LICENSE).

## Contact

Imam Al Arisyi
- Email: alarisyi@gmail.com
- GitHub: https://github.com/arisarisyi
- LinkedIn: https://linkedin.com/in/imam-al-arisyi