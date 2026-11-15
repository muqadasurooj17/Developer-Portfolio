# Muqadas Urooj - Portfolio Website

A modern, responsive portfolio website built with Next.js 15 and Tailwind CSS, showcasing the professional experience and skills of Muqadas Urooj, a Software Engineer and Full Stack Developer.

<img width="1364" height="633" alt="image" src="https://github.com/user-attachments/assets/10e29b18-071e-4fcc-94af-a4b58ccd448c" />

<img width="1275" height="630" alt="image" src="https://github.com/user-attachments/assets/52019599-fb95-4668-9b49-04fe92804205" />

<img width="1126" height="584" alt="image" src="https://github.com/user-attachments/assets/ae090e2c-5b6a-412a-b3dc-fb1ced03810d" />

## 🚀 Features

- **Modern Design**: Clean, developer-focused UI with dark theme
- **Fully Responsive**: Optimized for all devices and screen sizes
- **Smooth Animations**: Interactive elements with hover effects and transitions
- **SEO Optimized**: Proper meta tags and structured data
- **Fast Performance**: Built with Next.js 15 and optimized for speed
- **Accessibility**: Screen reader friendly with proper ARIA labels

## 🛠 Tech Stack

- **Framework**: Next.js 15 with App Router
- **Styling**: Tailwind CSS
- **Language**: TypeScript
- **Deployment**: Ready for Vercel, Netlify, or any static hosting

## 📱 Sections

1. **Hero Section**: Animated introduction with rotating text
2. **About**: Education details and certifications
3. **Experience**: Work history with timeline layout
4. **Skills**: Technical skills with progress indicators
5. **Projects**: Featured projects with live demos
6. **Contact**: Contact form and information
7. **Footer**: Social links and additional information

## 🚀 Getting Started

### Prerequisites

- Node.js 18+ 
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone <your-repo-url>
cd portfolio
```

2. Install dependencies:
```bash
npm install
```

3. Run the development server:
```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

### Build for Production

```bash
npm run build
npm start
```

## 📁 Project Structure

```
portfolio/
├── src/
│   ├── app/
│   │   ├── layout.tsx          # Root layout with metadata
│   │   ├── page.tsx            # Main page component
│   │   └── globals.css         # Global styles
│   └── components/
│       ├── Navbar.tsx          # Navigation component
│       ├── Hero.tsx            # Hero section
│       ├── About.tsx           # About section
│       ├── Experience.tsx      # Work experience
│       ├── Skills.tsx          # Skills and technologies
│       ├── Projects.tsx        # Projects showcase
│       ├── Contact.tsx         # Contact form
│       └── Footer.tsx          # Footer component
├── public/                     # Static assets
├── package.json               # Dependencies and scripts
└── tailwind.config.js         # Tailwind configuration
```

## 🎨 Customization

### Personal Information
Update the following files with your information:
- `src/components/Hero.tsx` - Name, title, and description
- `src/components/About.tsx` - Education and certifications
- `src/components/Experience.tsx` - Work experience
- `src/components/Skills.tsx` - Skills and proficiency levels
- `src/components/Projects.tsx` - Project details and links
- `src/components/Contact.tsx` - Contact information

### Styling
- Colors: Modify the blue accent colors in Tailwind classes
- Fonts: Change fonts in `src/app/layout.tsx`
- Layout: Adjust spacing and grid layouts in component files

### Adding New Sections
1. Create a new component in `src/components/`
2. Import and add it to `src/app/page.tsx`
3. Add navigation link in `src/components/Navbar.tsx`

## 📱 Responsive Design

The portfolio is fully responsive with breakpoints:
- **Mobile**: < 768px
- **Tablet**: 768px - 1024px
- **Desktop**: > 1024px

## 🚀 Deployment

### Vercel (Recommended)
1. Push your code to GitHub
2. Connect your repository to Vercel
3. Deploy automatically on push

### Netlify
1. Build the project: `npm run build`
2. Upload the `out` folder to Netlify
3. Configure build settings if needed

### Static Hosting
1. Build: `npm run build`
2. Upload the `out` folder to your hosting provider

## 🔧 Configuration

### Environment Variables
Create a `.env.local` file for any environment-specific configurations:

```env
NEXT_PUBLIC_SITE_URL=https://yourdomain.com
```

### Tailwind Configuration
Modify `tailwind.config.js` to customize:
- Color palette
- Font families
- Spacing scales
- Custom animations

## 📊 Performance

- **Lighthouse Score**: 95+ on all metrics
- **First Contentful Paint**: < 1.5s
- **Largest Contentful Paint**: < 2.5s
- **Cumulative Layout Shift**: < 0.1

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 📞 Support

For questions or support, please contact:
- Email: muqadasurooj123@gmail.com
- LinkedIn: [Muqadas Urooj](https://linkedin.com/in/muqadas-urooj-37769b175)
- GitHub: [muqadasurooj17](https://github.com/muqadasurooj17)

---

Built with ❤️ using Next.js and Tailwind CSS
