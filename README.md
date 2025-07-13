# TalentBridge - Job Platform

A modern job platform connecting talented developers with innovative companies. Built with Next.js 15, TypeScript, Tailwind CSS, and Shadcn/UI.

## ✨ Features

- **Modern Design**: Clean, professional interface with dark/light theme support
- **Responsive**: Fully responsive design that works on all devices
- **Job Search**: Advanced filtering and search capabilities
- **Company Profiles**: Detailed company information and job listings
- **User Experience**: Smooth animations and intuitive navigation
- **Accessibility**: Built with accessibility best practices
- **Performance**: Optimized for speed and SEO

## 🚀 Tech Stack

- **Framework**: Next.js 15 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **UI Components**: Shadcn/UI
- **Icons**: Lucide React
- **Theme**: Next Themes
- **Deployment**: Vercel (recommended)

## 📋 Prerequisites

- Node.js 18.17 or later
- npm, yarn, pnpm, or bun
- Git

## 🛠️ Installation & Setup

### 1. Clone the Repository

```bash
git clone https://github.com/YOUR_USERNAME/talentbridge.git
cd talentbridge
```

### 2. Install Dependencies

```bash
npm install
# or
yarn install
# or
pnpm install
```

### 3. Set Up Environment (Optional)

Create a `.env.local` file in the root directory:

```env
# Add your environment variables here
NEXT_PUBLIC_APP_URL=http://localhost:3000
```

### 4. Run Development Server

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

## 📁 Project Structure

```
talentbridge/
├── src/
│   ├── app/                    # Next.js app router pages
│   │   ├── jobs/              # Job listing pages
│   │   ├── companies/         # Company pages
│   │   ├── layout.tsx         # Root layout
│   │   ├── page.tsx          # Home page
│   │   └── globals.css       # Global styles
│   ├── components/
│   │   ├── ui/               # Shadcn/UI components
│   │   ├── layout/           # Layout components
│   │   ├── sections/         # Page sections
│   │   └── features/         # Feature-specific components
│   ├── lib/                  # Utility functions
│   └── types/                # TypeScript type definitions
├── public/                   # Static assets
├── components.json           # Shadcn/UI configuration
├── tailwind.config.ts        # Tailwind CSS configuration
└── next.config.js           # Next.js configuration
```

## 🎨 Adding New Components

### Shadcn/UI Components

```bash
npx shadcn@latest add [component-name]
```

Example:
```bash
npx shadcn@latest add dialog
npx shadcn@latest add form
npx shadcn@latest add table
```

### Custom Components

1. Create your component in the appropriate directory:
   - UI components: `src/components/ui/`
   - Layout components: `src/components/layout/`
   - Feature components: `src/components/features/`

2. Follow the existing patterns and naming conventions

## 🚀 Deployment

### Deploy to Vercel (Recommended)

1. **Using Vercel CLI:**
   ```bash
   npm install -g vercel
   vercel
   ```

2. **Using GitHub Integration:**
   - Push your code to GitHub
   - Connect your repository to Vercel
   - Deploy automatically on every push

### Deploy to Other Platforms

#### Netlify
```bash
npm run build
# Upload the `.next` folder to Netlify
```

#### Railway
```bash
npm run build
railway login
railway deploy
```

#### Docker
```dockerfile
FROM node:18-alpine

WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
RUN npm run build

EXPOSE 3000
CMD ["npm", "start"]
```

## 📱 Features Walkthrough

### Home Page
- Hero section with search functionality
- Platform statistics
- Featured jobs and companies
- Call-to-action sections

### Jobs Page
- Advanced filtering system
- Search by skills, location, company
- Grid and list view options
- Salary range filtering

### Companies Page
- Company profiles with ratings
- Industry and size filtering
- Job openings per company
- Follow/favorite functionality

### Responsive Design
- Mobile-first approach
- Tablet and desktop optimizations
- Touch-friendly interactions
- Accessible navigation

## 🔧 Development Commands

```bash
# Development server
npm run dev

# Build for production
npm run build

# Start production server
npm run start

# Run linting
npm run lint

# Type checking
npx tsc --noEmit
```

## 🎯 Customization

### Theme Configuration

Edit `src/app/globals.css` to customize colors and design tokens:

```css
:root {
  --background: 0 0% 100%;
  --foreground: 0 0% 3.9%;
  /* Add your custom variables */
}
```

### Component Styling

Components use Tailwind classes and can be customized by editing the respective component files.

### Adding New Pages

1. Create a new directory in `src/app/`
2. Add a `page.tsx` file
3. Export a default React component

Example:
```typescript
// src/app/about/page.tsx
export default function AboutPage() {
  return (
    
      About TalentBridge
    
  );
}
```

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch: `git checkout -b feature/your-feature-name`
3. Make your changes
4. Commit your changes: `git commit -m 'Add some feature'`
5. Push to the branch: `git push origin feature/your-feature-name`
6. Submit a pull request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- [Next.js](https://nextjs.org/) - The React framework
- [Tailwind CSS](https://tailwindcss.com/) - Utility-first CSS framework
- [Shadcn/UI](https://ui.shadcn.com/) - Beautifully designed components
- [Lucide](https://lucide.dev/) - Beautiful & consistent icons
- [Vercel](https://vercel.com/) - Deployment platform

## 📞 Support

If you have any questions or need help with setup, please open an issue on GitHub or contact the development team.

---

**Happy coding! 🚀**
