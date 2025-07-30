# EL HANAFI YASSINE - Portfolio

A modern, responsive portfolio website built with React and TypeScript showcasing my skills, experience, and projects.

## 🚀 Features

- **Modern Design**: Clean and professional design with smooth animations
- **Responsive**: Fully responsive design that works on all devices
- **TypeScript**: Built with TypeScript for better type safety and developer experience
- **CSS Modules**: Organized styling with CSS modules for better maintainability
- **Interactive Components**: Dynamic timeline, text sphere, and smooth scrolling
- **Contact Form**: Functional contact form for easy communication
- **SEO Optimized**: Proper meta tags and structured data

## 🛠️ Tech Stack

- **Frontend**: React 18, TypeScript
- **Styling**: CSS Modules, Bootstrap 5
- **Icons**: Font Awesome
- **Animations**: TagCloud for text sphere effect
- **Deployment**: GitHub Pages

## 📁 Improved Project Structure

```
src/
├── assets/           # Static assets (images, etc.)
│   └── images/      # Image files
├── components/       # Legacy components (to be removed)
├── constants/        # Data constants and configuration
├── hooks/           # Custom React hooks
├── layout/          # Layout components (SideBar, Footer, etc.)
│   ├── index.ts     # Layout exports
│   ├── SideBar.tsx
│   ├── Footer.tsx
│   └── *.module.css
├── sections/        # Main page sections
│   ├── index.ts     # Section exports
│   ├── Intro.tsx    # Hero section
│   ├── About.tsx    # About section
│   ├── Experience.tsx # Experience section
│   ├── Projects.tsx # Projects section
│   ├── Contact.tsx  # Contact section
│   └── *.module.css
├── styles/          # Global styles
│   └── globals.css
├── types/           # TypeScript type definitions
│   ├── index.ts
│   └── declarations.d.ts
├── ui/              # Reusable UI components
│   ├── index.ts     # UI exports
│   ├── ProjectCard.tsx
│   ├── TextSphere.tsx
│   ├── Timeline.tsx
│   ├── ResumeDownloadButton.tsx
│   └── *.module.css
├── utils/           # Utility functions
│   └── gtm.ts
├── App.tsx          # Main application component
└── index.tsx        # Application entry point
```

## 🎯 Structure Benefits

### **1. Clear Separation of Concerns**
- **`sections/`**: Main page sections (Intro, About, Experience, etc.)
- **`layout/`**: Layout components (SideBar, Footer, Header)
- **`ui/`**: Reusable UI components (ProjectCard, TextSphere, etc.)
- **`hooks/`**: Custom React hooks for shared logic
- **`constants/`**: Centralized data management

### **2. Better Import Organization**
```typescript
// Clean imports using index files
import { SideBar, Footer } from './layout';
import { Intro, About, Experience, Projects, Contact } from './sections';
import { ProjectCard, TextSphere } from './ui';
```

### **3. Scalable Architecture**
- Easy to add new sections
- Reusable UI components
- Centralized data management
- Type-safe development

## 🎨 Design System

### Colors
- **Primary**: #64ffda (Cyan)
- **Background**: #0a192f (Dark Blue)
- **Secondary Background**: #112240 (Lighter Dark Blue)
- **Text Primary**: #ccd6f6 (Light Gray)
- **Text Secondary**: #8892b0 (Gray)

### Typography
- **Font Family**: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif
- **Headings**: Bold weights with proper hierarchy
- **Body Text**: Readable line heights and spacing

## 🚀 Getting Started

### Prerequisites
- Node.js (v14 or higher)
- npm or yarn

### Installation

1. Clone the repository
```bash
git clone https://github.com/yourusername/portfolio.git
cd portfolio
```

2. Install dependencies
```bash
npm install
```

3. Start the development server
```bash
npm start
```

4. Open [http://localhost:3000](http://localhost:3000) to view it in the browser

### Building for Production

```bash
npm run build
```

### Deployment

The project is configured for GitHub Pages deployment:

```bash
npm run deploy
```

## 📝 Customization

### Personal Information
Update your personal information in `src/constants/data.ts`:

```typescript
export const PERSONAL_INFO = {
  name: "Your Name",
  title: "Your Title",
  // ... other personal details
};
```

### Projects
Add or modify projects in the same file:

```typescript
export const PROJECTS: Project[] = [
  {
    id: 1,
    title: "Project Name",
    description: "Project description",
    tools: "Technologies used",
    github: "GitHub URL",
  },
  // ... more projects
];
```

### Styling
- Global styles are in `src/styles/globals.css`
- Component-specific styles use CSS modules (`.module.css` files)
- Color variables and design tokens are defined in the global CSS

## 🎯 Key Improvements Made

1. **TypeScript Migration**: Converted all JavaScript files to TypeScript for better type safety
2. **CSS Modules**: Replaced scattered CSS files with organized CSS modules
3. **Constants File**: Centralized all data in a single constants file
4. **Better Structure**: Improved folder organization with clear separation of concerns
5. **Type Definitions**: Added proper TypeScript interfaces for all data structures
6. **Modern React**: Updated to use modern React patterns and hooks
7. **Responsive Design**: Enhanced responsive design with better mobile experience
8. **Performance**: Optimized imports and component structure for better performance
9. **Clean Architecture**: Organized components by purpose (sections, layout, ui)
10. **Index Files**: Clean imports using barrel exports

## 📱 Responsive Design

The portfolio is fully responsive and optimized for:
- Desktop (1200px+)
- Tablet (768px - 1199px)
- Mobile (320px - 767px)

## 🔧 Development

### Code Style
- Use TypeScript for all new components
- Follow the existing CSS module pattern
- Use proper TypeScript interfaces for props
- Maintain consistent naming conventions

### Adding New Sections
1. Create a new component in `src/sections/`
2. Add corresponding CSS module
3. Update the main App component
4. Add navigation links if needed

### Adding New UI Components
1. Create a new component in `src/ui/`
2. Add corresponding CSS module
3. Export from `src/ui/index.ts`
4. Import where needed

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## 📞 Contact

- **Email**: elhanafiyassine21@gmail.com
- **LinkedIn**: [EL HANAFI YASSINE](https://www.linkedin.com/in/elhanafiyassine/)
- **GitHub**: [yassinehanafi3](https://github.com/yassinehanafi3)

---

Built with ❤️ by EL HANAFI YASSINE
