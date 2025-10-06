# Skyabove.com - AI Marketing Agency

Modern, high-performance website built with Astro for Skyabove AI Marketing Agency.

## 🚀 Live Site

- **Production:** https://skyabove.com
- **Repository:** https://github.com/skyaboveme/skyabove.com

## 🎯 Features

- ✨ Hero section with animated gradient orbs
- 🛠️ 6 AI-powered service offerings
- 📊 Portfolio with case studies and metrics
- 💬 Client testimonials
- 📧 Interactive contact form
- 📱 Fully responsive design
- ⚡ Optimized performance with Astro
- 🎨 Modern UI with smooth animations

## 🚀 Project Structure

```text
/
├── public/
│   ├── CNAME              # Custom domain configuration
│   └── favicon.svg
├── src/
│   ├── components/        # Reusable Astro components
│   │   ├── Hero.astro
│   │   ├── Services.astro
│   │   ├── Portfolio.astro
│   │   ├── Testimonials.astro
│   │   ├── Contact.astro
│   │   ├── Navigation.astro
│   │   └── Footer.astro
│   ├── layouts/
│   │   └── Layout.astro   # Main page layout
│   ├── pages/
│   │   └── index.astro    # Homepage
│   └── styles/
│       └── global.css     # Global styles
├── .github/
│   └── workflows/
│       └── deploy.yml     # GitHub Pages deployment
└── package.json
```

## 🧞 Commands

All commands are run from the root of the project, from a terminal:

| Command                   | Action                                           |
| :------------------------ | :----------------------------------------------- |
| `npm install`             | Installs dependencies                            |
| `npm run dev`             | Starts local dev server at `localhost:4321`      |
| `npm run build`           | Build your production site to `./dist/`          |
| `npm run preview`         | Preview your build locally, before deploying     |
| `npm run astro ...`       | Run CLI commands like `astro add`, `astro check` |
| `npm run astro -- --help` | Get help using the Astro CLI                     |

## 🚀 Deployment

This site is automatically deployed to GitHub Pages using GitHub Actions.

### Setup Instructions

1. **Enable GitHub Pages:**
   - Go to repository Settings → Pages
   - Set Source to "GitHub Actions"
   - Add custom domain: `skyabove.com`

2. **Configure DNS (GoDaddy):**
   - See `DNS-SETUP.md` for detailed instructions
   - Add 4 A records pointing to GitHub Pages IPs
   - Add CNAME record for www subdomain

3. **Automatic Deployment:**
   - Every push to `main` triggers a new deployment
   - Build and deploy handled by GitHub Actions

## 📝 Tech Stack

- **Framework:** [Astro](https://astro.build)
- **Styling:** Custom CSS with CSS Variables
- **Fonts:** Inter (Google Fonts)
- **Hosting:** GitHub Pages
- **CI/CD:** GitHub Actions
- **Domain:** skyabove.com (GoDaddy)

## 👀 Learn More

- [Astro Documentation](https://docs.astro.build)
- [GitHub Pages Documentation](https://docs.github.com/pages)
